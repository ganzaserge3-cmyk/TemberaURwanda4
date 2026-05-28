import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Destination from '../views/Destination.vue';
import Photos from '../views/Photos.vue';
import Videos from '../views/Videos.vue';

const routes =[
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },

    {
        path: "/about",
        name: "About",
        component: About,
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },

    {
        path: "/services",
        name: "Services",
        component: Services ,
    },
    {
        path: "/gallery/photos",
        name: "Photos",
        component: Photos,
    },
    {
        path: "/gallery/videos",
        name: "Videos",
        component: Videos,
    },
    {
        path: "/destinations/:slug",
        name: "Destination",
        component: Destination,
    },
    {
        path: "/About",
        redirect: "/about",
    },
    {
        path: "/Contact",
        redirect: "/contact",
    },
    {
        path: "/Services",
        redirect: "/services",
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        scrollBehavior() {
            return { top: 0 };
        },
    }
); 
 export default router;
