// Author: Sean Pesce
import { Project } from './classes/project';
import { ProjectType } from './enums/project-type';

export const PROJECTS: Project[] = [
  {
    title: 'Dark Souls Config Utility',
    role: 'Creator',
    type: ProjectType.PERSONAL,
    categories: [ 'Utility', 'Video game' ],
    description: 'All-in-one settings utility for consolidating the installation and configuration processes'
                 + ' of various community mods & fixes for Dark Souls™: Prepare to Die Edition.',
    repository: 'https://github.com/SeanPesce/Dark_Souls_Config_Utility',
    website: '',
    download: 'https://github.com/SeanPesce/Dark_Souls_Config_Utility/releases',
    start: 2014,
    end: 2018,
    status: 'Unsupported',
    collaborators: [],
    acknowledgements: [
      {
        name: 'Peter Thoman',
        username: 'Durante',
        website: 'http://blog.metaclassofnil.com/',
        portfolio: 'https://github.com/PeterTh'
      },
      {
        name: 'Alessandro De Micheli',
        username: 'eur0pa',
        website: 'https://alessandro.pw/',
        portfolio: 'https://github.com/eur0pa'
      },
      {
        name: 'Lane Hatland',
        username: 'Wulf2k',
        website: 'http://wulf2k.ca/',
        portfolio: 'https://github.com/Wulf2k'
      },
      {
        name: '',
        username: 'Methanhydrat',
        website: 'https://methanhydrat.wordpress.com/',
        portfolio: ''
      }
    ],
  license: 'GNU General Public License v3.0',
  languages: [ 'Java', 'CSS' ],
  utilities: [ 'JavaFX', 'Inno Setup' ],
  images: [ { src: 'https://camo.githubusercontent.com/1559890d02bf25c602bf69ecef43cb8620d'
                + 'ee606/687474703a2f2f692e696d6775722e636f6d2f62715a414234732e706e67',
            title: 'Graphics settings tab', alt: 'Screenshot', ariaLabel: ''
            },
            {
              src: 'https://camo.githubusercontent.com/cf64b557ac8e21cbed6f277bb408c147e6d'
                + 'edb4f/68747470733a2f2f692e696d6775722e636f6d2f483261733836312e706e67',
              title: 'Texture mods tab', alt: 'Screenshot', ariaLabel: ''
            }
          ],
  videos: [ {
            title: 'v0.94 Demo',
            description: '',
            url: 'https://www.youtube.com/watch?v=OiVRokZtZAo'
          } ]
  },
  {
    title: 'FPSFix+',
    role: 'Creator',
    type: ProjectType.PERSONAL,
    categories: [ 'Bug fix', 'Video game' ],
    description: '',
    repository: 'https://github.com/SeanPesce/FPSFix-Plus',
    website: 'Automated fix for a common input bug in Dark Souls™: Prepare to Die Edition.',
    download: 'https://www.nexusmods.com/darksouls/mods/1343/',
    start: 2016,
    end: 2017,
    status: 'Released',
    collaborators: [
      {
        name: 'Youri de Mooij',
        username: 'Nullby7e',
        website: '',
        portfolio: 'https://github.com/nullby7e'
      }],
    acknowledgements: [
      {
        name: 'Lin Min',
        username: 'MavenLin',
        website: '',
        portfolio: 'https://github.com/mavenlin'
      }],
    license: 'GNU General Public License v3.0',
    languages: [ 'C', 'C++' ],
    utilities: [ 'STL', 'Windows API' ],
    images: [ {
        src: 'https://camo.githubusercontent.com/3adddce461985553b9b4ebaff'
            + 'd0950f1d9276d99/68747470733a2f2f73746174696364656c697665727'
            + '92e6e657875736d6f64732e636f6d2f6d6f64732f3136322f696d6167657'
            + '32f313334332d302d313530363631343637312e6a7067',
        title: 'Player stuck at the bonfire after restoring humanity (Note that the bonfire menu is missing)',
        alt: 'Screenshot', ariaLabel: '' }],
    videos: []
  },
  {
    title: 'Enhanced FoV Options for DXMD',
    role: 'Creator',
    type: ProjectType.PERSONAL,
    categories: [ 'Video game', 'Feature enhancement' ],
    description: 'Extended customization mod for field of view in Deus Ex: Mankind Divided and Deus Ex: Breach.',
    repository: 'https://github.com/SeanPesce/DXMD-FoV-Changer',
    website: '',
    download: 'https://github.com/SeanPesce/DXMD-FoV-Changer/releases',
    start: 2016,
    end: 0,
    status: 'Supported',
    collaborators: [],
    acknowledgements: [],
    license: 'GNU General Public License v3.0',
    languages: [ 'C', 'C++', 'x86 assembly' ],
    utilities: [ 'STL', 'Windows API' ],
    images: [
      {
        src: 'https://camo.githubusercontent.com/a50725f85ee5f45e42b8634e7690babc6da3bb26/68747470733a2f2f74687'
          + '56d62732e6766796361742e636f6d2f4661766f7261626c6554686f73654561676c652d73697a655f726573747269637465642e676966',
        title: 'Example FoV presets', alt: '', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/2af4983d4844b812740e08f4aa7e189771e6327b/68747470733a2f2f7468756d6273'
          + '2e6766796361742e636f6d2f457175616c44656c6972696f757347797266616c636f6e2d73697a655f726573747269637465642e676966',
        title: 'Separate render FoV for player hands', alt: '', ariaLabel: ''
      }
    ],
    videos: [
      {
        title: 'Example FoV presets',
        description: '',
        url: 'https://www.youtube.com/watch?v=qWjd7HO216A'
      }
    ]
  },
  {
    title: 'DirectX 9 Overlay',
    role: 'Creator',
    type: ProjectType.PERSONAL,
    categories: [ 'Video game', 'New feature' ],
    description: 'Direct3D9 Wrapper DLL/classes with a built-in overlay framework that implements an in-game CLI'
                + ' and a text feed for printing on-screen messages in DirectX9 programs.',
    repository: 'https://github.com/SeanPesce/Direct3D9-Overlay',
    website: '',
    download: 'https://github.com/SeanPesce/Direct3D9-Overlay/releases',
    start: 2016,
    end: 0,
    status: 'Supported',
    collaborators: [],
    acknowledgements: [
      {
        name: 'Michael Koch',
        username: '',
        website: 'https://www.codeguru.com/member.php/Michael+Koch/',
        portfolio: ''
    }],
    license: 'GNU General Public License v3.0',
    languages: [ 'C', 'C++' ],
    utilities: [ 'DirectX SDK', 'MS Detours', 'SeqAn', 'STL', 'Windows API' ],
    images: [
      {
        src: 'https://camo.githubusercontent.com/2ed1de1ee6f40001ae97b697dc31f32cd7a2c157/'
            + '687474703a2f2f692e696d6775722e636f6d2f394448384c57422e6a7067',
        title: 'Dark Souls™: Prepare to Die Edition', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/1528e82759ed9ab8075333fb3f845963b0cda770/'
            + '687474703a2f2f692e696d6775722e636f6d2f44415a474844692e706e67',
        title: 'Dark Souls™: Prepare to Die Edition', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/6255965c85498ee20f9019c4651609175368c361/'
            + '687474703a2f2f692e696d6775722e636f6d2f455656436e30352e6a7067',
        title: 'Deus Ex: Human Revolution', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/f4002b23fda207ef241ea7463ef60105c3a5536b/'
            + '687474703a2f2f692e696d6775722e636f6d2f7a316c346a59422e706e67',
        title: 'Deus Ex: Human Revolution', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/7ea926e8ffdfef4fbdec18f203b54815e18a8ceb/'
            + '687474703a2f2f692e696d6775722e636f6d2f5a3839463844522e6a7067',
        title: 'The Elder Scrolls IV: Oblivion', alt: 'Screenshot', ariaLabel: ''
      }
    ],
    videos: [
      {
        title: 'Early build',
        description: 'Note: This was a very early build; the vast majority of features were implemented after this recording.',
        url: 'https://www.youtube.com/watch?v=F2FiOhFi0pw'
      }
    ]
  },
  {
    title: 'RestYourEyes',
    role: 'Creator',
    type: ProjectType.PERSONAL,
    categories: [ 'Utility' ],
    description: 'A small program that runs in the background and periodically reminds'
                + ' the user to take a break from their screen to avoid eye strain.',
    repository: 'https://github.com/SeanPesce/Rest-Your-Eyes',
    website: '',
    download: 'https://github.com/SeanPesce/Rest-Your-Eyes/releases',
    start: 2017,
    end: 2017,
    status: 'Unsupported',
    collaborators: [],
    acknowledgements: [],
    license: 'GNU General Public License v3.0',
    languages: [ 'Java', 'CSS' ],
    utilities: [ 'JavaFX', 'Inno Setup' ],
    images: [
      {
        src: 'https://camo.githubusercontent.com/3c7a5ee1ed69731f43a548ad1c4aba23bbf81042/'
            + '68747470733a2f2f692e696d6775722e636f6d2f68344a773678512e706e67',
        title: 'System tray icon and reminder message', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/99a8419fd009fe71258d96f0eab95ad2bcd2c3d3/'
            + '68747470733a2f2f692e696d6775722e636f6d2f3668565a4c65392e706e67',
        title: 'Startup message', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/91630ae766573fdcb5825a481cc2f575ed76b630/'
            + '68747470733a2f2f692e696d6775722e636f6d2f586c78307774732e706e67',
        title: 'System tray menu', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/63a3233bfa974fd8b1638d1a867318ee4fc1d3d6/'
            + '68747470733a2f2f692e696d6775722e636f6d2f705a72467567762e706e67',
        title: 'Main window (dark theme)', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/014ec90bced0f414e635a9e5a876a499f67a3cad/'
            + '68747470733a2f2f692e696d6775722e636f6d2f414356637377762e706e67',
        title: 'Main window (light theme)', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://camo.githubusercontent.com/2e5cfa80e390842cbf482e0adb6c4fa2f52122a8/'
            + '68747470733a2f2f692e696d6775722e636f6d2f78304c316855512e706e67',
        title: '"Aggressive" reminder window', alt: 'Screenshot', ariaLabel: ''
      },
    ],
    videos: []
  }
];

/*

  {
    title: '',
    role: '',
    type: ProjectType.PERSONAL,
    categories: [],
    description: '',
    repository: '',
    website: '',
    download: '',
    start: 2017,
    end: 0,
    status: '',
    collaborators: [],
    acknowledgements: [],
    license: '',
    languages: [],
    utilities: [],
    images: [],
    videos: []
  },

*/
