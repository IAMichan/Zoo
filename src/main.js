import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AddAnimal from './views/AddAnimal.vue';
import HomeAnimals from './views/HomeAnimals.vue';
import EditAnimal from './views/EditAnimal.vue';
import 'flowbite/dist/flowbite.css';
import './style.css';

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: HomeAnimals
    },
    {
        path: '/AddAnimal',
        name: 'AddAnimal',
        component: AddAnimal
    },
    {
        path: '/edit/:id',
        name: 'EditAnimal',
        component: EditAnimal
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');