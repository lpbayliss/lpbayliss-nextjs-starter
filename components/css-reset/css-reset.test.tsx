import { shallow } from 'enzyme';

import { default as CSSReset } from './css-reset.component';

describe('Button Component', () => {
  it('Renders button with correct label text', () => {
    const component = shallow(<CSSReset />);

    expect(component.exists()).toBeTruthy();
  });
});
