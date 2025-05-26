import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem; /* text-sm */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  ${props => props.types === 'colorLight' && `
    background-color: #F2EFE8;
    color: #1F2937; /* text-gray-800 */
  `}
  
  ${props => props.types === 'outlineLight' && `
    background-color: transparent;
    border: 1px solid #F2EFE8;
    color: #F2EFE8;
  `}
  
  ${props => props.types === 'outlineDark' && `
    background-color: transparent;
    border: 1px solid #817D73;
    color: #817D73;
  `}
  
  ${props => props.types === 'colorDark' && `
    background-color: #817D73;
    color: #F2EFE8;
  `}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({ children, types = 'colorLight', onClick }) => {
  return (
    <StyledButton types={types} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button; 