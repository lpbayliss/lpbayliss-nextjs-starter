import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { default as Button } from './button.component';

export default { title: 'Button', decorators: [withKnobs] };

// Action addon example
export const withTextLabel = () => (
  <Button id="HelloButton" name="hello_button" label="Hello!" onClick={action('clicked')} />
);

// Link addon example
export const withEmojiLabel = () => (
  <Button id="EmojiButton" name="emoji_button" label="😀 😎 👍 💯" onClick={linkTo('button--with-text-label') as any} />
);

export const withEditableLabel = () => (
  <Button id="EditableButton" name="editable_button" label={text('Label', 'Edit me')} onClick={action('clicked')} />
);
