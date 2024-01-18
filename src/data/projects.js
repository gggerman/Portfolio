import pokeApp from '../img/portImages/PokeApp.png';
import amadeuS from '../img/portImages/AmadeuS.png';
import weatherApp from '../img/portImages/WeatherApp.png';
import travelMap from '../img/portImages/TravelMap.png';
import tasksTypescript from '../img/portImages/Tasks-Typescript.png';
import portfolio from '../img/portImages/Portfolio.png';
import pokemonDashboard from '../img/portImages/PokemonDashboard.png';
import Coin from '../img/portImages/Coin.png';
import MagicStories from '../img/portImages/MagicStories.png';

const projects = [
    {
        id: 1,
        category: 'Full Stack',
        image: Coin,
        link1: '',
        link2: 'https://cobroinmediato.tech/',
        title: 'Coin (Cobro Inmediato)',
        text: 'PERN Stack',
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 2,
        category: 'Full Stack',
        image: MagicStories,
        link1: '',
        link2: 'https://magicstories.newbitcrew.com/',
        title: 'Magic Stories',
        text: 'PERN Stack',
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 3,
        category: 'Full Stack',
        image: amadeuS,
        link1: 'https://github.com/gggerman/Final-Proyect-Front',
        link2: 'https://amadeus.vercel.app/',
        title: 'AmadeuS E-Commerce',
        text: 'MERN Stack',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 4,
        category: 'Full Stack',
        image: pokeApp,
        link1: 'https://github.com/gggerman/PokeApp',
        link2: 'https://www.youtube.com/watch?v=hwYAy1Y1BGg',
        title: 'PokeApp',
        text: 'PERN Stack',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 5,
        category: 'React',
        image: portfolio,
        link1: 'https://github.com/gggerman/Portfolio',
        link2: 'https://german-garcia-portfolio.vercel.app/',
        title: 'Portfolio',
        text: 'This portfolio! Made with React and Material UI',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 6,
        category: 'React',
        image: pokemonDashboard,
        link1: 'https://github.com/gggerman/PokemonDashboard',
        link2: 'https://pokemon-dashboard-eight.vercel.app/',
        title: 'Pokémon Dashboard',
        text: 'Pokémon Dashboard made with React',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 7,
        category: 'Full Stack',
        image: travelMap,
        link1: 'https://github.com/gggerman/Travel-Map',
        link2: 'https://travel-map-seven.vercel.app/',
        title: 'Travel Map',
        text: 'MERN Stack',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 8,
        category: 'Typescript',
        image: tasksTypescript,
        link1: 'https://github.com/gggerman/Tasks-Typescript',
        link2: 'https://tasks-typescript.vercel.app/',
        title: 'Tasks Typescript App',
        text: 'Task Application using React and Typescript',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 9,
        category: 'React',
        image: weatherApp,
        link1: 'https://github.com/gggerman/Weather-App',
        link2: 'https://weather-app-seven-xi.vercel.app/',
        title: 'Weather App',
        text: 'SPA using React and consuming the Open Weather Api',
        hasGithub: true,
        hasDeploy: true
    }
]

export default projects;
