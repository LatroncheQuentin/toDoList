import React from 'react';

import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ onClick, color = "light", children }) => {
  return (
    <BootstrapButton onClick={onClick} variant={color} >
      {children}
    </BootstrapButton>
  );
};

export default Button;