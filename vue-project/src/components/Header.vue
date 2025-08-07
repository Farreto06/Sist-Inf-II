<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">
                    <i class="fas fa-ship"></i>
                    WaveReserve
                </a>
                <ul class="nav-links">
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><a href="#">Lanchas</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Precios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <RouterLink to="/login"><button class="login-btn">
                    <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                </button></RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--secondary);
    text-decoration: none;
}

.logo i {
    margin-right: 10px;
    color: var(--accent);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-links a:hover {
    color: var(--primary);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s;
}

.nav-links a:hover::after {
    width: 100%;
}

.login-btn {
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(26, 115, 232, 0.3);
}

.login-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(26, 115, 232, 0.4);
}
</style>