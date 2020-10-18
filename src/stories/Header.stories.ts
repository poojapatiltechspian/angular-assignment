import { storiesOf, moduleMetadata } from '@storybook/angular';
import HeaderStoryComponent from './header.component';
import { ThemeService } from '../app/theme.service';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRegistrationSetupService } from '../app/setup/login-registration-setup.service';

export default {
  title: 'Navigation-Component',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
    //   imports: [FormsModule, CommonModule, RouterModule],
        declarations: [HeaderStoryComponent],
        // providers: [LoginRegistrationSetupService, ThemeService],
    }),
  ],
};

export const nav = () => ({
  component: HeaderStoryComponent,
  template: `
  <app-story-header></app-story-header>
    `,
  props: {
  },
});
