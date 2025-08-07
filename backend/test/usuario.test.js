const db = require('../config/db');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const setupDatabase = require('./setup.js');


// Datos de prueba
const usuarioTest = {
  email: 'test@example.com',
  password: 'password123',
  nombre: 'Test',
  apellido: 'User'
};

// Configuración inicial
beforeAll(async () => {
  await setupDatabase();
  await db.execute('DELETE FROM usuario'); // Limpiar tabla usuario
});

afterAll(async () => {
  await db.end(); // Cerrar conexión
});
describe('Modelo Usuario', () => {
  test('Crear un nuevo usuario', async () => {
    const userId = await Usuario.crear(usuarioTest);
    expect(userId).toBeDefined();
    expect(typeof userId).toBe('number');
  });

  test('Error al crear usuario con email duplicado', async () => {
    await expect(Usuario.crear(usuarioTest))
      .rejects
      .toThrow('Error al crear usuario');
  });

  test('Obtener usuario por ID', async () => {
    // Primero creamos un usuario para luego obtenerlo
    const userId = await Usuario.crear({
      ...usuarioTest,
      email: 'test2@example.com'
    });
    
    const usuario = await Usuario.obtenerPorId(userId);
    
    expect(usuario).toBeDefined();
    expect(usuario.usuario_id).toBe(userId);
    expect(usuario.email).toBe('test2@example.com');
    expect(usuario.password).toBeUndefined(); // No debe incluir el password por defecto
  });

  test('Obtener usuario por email', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    
    expect(usuario).toBeDefined();
    expect(usuario.email).toBe(usuarioTest.email);
    expect(usuario.password).toBeDefined(); // Esta consulta sí debe incluir el password
  });

  test('Validar password correcta', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const isValid = await bcrypt.compare(usuarioTest.password, usuario.password);
    
    expect(isValid).toBe(true);
  });

  test('Validar password incorrecta', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const isValid = await bcrypt.compare('password-incorrecta', usuario.password);
    
    expect(isValid).toBe(false);
  });

  test('Generar token JWT', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const token = jwt.sign(
      { id: usuario.usuario_id, email: usuario.email },
      process.env.JWT_SECRET
    );
    
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    
    // Verificar que el token sea válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.id).toBe(usuario.usuario_id);
    expect(decoded.email).toBe(usuario.email);
  });

  test('Actualizar usuario', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const nuevosDatos = {
      nombre: 'NuevoNombre',
      apellido: 'NuevoApellido'
    };
    
    const actualizado = await Usuario.actualizar(usuario.usuario_id, nuevosDatos);
    expect(actualizado).toBe(true);
    
    const usuarioActualizado = await Usuario.obtenerPorId(usuario.usuario_id);
    expect(usuarioActualizado.nombre).toBe('NuevoNombre');
    expect(usuarioActualizado.apellido).toBe('NuevoApellido');
  });

  test('Actualizar password', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const nuevoPassword = 'nuevaPassword123';
    
    const actualizado = await Usuario.actualizar(usuario.usuario_id, {
      password: nuevoPassword
    });
    expect(actualizado).toBe(true);
    
    const usuarioActualizado = await Usuario.obtenerPorEmail(usuarioTest.email);
    const isValid = await bcrypt.compare(nuevoPassword, usuarioActualizado.password);
    expect(isValid).toBe(true);
  });

  test('Listar usuarios con paginación', async () => {
    // Crear varios usuarios de prueba
    for (let i = 0; i < 15; i++) {
      await Usuario.crear({
        email: `test${i}@example.com`,
        password: 'password123',
        nombre: `User${i}`,
        apellido: `Test${i}`
      });
    }
    
    const pagina1 = await Usuario.listar(1, 10);
    expect(pagina1.usuarios.length).toBe(10);
    expect(pagina1.total).toBeGreaterThanOrEqual(15);
    expect(pagina1.paginas).toBeGreaterThanOrEqual(2);
    
    const pagina2 = await Usuario.listar(2, 10);
    expect(pagina2.usuarios.length).toBeGreaterThanOrEqual(5);
  });

  test('Eliminar usuario', async () => {
    const usuario = await Usuario.obtenerPorEmail(usuarioTest.email);
    const eliminado = await Usuario.eliminar(usuario.usuario_id);
    
    expect(eliminado).toBe(true);
    
    const usuarioEliminado = await Usuario.obtenerPorId(usuario.usuario_id);
    expect(usuarioEliminado).toBeNull();
  });
});