import React  from 'react';
import './button.css'

type Props = {
  children: string | JSX.Element;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
