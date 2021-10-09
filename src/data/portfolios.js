import pokeApp from '../img/portImages/PokeApp.jfif';
import amadeuS from '../img/portImages/AmadeuS.png';
import weatherApp from '../img/portImages/WeatherApp.png';

const portfolios = [
    {
        id: 1,
        category: 'Full Stack',
        image: amadeuS,
        link1: 'https://github.com/gggerman/Final-Proyect-Front',
        link2: 'https://amadeus.vercel.app/',
        title: 'AmadeuS',
        text: 'E-Commerce'
    },
    {
        id: 2,
        category: 'Full Stack',
        image: pokeApp,
        link1: 'https://github.com/gggerman/PokeApp',
        link2: 'https://www.google.com',
        title: 'PokeApp',
        text: 'Pokedex using the PokeApi'
    },
    {
        id: 3,
        category: 'React',
        image: weatherApp,
        link1: 'https://github.com/gggerman/Weather-App',
        link2: 'https://weather-app-seven-xi.vercel.app/',
        title: 'Weather App',
        text: 'Weather App using the Open Weather Api'
    }
]

export default portfolios;
