// Author: Sean Pesce
import { environment } from './../environments/environment';
import { LanguageSkill } from './classes/skill-language';
import { SocialMedia } from './classes/social-media-profile';
import { UtilitySkill } from './classes/skill-utility';

export const AUTHOR = 'Sean Pesce';
export const PRODUCTION_MODE = environment.production; // True if production mode, false if dev mode

export const ASSETS_DEV  = '../assets/';
export const ASSETS_PROD = 'assets/';
export const ASSETS = PRODUCTION_MODE ? ASSETS_PROD : ASSETS_DEV;

export const PROFILE_PICS: string[] = [
  ASSETS + '/img/profile/01.png',
  ASSETS + '/img/profile/02.jpg',
  ASSETS + '/img/profile/Avatar-dark.png'
];

export const SOCIAL_MEDIA: SocialMedia[] = [
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
  {
    title: 'Google+',
    url: 'https://plus.google.com/u/1/112323386266060385128',
    website: 'https://plus.google.com',
    icon: ASSETS + '/img/social/icon/GooglePlus-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Google-Plus-color.svg',
    username: AUTHOR,
    isPrivate: false
  },
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
    title: 'Reddit',
    url: 'https://www.reddit.com/u/SeanPesce',
    website: 'https://www.reddit.com',
    icon: ASSETS + '/img/social/icon/Reddit-white-transparent.svg',
    logo: ASSETS + '/img/social/logo/Reddit-full-color.svg',
    username: 'SeanPesce',
    isPrivate: false
  },
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
    name: 'DirectX SDK',
    description: 'June 2010 DirectX SDK',
    proficient: false,
    start: 2016,
    logo: '',
    languages: ['C++'],
    url: 'https://www.microsoft.com/en-us/download/details.aspx?id=6812'
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
  {
    name: 'Spring',
    description: 'Back-end web development framework',
    proficient: false,
    start: 2017,
    logo: '',
    languages: ['Java'],
    url: 'https://spring.io/'
  },
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
