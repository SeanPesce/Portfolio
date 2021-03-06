
// Author: Sean Pesce
import * as Projects from './project-list';
import { environment } from './../environments/environment';
import { ImageSlide } from './classes/image-slide';
import { LanguageSkill } from './classes/skill-language';
import { Project } from './classes/project';
import { SocialMedia } from './classes/social-media-profile';
import { SoftwareSkill } from './classes/skill-software';
import { UtilitySkill } from './classes/skill-utility';

export const AUTHOR = 'Sean Pesce';
export const PRODUCTION_MODE = environment.production; // True if production mode, false if dev mode

export const ASSETS_DEV  = '../assets/';
export const ASSETS_PROD = 'assets/';
export const ASSETS = PRODUCTION_MODE ? ASSETS_PROD : ASSETS_DEV;

export const MOBILE_WIDTH_CUTOFF = 650; // Pixels

export const EMAIL_OBFS: string[] = [
  'pesce.sean',
  '@',
  'gmai',
  'l.com'
];

export enum PortfolioPage {
  HOME = 0,
  PROJECTS = 1,
  SKILLS = 2,
  EDUCATION = 3,
  WORK = 4,
  CONTACT = 5
}

export const PAGE_TITLES: string [] = [
  'About',
  'Projects',
  'Skills',
  'Education',
  'Work',
  'Contact'
];

export const PAGE_ROUTES: string [] = [
  'about',
  'projects',
  'skills',
  'education',
  'employment',
  'contact'
];

export const PAGE_HOVER_TXT: string [] = [
  'Resume & About Me',
  'Personal Projects',
  'Languages, tools, platforms, etc.',
  'Degrees & Professional Certifications',
  'Employment History',
  'Social Media'
];

export const PROJECTS: Project [] = Projects.PROJECTS;

export const PROFILE_PICS: ImageSlide[] = [
  {
    src: '/img/profile/03.jpg',
    title: 'Coffee date in Pittsburgh (2021)',
    alt: 'Pofile picture',
    ariaLabel: ''
  },
  {
    src: '/img/profile/01.png',
    title: 'My wife (then girlfriend) and I (2017)',
    alt: 'Pofile picture',
    ariaLabel: ''
  },
  {
    src: '/img/profile/02.jpg',
    title: 'Me and my coworkers (2016)',
    alt: 'Pofile picture',
    ariaLabel: ''
  },
  {
    src: '/img/profile/Avatar-dark.png',
    title: 'My online avatar',
    alt: 'Avatar',
    ariaLabel: ''
  }
];

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    title: 'Credly',
    url: 'https://www.credly.com/users/sean-pesce/badges',
    website: 'https://www.credly.com/',
    icon: ASSETS + '/img/social/icon/Credly-white-transparent.png',
    logo: ASSETS + '/img/social/logo/Credly-vectorized.svg',
    username: 'Sean Pesce',
    isPrivate: false
  },
  {
    title: 'Discord',
    url: '',
    website: 'https://discordapp.com/',
    icon: ASSETS + '/img/social/icon/Discord-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Discord-color.svg',
    username: '@SeanP#5604',
    isPrivate: false
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/SeanPesce',
    website: 'https://www.facebook.com',
    icon: ASSETS + '/img/social/icon/Facebook-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Facebook-color.svg',
    username: 'SeanPesce',
    isPrivate: true
  },
  {
    title: 'GitHub',
    url: 'https://github.com/SeanPesce',
    website: 'https://github.com',
    icon: ASSETS + '/img/social/icon/GitHub-circle-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/GitHub-black.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
  /*
  // RIP Google+
  {
    title: 'Google+',
    url: 'https://plus.google.com/u/1/112323386266060385128',
    website: 'https://plus.google.com',
    icon: ASSETS + '/img/social/icon/GooglePlus-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Google-Plus-color.svg',
    username: AUTHOR,
    isPrivate: false
  },*/
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/SeanPesce/',
    website: 'https://www.linkedin.com',
    icon: ASSETS + '/img/social/icon/LinkedIn-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/LinkedIn-color.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
  {
    title: 'PayPal',
    url: 'https://www.paypal.me/SeanPesce',
    website: 'https://www.paypal.com/',
    icon: ASSETS + '/img/social/icon/PayPal-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/PayPal-color.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
  {
    title: 'Reddit',
    url: 'https://www.reddit.com/u/SeanPesce',
    website: 'https://www.reddit.com',
    icon: ASSETS + '/img/social/icon/Reddit-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Reddit-full-color.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
  {
    title: 'Skype',
    url: 'skype:pescesean?chat',
    website: 'https://www.skype.com',
    icon: ASSETS + '/img/social/icon/Skype-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Skype-color.svg',
    username: 'pescesean',
    isPrivate: false
  },
  /*{
    title: 'Steam',
    url: 'http://steamcommunity.com/id/SeanPesce',
    website: 'http://www.steampowered.com/',
    icon: ASSETS + '/img/social/icon/Steam-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Steam-color.svg',
    username: 'SeanPesce',
    isPrivate: true
  },*/
  {
    title: 'Trello',
    url: 'https://trello.com/seanpesce',
    website: 'https://trello.com',
    icon: ASSETS + '/img/social/icon/Trello-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Trello-color.svg',
    username: '@seanpesce',
    isPrivate: false
  },
  {
    title: 'Twitch',
    url: 'https://www.twitch.tv/SeanPesce',
    website: 'https://www.twitch.tv',
    icon: ASSETS + '/img/social/icon/Twitch-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Twitch-color.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/SeanPesce',
    website: 'https://twitter.com',
    icon: ASSETS + '/img/social/icon/Twitter-rounded-square-white.svg',
    logo: ASSETS + '/img/social/logo/Twitter-color-blue.svg',
    username: '@SeanPesce',
    isPrivate: false
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/channel/UCgsMpXiR3PawqKM7MWLJGzQ',
    website: 'https://youtube.com',
    icon: ASSETS + '/img/social/icon/YouTube-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/YouTube-color.svg',
    username: AUTHOR,
    isPrivate: false
  }
];

export const LANGUAGES: LanguageSkill[] = [
  {
    name: 'C',
    description: '',
    proficient: true,
    start: 2014,
    logo: ''
  },
  {
    name: 'C++',
    description: '',
    proficient: true,
    start: 2014,
    logo: ''
  },
  {
    name: 'CSS',
    description: '',
    proficient: false,
    start: 2014,
    logo: ''
  },
  {
    name: 'HTML',
    description: '',
    proficient: false,
    start: 2014,
    logo: ''
  },
  {
    name: 'Java',
    description: '',
    proficient: true,
    start: 2013,
    logo: ''
  },
  {
    name: 'JavaScript',
    description: '',
    proficient: false,
    start: 2017,
    logo: ''
  },
  {
    name: 'MySQL',
    description: '',
    proficient: true,
    start: 2015,
    logo: ''
  },
  {
    name: 'Python',
    description: '',
    proficient: false,
    start: 2016,
    logo: ''
  },
  {
    name: 'TypeScript',
    description: '',
    proficient: false,
    start: 2017,
    logo: ''
  },
  {
    name: 'x86 assembly',
    description: '',
    proficient: false,
    start: 2015,
    logo: ''
  },
  {
    name: 'XML',
    description: '',
    proficient: false,
    start: 2016,
    logo: ''
  }
];


export const UTILITIES: UtilitySkill[] = [
  {
    name: 'Android SDK',
    description: 'Software development kit for creating Android apps',
    proficient: false,
    start: 2017,
    logo: '',
    languages: ['Java', 'XML'],
    url: 'https://developer.android.com/studio/index.html'
  },
  {
    name: 'Angular 2+',
    description: 'Front-end web development framework',
    proficient: true,
    start: 2017,
    logo: '',
    languages: ['TypeScript', 'HTML', 'CSS'],
    url: 'https://angular.io/'
  },
  {
    name: 'Apache Commons',
    description: 'Reusable, open source Java libraries from the Apache Software Foundation',
    proficient: true,
    start: 2014,
    logo: '',
    languages: ['Java'],
    url: 'https://commons.apache.org'
  },
  {
    name: 'DirectX SDK',
    description: 'June 2010 DirectX SDK',
    proficient: false,
    start: 2016,
    logo: '',
    languages: ['C++'],
    url: 'https://www.microsoft.com/en-us/download/details.aspx?id=6812'
  },
  {
    name: 'Frida',
    description: 'Binary instrumentation toolkit',
    proficient: true,
    start: 2018,
    logo: '',
    languages: ['JavaScript', 'Python'],
    url: 'https://frida.re'
  },
  {
    name: 'Inno Setup',
    description: 'Script-driven installation system',
    proficient: false,
    start: 2014,
    logo: '',
    languages: ['Inno Script'],
    url: 'http://www.jrsoftware.org/isinfo.php'
  },
  {
    name: 'JavaFX',
    description: 'Application framework & GUI library',
    proficient: true,
    start: 2013,
    logo: '',
    languages: ['Java', 'CSS'],
    url: 'http://www.oracle.com/technetwork/java/javase/overview/javafx-overview-2158620.html'
  },
  {
    name: 'MS Detours',
    description: 'Win32 API re-routing library from Microsoft',
    proficient: true,
    start: 2017,
    logo: '',
    languages: ['C++'],
    url: 'https://www.microsoft.com/en-us/research/project/detours/'
  },
  {
    name: 'Node.js',
    description: 'JavaScript run-time environment',
    proficient: false,
    start: 2017,
    logo: '',
    languages: ['TypeScript'],
    url: 'https://nodejs.org/en/'
  },
  {
    name: 'POSIX',
    description: 'C standard library for POSIX systems',
    proficient: true,
    start: 2015,
    logo: '',
    languages: ['C', 'C++'],
    url: 'https://en.wikipedia.org/wiki/C_POSIX_library'
  },
  {
    name: 'SeqAn',
    description: 'Sequence analysis library',
    proficient: false,
    start: 2017,
    logo: '',
    languages: ['C++'],
    url: 'https://www.seqan.de/'
  },
  /*{
    name: 'Spring',
    description: 'Back-end web development framework',
    proficient: false,
    start: 2017,
    logo: '',
    languages: ['Java'],
    url: 'https://spring.io/'
  },*/
  {
    name: 'STL',
    description: 'Standard Template Library',
    proficient: true,
    start: 2014,
    logo: '',
    languages: ['C++'],
    url: 'http://en.cppreference.com/w/cpp/language'
  },
  {
    name: 'Windows API',
    description: 'Core API for Microsoft Windows',
    proficient: true,
    start: 2014,
    logo: '',
    languages: ['C', 'C++'],
    url: 'https://msdn.microsoft.com/en-us/library/windows/desktop/ff818516(v=vs.85).aspx'
  }
];

export const SOFTWARES: SoftwareSkill[] = [
  {
    name: '010 Editor',
    description: 'Hex editor & binary templates',
    proficient: true,
    start: 2017,
    logo: '',
    url: 'https://www.sweetscape.com/010editor/'
  },
  {
    name: 'Adobe Photoshop',
    description: 'Image editor',
    proficient: true,
    start: 2013,
    logo: '',
    url: 'https://www.adobe.com/products/photoshop.html'
  },
  {
    name: 'Android Studio',
    description: 'IDE',
    proficient: false,
    start: 2017,
    logo: '',
    url: 'https://developer.android.com/studio/index.html'
  },
  {
    name: 'Cheat Engine',
    description: 'Debugger',
    proficient: true,
    start: 2014,
    logo: '',
    url: 'http://www.cheatengine.org/'
  },
  {
    name: 'Eclipse',
    description: 'IDE',
    proficient: true,
    start: 2013,
    logo: '',
    url: 'https://www.eclipse.org/ide/'
  },
  {
    name: 'GDB',
    description: 'Debugger',
    proficient: false,
    start: 2015,
    logo: '',
    url: 'https://www.gnu.org/software/gdb/'
  },
  {
    name: 'Ghidra',
    description: 'Disassembler/decompiler',
    proficient: true,
    start: 2019,
    logo: '',
    url: 'https://www.nsa.gov/resources/everyone/ghidra/'
  },
  {
    name: 'Git',
    description: 'Version control',
    proficient: false,
    start: 2013,
    logo: '',
    url: 'https://git-scm.com/'
  },
  {
    name: 'IDA',
    description: 'Disassembler/decompiler',
    proficient: true,
    start: 2016,
    logo: '',
    url: 'https://www.hex-rays.com/products/ida/'
  },
  {
    name: 'IntelliJ IDEA',
    description: 'IDE',
    proficient: false,
    start: 2016,
    logo: '',
    url: 'https://www.jetbrains.com/idea'
  },
  {
    name: 'JEB',
    description: 'Disassembler/decompiler',
    proficient: false,
    start: 2018,
    logo: '',
    url: 'https://www.pnfsoftware.com/'
  },
  {
    name: 'MySQL Workbench',
    description: 'Database design',
    proficient: false,
    start: 2015,
    logo: '',
    url: 'https://www.mysql.com/products/workbench/'
  },
  {
    name: 'NetBeans',
    description: 'IDE',
    proficient: true,
    start: 2013,
    logo: '',
    url: 'https://netbeans.org/'
  },
  {
    name: 'Visual Studio',
    description: 'IDE',
    proficient: true,
    start: 2014,
    logo: '',
    url: 'https://www.visualstudio.com/'
  },
  {
    name: 'VS Code',
    description: 'IDE',
    proficient: true,
    start: 2016,
    logo: '',
    url: 'https://code.visualstudio.com/'
  },
  {
    name: 'VMWare Workstation',
    description: 'Hypervisor',
    proficient: true,
    start: 2016,
    logo: '',
    url: 'https://www.vmware.com/products/workstation-pro.html'
  },
  {
    name: 'Wireshark',
    description: 'Network analyzer',
    proficient: false,
    start: 2016,
    logo: '',
    url: 'https://www.wireshark.org/'
  }
];
