<script setup>
// Toggle entre Login y Register
const tabs = document.querySelectorAll('.tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover clase active de todos los tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Añadir clase active al tab clickeado
        tab.classList.add('active');
        
        // Mostrar el formulario correspondiente
        if (tab.dataset.tab === 'login') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    });
});

goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    tabs[1].click();
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    tabs[0].click();
});

// Validación de formularios
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validación de Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');
    
    // Reset errores
    email.parentElement.parentElement.classList.remove('error');
    password.parentElement.parentElement.classList.remove('error');
    
    if (!validateEmail(email.value)) {
        email.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (password.value.length < 6) {
        password.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (isValid) {
        // Aquí iría la lógica de inicio de sesión
        alert('Inicio de sesión exitoso. Redirigiendo...');
        // window.location.href = 'dashboard.html';
    }
});

// Validación de Registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const name = document.getElementById('registerName');
    const email = document.getElementById('registerEmail');
    const phone = document.getElementById('registerPhone');
    const password = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('registerConfirmPassword');
    const terms = document.getElementById('terms');
    
    // Reset errores
    name.parentElement.parentElement.classList.remove('error');
    email.parentElement.parentElement.classList.remove('error');
    phone.parentElement.parentElement.classList.remove('error');
    password.parentElement.parentElement.classList.remove('error');
    confirmPassword.parentElement.parentElement.classList.remove('error');
    terms.parentElement.classList.remove('error');
    
    if (name.value.trim() === '') {
        name.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (!validateEmail(email.value)) {
        email.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (phone.value.trim() === '' || phone.value.length < 9) {
        phone.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (password.value.length < 8) {
        password.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (password.value !== confirmPassword.value) {
        confirmPassword.parentElement.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (!terms.checked) {
        terms.parentElement.classList.add('error');
        isValid = false;
    }
    
    if (isValid) {
        // Aquí iría la lógica de registro
        alert('Registro exitoso. Bienvenido a WaveReserve!');
        // window.location.href = 'dashboard.html';
    }
});
</script>

<template>
    <div class="body">
    <div class="auth-container">
        <div class="auth-card">
            <div class="auth-image">
                <h2>Bienvenido a bordo</h2>
                <p>Únete a nuestra comunidad y comienza a reservar lanchas de manera rápida y sencilla.</p>
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><path fill='%23ffffff' d='M100,20 C137.614,20 168,50.386 168,88 C168,125.614 137.614,156 100,156 C62.386,156 32,125.614 32,88 C32,50.386 62.386,20 100,20 Z M100,24 C64.654,24 36,52.654 36,88 C36,123.346 64.654,152 100,152 C135.346,152 164,123.346 164,88 C164,52.654 135.346,24 100,24 Z M80,48 L80,128 L120,128 L120,48 L80,48 Z M84,52 L116,52 L116,124 L84,124 L84,52 Z M64,68 L64,108 L72,108 L72,68 L64,68 Z M128,68 L128,108 L136,108 L136,68 L128,68 Z M76,56 L76,60 L124,60 L124,56 L76,56 Z M76,64 L76,68 L124,68 L124,64 L76,64 Z M76,72 L76,76 L124,76 L124,72 L76,72 Z'/></svg>" alt="Boat" style="width: 200px; margin-top: 30px; opacity: 0.8;">
            </div>
            <div class="auth-content">
                <div class="auth-header">
                    <h1>WaveReserve</h1>
                    <p>Inicia sesión o regístrate para continuar</p>
                </div>
                
                <div class="tabs">
                    <div class="tab active" data-tab="login">Iniciar Sesión</div>
                    <div class="tab" data-tab="register">Registrarse</div>
                </div>
                
                <!-- Login Form -->
                <form class="auth-form" id="loginForm" style="display: block;">
                    <div class="form-group">
                        <label for="loginEmail">Correo Electrónico</label>
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="loginEmail" class="form-control" placeholder="tu@email.com">
                        </div>
                        <div class="error-message" id="loginEmailError">Por favor ingresa un correo válido</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="loginPassword">Contraseña</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="loginPassword" class="form-control" placeholder="••••••••">
                        </div>
                        <div class="error-message" id="loginPasswordError">La contraseña debe tener al menos 6 caracteres</div>
                    </div>
                    
                    <div class="form-footer">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    
                    <button type="submit" class="btn">Iniciar Sesión</button>
                    
                    <div class="separator">o continúa con</div>
                    
                    <div class="social-login">
                        <div class="social-btn google">
                            <i class="fab fa-google"></i>
                        </div>
                        <div class="social-btn facebook">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div class="social-btn twitter">
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    
                    <div class="form-footer">
                        ¿No tienes cuenta? <a href="#" id="goToRegister">Regístrate</a>
                    </div>
                </form>
                
                <!-- Register Form -->
                <form class="auth-form" id="registerForm" style="display: none;">
                    <div class="form-group">
                        <label for="registerName">Nombre Completo</label>
                        <div class="input-with-icon">
                            <i class="fas fa-user"></i>
                            <input type="text" id="registerName" class="form-control" placeholder="Tu nombre completo">
                        </div>
                        <div class="error-message" id="registerNameError">Por favor ingresa tu nombre</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerEmail">Correo Electrónico</label>
                        <div class="input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="registerEmail" class="form-control" placeholder="tu@email.com">
                        </div>
                        <div class="error-message" id="registerEmailError">Por favor ingresa un correo válido</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerPhone">Teléfono</label>
                        <div class="input-with-icon">
                            <i class="fas fa-phone"></i>
                            <input type="tel" id="registerPhone" class="form-control" placeholder="+34 123 456 789">
                        </div>
                        <div class="error-message" id="registerPhoneError">Por favor ingresa un teléfono válido</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerPassword">Contraseña</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="registerPassword" class="form-control" placeholder="••••••••">
                        </div>
                        <div class="error-message" id="registerPasswordError">La contraseña debe tener al menos 8 caracteres</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerConfirmPassword">Confirmar Contraseña</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="registerConfirmPassword" class="form-control" placeholder="••••••••">
                        </div>
                        <div class="error-message" id="registerConfirmPasswordError">Las contraseñas no coinciden</div>
                    </div>
                    
                    <div class="form-group">
                        <input type="checkbox" id="terms" style="margin-right: 10px;">
                        <label for="terms" style="display: inline; font-weight: normal;">Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a></label>
                        <div class="error-message" id="termsError">Debes aceptar los términos y condiciones</div>
                    </div>
                    
                    <button type="submit" class="btn">Crear Cuenta</button>
                    
                    <div class="form-footer">
                        ¿Ya tienes cuenta? <a href="#" id="goToLogin">Inicia Sesión</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

</template>

<style scoped>

.body {
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.auth-container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 900px;
    min-height: 600px;
    display: flex;
    overflow: hidden;
}

.auth-image {
    flex: 1;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    color: white;
    text-align: center;
}

.auth-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 100% 100%;
}

.auth-image h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}

.auth-image p {
    font-size: 1.1rem;
    max-width: 350px;
    position: relative;
    z-index: 1;
}

.auth-image::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"/></svg>');
    background-size: cover;
    background-repeat: no-repeat;
}

.auth-content {
    flex: 1;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
}

.auth-header {
    margin-bottom: 40px;
    text-align: center;
}

.auth-header h1 {
    font-size: 2.2rem;
    color: var(--dark);
    margin-bottom: 10px;
}

.auth-header p {
    color: #666;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
}

.tab {
    padding: 15px 40px;
    cursor: pointer;
    font-weight: 600;
    color: #777;
    transition: all 0.3s;
    position: relative;
}

.tab.active {
    color: var(--primary);
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary);
}

.auth-form {
    flex: 1;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--dark);
}

.input-with-icon {
    position: relative;
}

.input-with-icon i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
}

.form-control {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s;
}

.form-control:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
    outline: none;
}

.btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: 0 4px 15px rgba(26, 115, 232, 0.3);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(26, 115, 232, 0.4);
}

.form-footer {
    text-align: center;
    margin-top: 25px;
    color: #666;
}

.form-footer a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
}

.form-footer a:hover {
    text-decoration: underline;
}

.error-message {
    color: #ff4d4d;
    font-size: 0.9rem;
    margin-top: 5px;
    display: none;
}

.form-group.error .error-message {
    display: block;
}

.form-group.error .form-control {
    border-color: #ff4d4d;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 25px 0;
    color: #777;
}

.separator::before,
.separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
}

.separator:not(:empty)::before {
    margin-right: .75em;
}

.separator:not(:empty)::after {
    margin-left: .75em;
}

.social-login {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: all 0.3s;
}

.social-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.social-btn.google {
    color: #db4437;
}

.social-btn.facebook {
    color: #4267B2;
}

.social-btn.twitter {
    color: #1DA1F2;
}
</style>