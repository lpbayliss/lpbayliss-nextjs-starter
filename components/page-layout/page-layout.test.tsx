import { shallow } from 'enzyme';

import { default as PageLayout } from './page-layout.component';

describe('Button Component', () => {
  it('Renders button with correct label text', () => {
    const component = shallow(<PageLayout />);

    expect(component.exists()).toBeTruthy();
  });
});
