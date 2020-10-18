import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FlexLayoutComponent } from '../app/flex-layout/flex-layout.component';

storiesOf('food Component', module)
.addDecorator(
    moduleMetadata({
        declarations: [FlexLayoutComponent],
    }),
)
.add('flex-layout', () => {
    return {
        template: '<app-flex-layout></app-flex-layout>',
    };
});
