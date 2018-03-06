// Author: Sean Pesce
import { Contributor } from './contributor';

export class Collaborator extends Contributor {

  public role = '';

  constructor(name: string, username: string, website: string, portfolio: string, role: string) {
    super(name, username, website, portfolio);
    if (role != null) {
      this.role = role;
    }
  }
}
