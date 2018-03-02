// Author: Sean Pesce
export class JobPosition {

  public title = '';
  public summary = '';
  public tasks: string[] = [];

  constructor(title: string, summary: string, tasks: string[]) {
    if (title != null) {
      this.title = title;
    }
    if (summary != null) {
      this.summary = summary;
    }
    if (tasks != null) {
      this.tasks = tasks;
    }
  }
}
