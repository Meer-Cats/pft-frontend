import {SafeUrl} from '@angular/platform-browser';

export interface User {
  name: string;
  surname?: string;
  mail: string;
  avatar: SafeUrl;
  isHR: boolean;
}
