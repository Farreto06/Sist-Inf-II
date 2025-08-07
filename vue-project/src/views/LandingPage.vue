<script setup>

</script>

<template>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Reserva tu <span>lancha</span> perfecta en minutos</h1>
            <p>Descubre la forma más fácil de reservar lanchas para tus aventuras acuáticas. Conectamos propietarios con entusiastas del mar en todo el mundo.</p>
            <button class="cta-btn">Explorar lanchas disponibles</button>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="container">
            <h2 class="section-title">Nuestros <span>Beneficios</span></h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Búsqueda Fácil</h3>
                    <p>Encuentra la lancha perfecta con nuestro sistema de búsqueda avanzado y filtros personalizados.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <h3>Reserva Instantánea</h3>
                    <p>Reserva tu lancha en minutos con nuestro proceso de reserva rápido y seguro.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Seguridad Garantizada</h3>
                    <p>Todas las reservas incluyen protección y seguro para tu tranquilidad.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
        <div class="container">
            <h2 class="section-title">¿Cómo <span>Funciona?</span></h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>Explora</h3>
                    <p>Busca entre cientos de lanchas disponibles en tu área o destino deseado.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>Selecciona</h3>
                    <p>Elige la lancha que mejor se adapte a tus necesidades y presupuesto.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>Reserva</h3>
                    <p>Completa tu reserva en minutos con nuestro sistema seguro de pago.</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h3>Disfruta</h3>
                    <p>¡Prepárate para vivir una experiencia inolvidable en el mar!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>¿Listo para tu aventura en el mar?</h2>
            <p>Regístrate ahora y obtén un 20% de descuento en tu primera reserva</p>
            <button class="cta-btn">Comenzar Ahora</button>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>WaveReserve</h3>
                    <p>La plataforma líder en reserva de lanchas que conecta a propietarios con amantes del mar en todo el mundo.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Lanchas</a></li>
                        <li><a href="#">Destinos</a></li>
                        <li><a href="#">Precios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Destinos Populares</h3>
                    <ul>
                        <li><a href="#">Marbella</a></li>
                        <li><a href="#">Ibiza</a></li>
                        <li><a href="#">Cancún</a></li>
                        <li><a href="#">Miami</a></li>
                        <li><a href="#">Santos</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contacto</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Puerto Deportivo, Málaga</li>
                        <li><i class="fas fa-phone"></i> +34 123 456 789</li>
                        <li><i class="fas fa-envelope"></i> info@wavereserve.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 WaveReserve. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

</template>

<style scoped>

        /* Hero Section */
        .hero {
            padding: 180px 0 100px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: "";
            position: absolute;
            bottom: -150px;
            left: 0;
            width: 100%;
            height: 150px;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%230d47a1"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%231a73e8"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%2300bcd4"/></svg>');
            background-size: cover;
            background-repeat: no-repeat;
            z-index: -1;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: var(--dark);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero h1 span {
            color: var(--primary);
        }

        .hero p {
            font-size: 1.3rem;
            max-width: 700px;
            margin: 0 auto 40px;
            color: var(--dark);
        }

        /* Features Section */
        .features {
            padding: 100px 0;
            background-color: white;
        }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
            font-size: 2.5rem;
            color: var(--dark);
        }

        .section-title span {
            color: var(--primary);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }

        /* How It Works */
        .how-it-works {
            padding: 100px 0;
            background-color: var(--light);
        }

        .steps {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .step {
            flex: 1;
            min-width: 250px;
            text-align: center;
            position: relative;
        }

        .step-number {
            width: 50px;
            height: 50px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 auto 20px;
        }

        .step h3 {
            margin-bottom: 15px;
            color: var(--dark);
        }

        /* CTA Section */
        .cta {
            padding: 100px 0;
            text-align: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }

        .cta::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            opacity: 0.1;
        }

        .cta h2 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            position: relative;
        }

        .cta p {
            font-size: 1.3rem;
            max-width: 700px;
            margin: 0 auto 40px;
            position: relative;
        }

        .cta-btn {
            background: white;
            color: var(--primary);
            border: none;
            padding: 15px 40px;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 50px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background-color: var(--accent);
        }

        .footer-column ul {
            list-style: none;
        }

        .footer-column ul li {
            margin-bottom: 10px;
        }

        .footer-column ul li a {
            color: #aaa;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-column ul li a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            transition: background-color 0.3s;
        }

        .social-links a:hover {
            background-color: var(--primary);
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.9rem;
            color: #aaa;
        }


</style>