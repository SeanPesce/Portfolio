// Author: Sean Pesce
import { environment } from './../environments/environment';
import { Project } from './classes/project';
import { ProjectFormat } from './enums/project-format';
import { ProjectPlatform } from './enums/project-platform';
import { ProjectPurpose } from './enums/project-purpose';

const ASSETS = environment.production ? 'assets/' : '../assets/';

// URLs
const AUDIUM_URL = 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/';
const AAPA_2018_URL = 'http://meeting.physanth.org/program/2018/session74';

// Hyperlinks
const DSPTDE_A = '<a href=\"https://store.steampowered.com/app/211420\" title=\"Steam store page for Dark Souls™:'
                 + ' Prepare to Die Edition\" target=\"_blank\"><i>Dark Souls™: Prepare to Die Edition</i></a>';
const DSR_A    = '<a href=\"https://store.steampowered.com/app/570940\" title=\"Steam store page for Dark Souls™:'
                 + ' Remastered\" target=\"_blank\"><i>Dark Souls™: Remastered</i></a>';

// Licenses
const GPL3      = 'GNU General Public License v3.0';
const APACHE_L2 = 'Apache License 2.0';


export const PROJECTS: Project[] = [
  {
    title: 'Audium Music',
    role: 'Database designer, front end developer, back end developer, data acquisitions',
    purpose: ProjectPurpose.SCHOOL,
    platforms: [ ProjectPlatform.WEB ],
    formats: [ ProjectFormat.WEBSITE ],
    categories: [ 'Music', 'School', 'Website' ],
    description: 'My undergraduate capstone project at <a href=\"https://www.stonybrook.edu\" title=\"SBU homepage\"'
                  + ' target=\"_blank\">Stony Brook University</a>;'
                  + ' worked with a team to create a web-based music streaming service (hosted on Amazon Web Services). My'
                  + ' main responsibilities revolved around the database: design, deployment, data acquisition (via web scraping'
                  + ' with custom Python scripts), population (using scraped data and randomly-generated data from custom MySQL'
                  + ' procedures), and testing. I also assisted heavily in front-end and back-end development. To log into the <a href=\"'
                  + AUDIUM_URL + '\" title=\"Audium demo site\" target=\"_blank\">demo website</a>, use the username <b><tt>seanpesce</tt>'
                  + '</b> and password <b><tt>genericpassword</tt></b> (Note: Demo website is hosted using the free AWS package, so loading'
                  + ' might take longer than expected).',
    repository: 'https://github.com/ssparvez/AudiumFrontEnd',
    isPrivate: false,
    website: AUDIUM_URL,
    download: '',
    start: 2017,
    end: 2017,
    status: 'Released',
    collaborators: [
      {
        name: 'Renato Briceno',
        username: '',
        website: '',
        portfolio: 'https://github.com/rbriceno512',
        role: 'Back end development lead, front end developer'
      },
      {
        name: 'Syed Parvez',
        username: '',
        website: '',
        portfolio: 'https://github.com/ssparvez',
        role: 'Front end development lead, back end developer'
      },
      {
        name: 'Oscar Trivino',
        username: '',
        website: '',
        portfolio: 'https://github.com/otrivino',
        role: 'Coordinator, back end developer'
      }
    ],
    acknowledgements: [],
    license: GPL3,
    languages: [ 'CSS', 'HTML', 'Java', 'JavaScript', 'MySQL', 'Python', 'TypeScript' ],
    utilities: [ 'Angular 2+', 'AWS', 'Node.js', 'Spring' ],
    software: [ 'IntelliJ IDEA', 'MySQL Workbench', 'VS Code' ],
    images: [
      { src: 'https://raw.githubusercontent.com/SeanPesce/Portfolio/master/src/assets/img/showcase/audium/01.jpg',
        title: 'User dashboard', alt: 'Screenshot', ariaLabel: 'Screenshot of user dashboard page of Audium website'
      },
      { src: 'https://raw.githubusercontent.com/SeanPesce/Portfolio/master/src/assets/img/showcase/audium/02.jpg',
        title: 'Account overview', alt: 'Screenshot', ariaLabel: 'Screenshot of account overview page of Audium website'
      }
    ],
    videos: [
      {
        title: 'Example search results',
        author: 'Sean Pesce',
        description: 'Example results from the search feature of the website',
        url: 'https://www.youtube.com/watch?v=DXqlODCi0dw',
        embedUrl: 'https://www.youtube.com/embed/DXqlODCi0dw',
        preview: ''
      }
    ]
  },
  {
    title: 'Dark Souls Configuration Utility',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS ],
    formats: [ ProjectFormat.DESKTOP_GUI_APP ],
    categories: [ 'Utility', 'Video game' ],
    description: 'All-in-one settings utility for consolidating the installation and configuration'
                 + ' of various community mods & fixes for ' + DSPTDE_A + '.',
    repository: 'https://github.com/SeanPesce/Dark_Souls_Config_Utility',
    isPrivate: false,
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
    license: GPL3,
    languages: [ 'Java', 'CSS' ],
    utilities: [ 'JavaFX', 'Apache Commons IO', 'Inno Setup' ],
    software: [ 'Eclipse', 'Git', 'NetBeans' ],
    images: [
      {
        src: 'https://camo.githubusercontent.com/cf64b557ac8e21cbed6f277bb408c147e6d'
          + 'edb4f/68747470733a2f2f692e696d6775722e636f6d2f483261733836312e706e67',
        title: 'Texture mods tab', alt: 'Screenshot', ariaLabel: ''
      },
      { src: 'https://camo.githubusercontent.com/1559890d02bf25c602bf69ecef43cb8620d'
          + 'ee606/687474703a2f2f692e696d6775722e636f6d2f62715a414234732e706e67',
      title: 'Graphics settings tab', alt: 'Screenshot', ariaLabel: ''
      }
            ],
    videos: [
      {
        title: 'v0.94 Demo',
        author: 'Sean Pesce',
        description: '',
        url: 'https://www.youtube.com/watch?v=OiVRokZtZAo',
        embedUrl: 'https://www.youtube.com/embed/OiVRokZtZAo',
        preview: ''
      }
    ]
  },
  {
    title: 'Dark Souls Overhaul Project',
    role: 'Co-lead Developer',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS ],
    formats: [ ProjectFormat.DYNAMIC_LIBRARY ],
    categories: [ 'Video game', 'Bug fix', 'Feature enhancement', 'New feature', 'Team' ],
    description: 'Originally, this project was an unofficial game patch for ' + DSPTDE_A + ', '
                + 'but current development is now geared towards ' + DSR_A + '. Tasks include '
                + 'reverse-engineering of undocumented file types, data structures, and engine bytecode to '
                + 'develop bug-fixes and enhancements. Some work continues on the <a '
                + 'href=\"https://github.com/metal-crow/Dark-Souls-1-Overhaul/tree/PtDE\" '
                + 'title=\"Git branch for the Dark Souls™: Prepare to Die Edition build of the Overhaul Project\" '
                + 'target=\"_blank\"><i>Prepare to Die Edition</i> '
                + 'branch</a> of the project, which actually boasts a more extensive list of fixes and quality-of-life '
                + 'enhancements than the official Remaster.',
    repository: 'https://github.com/metal-crow/Dark-Souls-1-Overhaul',
    isPrivate: false,
    website: '',
    download: '',
    start: 2016,
    end: 0,
    status: 'In development',
    collaborators: [
      {
        name: 'Giovanni Frank Crisanti',
        username: 'metal-crow',
        website: '',
        portfolio: 'https://github.com/metal-crow',
        role: 'Co-lead Developer'
      }
    ],
    acknowledgements: [],
    license: '',
    languages: [ 'C', 'C++', 'Lua', 'x86 assembly' ],
    utilities: [ 'DirectX SDK', 'Havok SDK', 'MS Detours', 'SeqAn', 'STL', 'Windows API' ],
    software: [ '010 Editor', 'Cheat Engine', 'Git', 'Havok Content Tools', 'IDA', 'Visual Studio', 'Wireshark' ],
    images: [],
    videos: [
      {
        title: 'Game Improvement: Lava brightness settings',
        author: 'Sean Pesce',
        description: '',
        url: 'https://streamable.com/lrf0b',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulDimLava.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712090732/https://streamable.com/s/lrf0b',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulDimLava.jpg'
      },
      {
        title: 'Game Improvement: Unlimited save slots',
        author: 'Sean Pesce',
        description: '',
        url: 'https://www.youtube.com/watch?v=QWTtksCB7Hk',
        embedUrl: 'https://www.youtube.com/embed/QWTtksCB7Hk',
        preview: ''
      },
      {
        title: 'Game Improvement: Save file selection dialog',
        author: 'Sean Pesce',
        description: '',
        url: 'https://streamable.com/6ti45',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulSaveSelectDlg.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712064923/https://streamable.com/s/6ti45',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulSaveSelectDlg.jpg'
      },
      {
        title: 'Game Improvement: Increased multiplayer phantom limit',
        author: 'metal-crow',
        description: '',
        url: 'https://www.youtube.com/watch?v=evYCvJXgrwU',
        embedUrl: 'https://www.youtube.com/embed/evYCvJXgrwU',
        preview: ''
      },
      {
        title: 'Game Improvement: Movement while casting spells',
        author: 'metal-crow',
        description: '',
        url: 'https://streamable.com/gvy2a',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulMoveWhileCasting.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712064429/https://streamable.com/s/gvy2a',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulMoveWhileCasting.jpg'
      },
      {
        title: 'Game Improvement: Weapon durability HUD meters',
        author: 'Sean Pesce',
        description: '',
        url: 'https://streamable.com/7mmq3',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulDurabilityBars.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712064939/https://streamable.com/s/7mmq3',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulDurabilityBars.jpg'
      },
      {
        title: 'Game Improvement: Multiple simultaneous item consumption',
        author: 'Sean Pesce',
        description: '',
        url: 'https://streamable.com/064sk',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulMultiConsume.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712064932/https://streamable.com/s/064sk',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulMultiConsume.jpg'
      },
      {
        title: 'Overhaul Feature: Update detection & Message of the Day',
        author: 'Sean Pesce',
        description: '',
        url: 'https://streamable.com/jd26c',
        embedUrl: ASSETS + 'video/projects/DarkSoulsOverhaulUpdateAndMotD.mp4',
        // embedUrl: 'https://web.archive.org/web/20180712064957/https://streamable.com/s/jd26c',
        preview: ASSETS + 'video/projects/preview/DarkSoulsOverhaulUpdateAndMotD.jpg'
      }
    ]
  },
  {
    title: 'DirectX 9 Overlay',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS ],
    formats: [ ProjectFormat.DYNAMIC_LIBRARY ],
    categories: [ 'Video game', 'New feature' ],
    description: 'Direct3D9 Wrapper DLL/classes with a built-in overlay framework that implements an in-game CLI'
                + ' and a text feed for printing on-screen messages in DirectX 9 programs. Plugins are also supported.',
    repository: 'https://github.com/SeanPesce/Direct3D9-Overlay',
    isPrivate: false,
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
    license: GPL3,
    languages: [ 'C', 'C++' ],
    utilities: [ 'DirectX SDK', 'MS Detours', 'SeqAn', 'STL', 'Windows API' ],
    software: [ 'Git', 'Visual Studio' ],
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
        title: 'Early Build Showcase',
        author: 'Sean Pesce',
        description: 'Note: This was a very early build; the vast majority of features were implemented after this recording.',
        url: 'https://www.youtube.com/watch?v=F2FiOhFi0pw',
        embedUrl: 'https://www.youtube.com/embed/F2FiOhFi0pw',
        preview: ''
      }
    ]
  },
  {
    title: 'Enhanced FoV Options for DXMD',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS ],
    formats: [ ProjectFormat.DYNAMIC_LIBRARY ],
    categories: [ 'Video game', 'Feature enhancement' ],
    description: 'Extended field of view customization mod for <a href=\"https://store.steampowered.com/app/337000\"'
                 + ' title=\"Steam store page for Deus Ex: Mankind Divided\"'
                 + ' target=\"_blank\"><i>Deus Ex: Mankind Divided</i></a> and <a href=\"https://store.steampowered.com/app/555450\"'
                 + ' title=\"Steam store page for Deus Ex: Breach\"'
                 + ' target=\"_blank\"><i>Deus Ex: Breach</i></a>.',
    repository: 'https://github.com/SeanPesce/DXMD-FoV-Changer',
    isPrivate: false,
    website: '',
    download: 'https://github.com/SeanPesce/DXMD-FoV-Changer/releases',
    start: 2016,
    end: 0,
    status: 'Supported',
    collaborators: [],
    acknowledgements: [],
    license: GPL3,
    languages: [ 'C', 'C++', 'x86 assembly' ],
    utilities: [ 'STL', 'Windows API' ],
    software: [ 'Cheat Engine', 'Git', 'Visual Studio' ],
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
        author: 'Sean Pesce',
        description: '',
        url: 'https://www.youtube.com/watch?v=qWjd7HO216A',
        embedUrl: 'https://www.youtube.com/embed/qWjd7HO216A',
        preview: ''
      }
    ]
  },
  {
    title: 'FPSFix+',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS ],
    formats: [ ProjectFormat.DYNAMIC_LIBRARY ],
    categories: [ 'Bug fix', 'Video game' ],
    description: 'Automated fix for a common input bug in ' + DSPTDE_A + '. This fix was eventually '
                 + 'incorporated into the Dark Souls Overhaul Project.',
    repository: 'https://github.com/SeanPesce/FPSFix-Plus',
    isPrivate: false,
    website: '',
    download: 'https://www.nexusmods.com/darksouls/mods/1343/',
    start: 2016,
    end: 2017,
    status: 'Released',
    collaborators: [],
    acknowledgements: [
      {
        name: 'Youri de Mooij',
        username: 'Nullby7e',
        website: '',
        portfolio: 'https://github.com/nullby7e'
      },
      {
        name: 'Lin Min',
        username: 'MavenLin',
        website: '',
        portfolio: 'https://github.com/mavenlin'
      }],
    license: GPL3,
    languages: [ 'C', 'C++' ],
    utilities: [ 'STL', 'Windows API' ],
    software: [ 'Cheat Engine', 'Git', 'Visual Studio' ],
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
    title: 'MolWear',
    role: 'Lead developer',
    purpose: ProjectPurpose.RESEARCH,
    platforms: [ ProjectPlatform.ANDROID ],
    formats: [ ProjectFormat.MOBILE_APP ],
    categories: [ 'Mobile app' ],
    description: 'MolWear is an (in-progress) Android app that aims to simplify the recording and sharing of'
                + ' observational/descriptive data about molar surface wear for anthropological research'
                + ' purposes. The development process involved working closely with PhD student (now doctor) Emma Lagan and research'
                + ' assistant Daniel Ehrlich to determine GUI layout as well as requirements for recording & analyzing data using'
                + ' Dr. Lagan\'s new method for dental wear scoring. The app was a cornerstone of <a href=\"' + ASSETS
                + 'doc/Dentine_Without_Borders_Lagan_et_al.pdf\" title=\"PDF of poster presented at the 2018 AAPA national'
                + ' conference\" target=\"_blank\">Dr. Lagan\'s presentation</a> at the <a href=\"' + AAPA_2018_URL + '\"'
                + ' title=\"2018 AAPA national conference schedule\" target=\"_blank\">87th Annual Meeting of the American Association'
                + ' of Physical Anthropologists (2018)</a>, where the project received an'
                + ' <a href=\"https://www.dentalanthropology.org/news/2018/5/7/student-prize-winners-2018\"'
                + '  title=\"2018 AAPA national conference prize winners\" target=\"_blank\">award for \"Best Poster\"</a>.',
    repository: 'https://github.com/SeanPesce/Molar-Wear',
    isPrivate: false,
    website: AAPA_2018_URL
             + '/lagan-2018-dentine-without-borders-an-improved-dental-macrowear-scoring-method-with-cross-cultural-application.html',
    download: 'https://github.com/SeanPesce/Molar-Wear/releases',
    start: 2018,
    end: 0,
    status: 'In development',
    collaborators: [
      {
        name: 'Daniel E. Ehrlich',
        username: '',
        website: 'https://as.nyu.edu/anthropology/graduate/alumni/masters-alumni-in-human-skeletal-biology-track/daniel-ehrlich.html',
        portfolio: 'https://github.com/ehrlichd',
        role: 'Research assistant, Coordinator'
      },
      {
        name: 'Emma M. Lagan',
        username: '',
        website: 'https://as.nyu.edu/anthropology/graduate/alumni/masters-alumni-in-human-skeletal-biology-track/emma-lagan.html',
        portfolio: '',
        role: 'Research lead'
      }
    ],
    acknowledgements: [],
    license: GPL3,
    languages: [ 'Java', 'XML' ],
    utilities: [ 'Android SDK', 'Apache Commons CSV', 'Gradle' ],
    software: [ 'Android Studio', 'Git' ],
    images: [
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/01.jpg',
        title: 'Projects list view', alt: 'Screenshot', ariaLabel: 'Screenshot of projects list view'
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/02.jpg',
        title: 'After opening a project, user can add new research subjects (or edit existing ones)', alt: 'Screenshot',
        ariaLabel: 'Screenshot of open project'
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/03.jpg',
        title: 'Basic info editor view', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/04.jpg',
        title: 'Molar data editor view', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/05.jpg',
        title: 'Subject notes view', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/06.jpg',
        title: 'Molar notes dialog', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/07.jpg',
        title: 'Project export dialog', alt: 'Screenshot', ariaLabel: ''
      },
      {
        src: 'https://raw.githubusercontent.com/SeanPesce/Molar-Wear/master/docs/images/00.jpg',
        title: 'Startup splash screen', alt: 'Screenshot', ariaLabel: 'Screenshot of startup splash screen'
      },
      {
        src: ASSETS + 'img/showcase/molwear/Dentine_Without_Borders_Lagan_et_al.jpg',
        title: '2018 AAPA national conference poster for Dr. Lagan\'s research method (featuring MolWear)',
        alt: 'Screenshot', ariaLabel: 'Screenshot of startup splash screen'
      }
    ],
    videos: []
  },
  {
    title: 'Portfolio Website',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WEB ],
    formats: [ ProjectFormat.WEBSITE ],
    categories: [ 'Website' ],
    description: 'The website you\'re currently viewing, created for the purpose of providing easy access to my '
                  + '<a href=\"' + ASSETS + 'doc/Resume_SeanPesce.pdf\" title=\"Download resume (PDF)\" target=\"_blank\">resume</a>'
                  + ' and software portfolio for potential employers (or other curious parties).',
    repository: 'https://github.com/SeanPesce/Portfolio',
    isPrivate: false,
    website: 'https://SeanPesce.github.io/Portfolio',
    download: '',
    start: 2018,
    end: 0,
    status: 'Supported',
    collaborators: [],
    acknowledgements: [],
    license: APACHE_L2,
    languages: [ 'CSS', 'HTML', 'JavaScript', 'TypeScript' ],
    utilities: [ 'Angular 2+', 'Node.js' ],
    software: [ 'Git', 'VS Code' ],
    images: [],
    videos: []
  },
  {
    title: 'RestYourEyes',
    role: 'Creator',
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [ ProjectPlatform.WINDOWS, ProjectPlatform.LINUX ],
    formats: [ ProjectFormat.DESKTOP_GUI_APP ],
    categories: [ 'Utility' ],
    description: 'A small program that runs in the background and periodically reminds'
                + ' the user to take a break from their screen to avoid eye strain.<br><b>Note:</b>'
                + ' The <a href=\"' + ASSETS + 'download/RestYourEyes-v1.0-Lite.zip\" title=\"Download RestYourEyes '
                + 'v1.0 Lite portable bundle (for Windows)\" target=\"_blank\">download URL</a> below links to the Lite Windows'
                + ' build of RestYourEyes in a portable package, meaning the program doesn\'t need to be installed, but'
                + ' a <a href=\"http://www.oracle.com/technetwork/java/javase/downloads/index.html\"'
                + ' title=\"JRE download page\" target=\"_blank\">Java Runtime Environment</a> must be installed in order to run'
                + ' the program.',
    // repository: 'https://github.com/SeanPesce/Rest-Your-Eyes', // Made this repository private because my GitHub was getting cluttered
    repository: 'https://web.archive.org/web/20180712045411/https://github.com/SeanPesce/Rest-Your-Eyes',
    isPrivate: true,
    website: '',
    // download: 'https://github.com/SeanPesce/Rest-Your-Eyes/releases',
    // download: 'https://web.archive.org/web/20180712045551/https://github.com/SeanPesce/Rest-Your-Eyes/releases',
    download: ASSETS + 'download/RestYourEyes-v1.0-Lite.zip',
    start: 2017,
    end: 2017,
    status: 'Unsupported',
    collaborators: [],
    acknowledgements: [],
    license: GPL3,
    languages: [ 'Java', 'CSS' ],
    utilities: [ 'JavaFX', 'Inno Setup' ],
    software: [ 'Eclipse', 'Git' ],
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
    purpose: ProjectPurpose.RECREATIONAL,
    platforms: [],
    formats: [],
    categories: [],
    description: '',
    repository: '',
    isPrivate: false,
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
    software: [],
    images: [],
    videos: []
  },

*/
