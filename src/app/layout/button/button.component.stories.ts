import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

export const defaultTasksData = [
  { id: '1' },
];
export const EditButtonDisableFalse = () => ({
  component: ButtonComponent,
  template: `
  <button type="Button" [disabled]="disabledFlag" (click)="functionClick(FormValue)">
  {{labelbutton}}
</button>
`,
  props: {
    FormValue: defaultTasksData,
    disabledFlag: false,
    labelbutton: 'Edit',
  },
});
export const saveButtonTrueFalse = () => ({
    component: ButtonComponent,
    template: `
    <button type="Button" [disabled]="disabledFlag" (click)="functionClick(FormValue)">
    {{labelbutton}}
  </button>
  `,
    props: {
      FormValue: defaultTasksData,
      disabledFlag: true,
      labelbutton: 'SAVE',
    },
});
