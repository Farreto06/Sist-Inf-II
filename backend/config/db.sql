-- 1. Creación de la base de datos
CREATE DATABASE reservas_lanchas_tucacas;

-- 2. Tablas principales
CREATE TABLE usuario (
    usuario_id SERIAL PRIMARY KEY,
    email VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    es_admin BOOLEAN NOT NULL DEFAULT FALSE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lancha (
    lancha_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    capacidad INT NOT NULL CHECK (capacidad > 0),
    descripcion TEXT,
    precio_base DECIMAL(10,2) NOT NULL,
    activa BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE reserva (
    reserva_id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    usuario_id INT NOT NULL REFERENCES usuario(usuario_id) ON DELETE CASCADE,
    lancha_id INT NOT NULL REFERENCES lancha(lancha_id) ON DELETE RESTRICT,
    estado VARCHAR(20) NOT NULL DEFAULT 'PENDIENTE' CHECK (
        estado IN ('PENDIENTE', 'CONFIRMADA', 'CANCELADA', 'COMPLETADA')
    ),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tablas secundarias
CREATE TABLE pago (
    pago_id SERIAL PRIMARY KEY,
    reserva_id INT UNIQUE NOT NULL REFERENCES reserva(reserva_id) ON DELETE CASCADE,
    monto DECIMAL(10,2) NOT NULL,
    metodo VARCHAR(20) NOT NULL CHECK (
        metodo IN ('TARJETA', 'PAYPAL', 'TRANSFERENCIA', 'EFECTIVO')
    ),
    estado VARCHAR(15) NOT NULL DEFAULT 'PENDIENTE' CHECK (
        estado IN ('PENDIENTE', 'COMPLETADO', 'RECHAZADO', 'REEMBOLSADO')
    ),
    transaccion_id VARCHAR(50),
    fecha_pago TIMESTAMP
);

CREATE TABLE resena (
    resena_id SERIAL PRIMARY KEY,
    lancha_id INT NOT NULL REFERENCES lancha(lancha_id) ON DELETE CASCADE,
    usuario_id INT NOT NULL REFERENCES usuario(usuario_id) ON DELETE CASCADE,
    calificacion INT NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    aprobada BOOLEAN DEFAULT FALSE
);

CREATE TABLE imagen (
    imagen_id SERIAL PRIMARY KEY,
    lancha_id INT NOT NULL REFERENCES lancha(lancha_id) ON DELETE CASCADE,
    url_imagen VARCHAR(255) NOT NULL,
    es_principal BOOLEAN NOT NULL DEFAULT FALSE,
    orden INT DEFAULT 0
);

CREATE TABLE disponibilidad (
    disponibilidad_id SERIAL PRIMARY KEY,
    lancha_id INT NOT NULL REFERENCES lancha(lancha_id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    motivo VARCHAR(50) CHECK (
        motivo IN ('MANTENIMIENTO', 'RESERVADO', 'INACTIVO', 'OTRO')
    ),
    UNIQUE (lancha_id, fecha)
);

-- 4. Índices para optimización
CREATE INDEX idx_reserva_fecha ON reserva(fecha);
CREATE INDEX idx_reserva_usuario ON reserva(usuario_id);
CREATE INDEX idx_resena_lancha ON resena(lancha_id);
CREATE INDEX idx_disponibilidad ON disponibilidad(lancha_id, fecha);

-- 5. Vista para reportes
CREATE VIEW vista_reservas_completas AS
SELECT 
    r.reserva_id,
    r.fecha,
    u.nombre || ' ' || u.apellido AS cliente,
    l.nombre AS lancha,
    p.monto,
    p.estado AS estado_pago,
    r.estado AS estado_reserva
FROM reserva r
JOIN usuario u ON r.usuario_id = u.usuario_id
JOIN lancha l ON r.lancha_id = l.lancha_id
LEFT JOIN pago p ON r.reserva_id = p.reserva_id;