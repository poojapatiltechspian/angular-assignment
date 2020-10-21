import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card.component';
import { action } from '@storybook/addon-actions';
import { props } from '@ngrx/store';

export default {
  title: 'Dashboard Component',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [DashboardCardComponent],
      imports: [CommonModule],
    }),
  ],
};

export const bookData = [
    {
      id: '1',
      name: 'Wise and Otherwise: A salute to Life',
      display_name: 'Wise and Otherwise',
      author: 'Sudha Murty',
      price: '250',
      description: 'Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself.',
      img_path: 'assets/img/sudhamurti1.jpeg'
    },
];
export const dashboardCardContainer = () => ({
  component: DashboardCardComponent,
  template: `
  <app-dashboard-card [productData]='data'></app-dashboard-card>`,
    props: {
        data: bookData,
    }
});
