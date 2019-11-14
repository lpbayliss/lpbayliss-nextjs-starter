import { shallow } from 'enzyme';

import { default as Button } from './button.component';

describe('Button Component', () => {
  it('Renders button with correct label text', () => {
    const component = shallow(
      <Button id="TestButton" name="test_button" label="Test!" />,
    );

    expect(component.find('#TestButton').text()).toEqual('Test!');
  });
});
