import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import RegistroUsuario from '../views/RegistroUsuario.vue';
import ListaLanchas from '../views/ListaLanchas.vue';
import Reserva from '../views/Reserva.vue';
import ListaPasajeros from '../views/ListaPasajeros.vue';
import PasarelaPago from '../views/PasarelaPago.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/registro', component: RegistroUsuario },
  { path: '/lanchas', component: ListaLanchas },
  { path: '/reserva', component: Reserva },
  { path: '/pasajeros', component: ListaPasajeros },
  { path: '/pago', component: PasarelaPago },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
