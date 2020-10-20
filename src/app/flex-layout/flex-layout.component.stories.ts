import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FlexLayoutComponent } from './flex-layout.component';

export default {
  title: 'Flex Layout ',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
        declarations: [FlexLayoutComponent],
    }),
  ],
};

export const flex = () => ({
  component: FlexLayoutComponent,
  template: `
  <app-flex-layout></app-flex-layout>
    `,
  props: {
  },
});
