import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.primary ? '#0066ff' : '#f1f3f5'};
  color: ${props => props.primary ? 'white' : 'black'};

  &:hover {
    background-color: ${props => props.primary ? '#0052cc' : '#e9ecef'};
    transform: translateY(-1px);
  }
`;

export default function Button({ children, primary = false, onClick }) {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
}