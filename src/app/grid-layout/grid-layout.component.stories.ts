import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout.component';

export default {
  title: 'Grid Layout',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
        declarations: [GridLayoutComponent],
    }),
  ],
};

export const Grid = () => ({
  component: GridLayoutComponent,
  template: `
  <app-grid-layout></app-grid-layout>
    `,
  props: {
  },
});
