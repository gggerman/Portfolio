import pokeApp from '../img/portImages/PokeApp.png';
import amadeuS from '../img/portImages/AmadeuS.png';
import weatherApp from '../img/portImages/WeatherApp.png';
import travelMap from '../img/portImages/TravelMap.png';
import tasksTypescript from '../img/portImages/Tasks-Typescript.png';
import portfolio from '../img/portImages/Portfolio.png';
import pokemonDashboard from '../img/portImages/PokemonDashboard.png';
import Coin from '../img/portImages/Coin.png';
import MagicStories from '../img/portImages/MagicStories.png';
import Propital from '../img/portImages/Propital.png';
import Movikraft from '../img/portImages/Movikraft.png';
import Chefbro from '../img/portImages/Chefbro.png';
import BeOneUp from '../img/portImages/BeOneUp.png';

const projects = [
    {
        id: 1,
        category: 'Full Stack',
        image: Propital,
        link1: '',
        link2: 'https://backoffice.propital.com/',
        title: 'Propital | Inversiones Inmobiliarias',
        text: 'The BackOffice at Propital manages properties, investments and clients, optimizing processes and decision-making. Developed with JavaScript, React, Redux, Python and AWS Lambda.',
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 2,
        category: 'Full Stack',
        image: Movikraft,
        link1: '',
        link2: 'https://movikraft.io/',
        title: 'Movikraft',
        text: 'Movikraft is a subscription-based platform that specializes in creating personalized motion graphics. Developed with PHP, Laravel, SQL and Docker.',
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 3,
        category: 'Full Stack',
        image: Coin,
        link1: '',
        link2: 'https://cobroinmediato.tech/',
        title: 'Coin (Cobro Inmediato)',
        text: 'The BackOffice at COIN (Cobro Inmediato) handles payment workflows, transaction tracking, and client information. Developed with TypeScript, React, Redux, Node.js, SQL, Docker and Microservices.',
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 4,
        category: 'Full Stack',
        image: MagicStories,
        link1: '',
        link2: 'https://newbitcrew.com/',
        title: 'Magic Stories',
        text: "Magic Stories is an app that uses AI to create personalized children's stories. Developed with TypeScript, PHP, React, Redux, SQL and Docker.",
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 4,
        category: 'Full Stack',
        image: Chefbro,
        link1: '',
        link2: 'https://newbitcrew.com/',
        title: 'Chefbro',
        text: "Chefbro is an app that uses AI to generate recipes based on your available ingredients, dietary preferences, and the number of servings needed. Developed with Typescript, PHP, React, Redux, SQL and Docker.",
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 4,
        category: 'Full Stack',
        image: BeOneUp,
        link1: '',
        link2: 'http://beoneup.com.ar/',
        title: 'BeOneUp',
        text: "BeOneUp is a platform offering English classes and leadership workshops, delivered by a team of teachers, translators, and coaches. Developed with TypeScript, React, Redux, Node, SQL and Docker.",
        hasGithub: false,
        hasDeploy: true
    },
    {
        id: 5,
        category: 'Full Stack',
        image: amadeuS,
        link1: 'https://github.com/gggerman/Final-Proyect-Front',
        link2: 'https://amadeus.vercel.app/',
        title: 'AmadeuS E-Commerce',
        text: 'Amadeus is an e-commerce platform for buying and selling musical instruments. Developed with TypeScript, React, Redux, Node.js, and NoSQL.',
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
        text: 'Pokémon Dashboard is a SPA that displays Pokémon from the first five generations along with their types and stats. Developed with JavaScript, React, and Redux.',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 7,
        category: 'React',
        image: portfolio,
        link1: 'https://github.com/gggerman/Portfolio',
        link2: 'https://german-garcia-portfolio.vercel.app/',
        title: 'Portfolio',
        text: 'This portfolio! Developed with React, Styled Components and Material UI',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 8,
        category: 'Full Stack',
        image: travelMap,
        link1: 'https://github.com/gggerman/Travel-Map',
        link2: 'https://travel-map-seven.vercel.app/',
        title: 'Travel Map',
        text: 'Travel Map is an application for reviewing any location worldwide. Developed with JavaScript, React, React Map GL, Material UI, and MongoDB.',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 9,
        category: 'Typescript',
        image: tasksTypescript,
        link1: 'https://github.com/gggerman/Tasks-Typescript',
        link2: 'https://tasks-typescript.vercel.app/',
        title: 'Tasks Typescript App',
        text: 'Task Application. Developed with React and Typescript',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 10,
        category: 'Full Stack',
        image: pokeApp,
        link1: 'https://github.com/gggerman/PokeApp',
        link2: 'https://www.youtube.com/watch?v=hwYAy1Y1BGg',
        title: 'PokeApp',
        text: 'Development of a SPA using React for the Front End and Redux as stage management. The components were developed with CSS without the use of external libraries. It consumes data an API through a Back End developed in NodeJs using Express, adding new functionalities to the original API.',
        hasGithub: true,
        hasDeploy: true
    },
    {
        id: 11,
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
