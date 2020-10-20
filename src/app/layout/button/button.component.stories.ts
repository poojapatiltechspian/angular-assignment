import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

export default {
  title: 'Button',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ButtonComponent],
      imports: [CommonModule, RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
    }),
  ],
};

export const defaultTasksData = [
  { id: '1' },
];
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
export const EditButtonDisableFalse = () => ({
  component: ButtonComponent,
  template: `
  <app-button type="Button" [labelbutton]="labelbutton" [disabledFlag]="disabledFlag" [FormValue]="FormValue" (click)="onArchiveTask($event)"></app-button>`,
  props: {
    FormValue: defaultTasksData,
    disabledFlag: false,
    labelbutton: 'Edit',
    onArchiveTask: actionsData.onArchiveTask,
  },
});
export const saveButtonTrueFalse = () => ({
    component: ButtonComponent,
    template: `
    <app-button type="Button" [labelbutton]="labelbutton" [disabledFlag]="disabledFlag" [FormValue]="FormValue" (click)="onArchiveTask($event)"></app-button>
  `,
    props: {
      FormValue: defaultTasksData,
      disabledFlag: true,
      labelbutton: 'SAVE',
      onArchiveTask: actionsData.onArchiveTask,
    },
});
