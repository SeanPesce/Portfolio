// Author: Sean Pesce

export enum ProjectFormat {
  OTHER = 0,
  DESKTOP_GUI_APP = 1,
  DESKTOP_CLI_APP = 2,
  MOBILE_APP = 3,
  WEBSITE = 4,
  DYNAMIC_LIBRARY = 5,
  STATIC_LIBRARY = 6
}

export const FORMATS: string[] = [
  'Other',
  'Desktop application (GUI)',
  'Desktop application (CLI)',
  'Mobile app',
  'Website',
  'Dynamic library',
  'Static library'
];
