import pokeApp from '../img/portImages/PokeApp.png';
import amadeuS from '../img/portImages/AmadeuS.png';
import weatherApp from '../img/portImages/WeatherApp.png';
import travelMap from '../img/portImages/TravelMap.png';
import tasksTypescript from '../img/portImages/Tasks-Typescript.png';
import portfolio from '../img/portImages/Portfolio.png';

const projects = [
    {
        id: 1,
        category: 'Full Stack',
        image: amadeuS,
        link1: 'https://github.com/gggerman/Final-Proyect-Front',
        link2: 'https://amadeus.vercel.app/',
        title: 'AmadeuS E-Commerce',
        text: 'MERN Stack'
    },
    {
        id: 2,
        category: 'Full Stack',
        image: pokeApp,
        link1: 'https://github.com/gggerman/PokeApp',
        link2: 'https://www.youtube.com/watch?v=hwYAy1Y1BGg',
        title: 'PokeApp',
        text: 'PERN Stack'
    },
    {
        id: 3,
        category: 'React',
        image: portfolio,
        link1: 'https://github.com/gggerman/Portfolio',
        link2: 'https://german-garcia-portfolio.vercel.app/',
        title: 'Portfolio',
        text: 'This portfolio!'
    },
    {
        id: 4,
        category: 'React',
        image: weatherApp,
        link1: 'https://github.com/gggerman/Weather-App',
        link2: 'https://weather-app-seven-xi.vercel.app/',
        title: 'Weather App',
        text: 'A SPA using the Open Weather Api'
    },
    {
        id: 5,
        category: 'Full Stack',
        image: travelMap,
        link1: 'https://github.com/gggerman/Travel-Map',
        link2: 'https://travel-map-seven.vercel.app/',
        title: 'Travel Map',
        text: 'MERN Stack'
    },
    {
        id: 6,
        category: 'Typescript',
        image: tasksTypescript,
        link1: 'https://github.com/gggerman/Tasks-Typescript',
        link2: 'https://tasks-typescript.vercel.app/',
        title: 'Tasks Typescript App',
        text: 'Task Application using React and Typescript'
    }
]

export default projects;
