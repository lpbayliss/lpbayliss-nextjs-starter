import * as React from 'react';

export type Props = {
  id: string;
  name: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <button id={props.id} name={props.name} onClick={props.onClick}>
    {props.label}
  </button>
);

export default Button;
