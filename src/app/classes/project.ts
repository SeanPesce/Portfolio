// Author: Sean Pesce
import { Collaborator } from './collaborator';
import { ImageSlide } from './image-slide';
import { ProjectType } from './../enums/project-type';
import { Video } from './video';

export class Project {

  public title = '';
  public role = '';
  public type: ProjectType = ProjectType.PERSONAL;
  public category = ''; // Bugfix, video game mod, etc.
  public description = '';
  public repository = '';
  public website = '';
  public download = '';
  public start: number = (new Date()).getFullYear() - 1; // Year the project was started
  public status = ''; // In development, completed, no longer supported, etc.
  public collaborators: Collaborator[] = [];
  public acknowledgements: Collaborator[] = [];
  public license = '';
  public languages: string[] = [];
  public utilities: string[] = [];
  public images: ImageSlide[] = [];
  public videos: Video[] = [];

  constructor(title: string, role: string, type: ProjectType, category: string, description: string, repository: string,
              website: string, download: string, start: number, status: string, collaborators: Collaborator[],
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
    if (category != null) {
      this.category = category;
    }
    if (description != null) {
      this.description = description;
    }
    if (repository != null) {
      this.repository = repository;
    }
    if (website != null) {
      this.website = website;
    }
    if (download != null) {
      this.download = download;
    }
    this.start = start;
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
