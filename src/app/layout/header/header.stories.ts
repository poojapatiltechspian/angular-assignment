import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../../theme.service';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';

export default {
  title: 'Navigation-Component',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [FormsModule, CommonModule, RouterModule],
        declarations: [HeaderComponent],
        providers: [LoginRegistrationSetupService, ThemeService],
    }),
  ],
};

export const defaultTasksData = [
  { id: '1' },
];
export const nav = () => ({
  component: HeaderComponent,
  template: `
  <app-header></app-header>
    `,
  props: {
  },
});
