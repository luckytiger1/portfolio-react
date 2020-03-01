import fancyWeatherImg from '../img/fancy-weather.png';
import headphoneSpaImg from '../img/headphone-spa.png';
import imageApiImg from '../img/image-api.jpg';
import piskelCloneImg from '../img/piskel-clone.png';
import repairDesignImg from '../img/repair-design-project.png';
import virtualKeyboardImg from '../img/virtual-keyboard.png';
import todoAppImg from '../img/todo-app.png';
import songBirdsApp from '../img/songbirds-app.png';
import bookStoreApp from '../img/bookstore-app.png'

const projectTitles = [
  'Fancy Weather',
  'Virtual Keyboard',
  'Piskel Clone',
  'Image Api',
  'ToDo App',
  'Repair Design Project',
  'Headphone SPA',
  'Songbirds App',
  'Bookstore App'
];

export const projectImgs = [
  fancyWeatherImg,
  virtualKeyboardImg,
  piskelCloneImg,
  imageApiImg,
  todoAppImg,
  repairDesignImg,
  headphoneSpaImg,
  songBirdsApp,
  bookStoreApp
];

export const descriptions = [
  {
    props: [
      'JS',
      'API: Google Maps, darksky.net, ipinfo.io, opencagedata.com, unsplash.com',
      'Jest, jsdom testing',
      'adaptive up to 320px',
    ],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/fancy-weather.md',
      'https://fancy-weather-spa.netlify.com',
      'https://github.com/luckytiger1/weather-test-app',
    ],
  },

  {
    props: ['JS'],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codejam-virtual-keyboard.md',
      'https://virtual-keyboard-luckytiger1.netlify.com/',
      'https://github.com/luckytiger1/codejam-virtual-keyboard/tree/codejam-virtual-keyboard',
    ],
  },
  {
    props: ['JS', 'Jest, jsdom testing', 'simplified piskelapp.com'],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/piskel-clone.md',
      'https://piskel-clone-task.netlify.com',
      'https://github.com/luckytiger1/piskel-final-draft',
    ],
  },
  {
    props: ['JS'],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/codejam-image-api/codejam-image-api_ru.md',
      'https://image-api-task.netlify.com',
      'https://github.com/luckytiger1/image-api-task',
    ],
  },
  {
    props: ['React', 'JS'],
    links: [
      'https://github.com/luckytiger1/react-todo-app-tutorial',
      'https://todo-app-tutorial.netlify.com',
      'https://github.com/luckytiger1/react-todo-app-tutorial',
    ],
  },
  {
    props: ['JS', 'CSS3', 'HTML'],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-3/repair-design-project/repair-design-project-en.md',
      'https://repair-design-project-spa.netlify.com/',
      'https://github.com/luckytiger1/repair-design-project',
    ],
  },
  {
    props: ['CSS3', 'HTML'],
    links: [
      'https://github.com/luckytiger1/headphone-site',
      'https://headphone-spa.netlify.com',
      'https://github.com/luckytiger1/headphone-site',
    ],
  },
  {
    props: ['React JS', 'HTML', 'SCSS'],
    links: [
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird.md',
      'https://songbirds-rss.netlify.com',
      'https://github.com/luckytiger1/songbird-rss-react2020/tree/songbird-rss',
    ],
  },
  {
    props: ['React JS', 'HTML', 'SCSS'],
    links: [
      'https://github.com/luckytiger1/react-bookstore/pull/1',
      'https://luckytiger-bookstore.netlify.com/',
      'https://github.com/luckytiger1/react-bookstore/tree/bookStore',
    ],
  },
];

export default projectTitles;
