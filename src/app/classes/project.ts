// Author: Sean Pesce
import { Collaborator } from './collaborator';
import { ImageSlide } from './image-slide';
import { ProjectType } from './../enums/project-type';
import { Video } from './video';

export class Project {

  public title = '';
  public role = ''; // My role in the development process
  public type: ProjectType = ProjectType.PERSONAL;
  public categories: string[] = []; // Bugfix, video game mod, etc.
  public description = '';
  public repository = '';
  public isPrivate = false; // Whether the source code/downloads are private
  public website = '';
  public download = '';
  public start: number = (new Date()).getFullYear() - 1; // Year the project was started
  public end = 0; // End of life (0 = still supported or in development)
  public status = ''; // In development, completed, no longer supported, etc.
  public collaborators: Collaborator[] = [];
  public acknowledgements: Collaborator[] = [];
  public license = '';
  public languages: string[] = [];
  public utilities: string[] = [];
  public images: ImageSlide[] = [];
  public videos: Video[] = [];

  constructor(title: string, role: string, type: ProjectType, categories: string[], description: string, repository: string,
              isPrivate: boolean, website: string, download: string, start: number, status: string, collaborators: Collaborator[],
              acknowledgements: Collaborator[], license: string, languages: string[], utilities: string[],
              images: ImageSlide[], videos: Video[]) {
    if (title != null) {
      this.title = title;
    }
    if (role != null) {
      this.role = role;
    }
    if (type != null) {
      this.type = type;
    }
    if (categories != null) {
      this.categories = categories;
    }
    if (description != null) {
      this.description = description;
    }
    if (repository != null) {
      this.repository = repository;
    }
    this.isPrivate = isPrivate;
    if (website != null) {
      this.website = website;
    }
    if (download != null) {
      this.download = download;
    }
    if (start >= 2010) {
      this.start = start;
    }
    if (status != null) {
      this.status = status;
    }
    if (collaborators != null) {
      this.collaborators = collaborators;
    }
    if (acknowledgements != null) {
      this.acknowledgements = acknowledgements;
    }
    if (license != null) {
      this.license = license;
    }
    if (languages != null) {
      this.languages = languages;
    }
    if (utilities != null) {
      this.utilities = utilities;
    }
    if (images != null) {
      this.images = images;
    }
    if (videos != null) {
      this.videos = videos;
    }
  }
}
