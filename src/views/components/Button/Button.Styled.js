import styled, {css} from 'styled-components';

export const Button = styled.button`
  background: #fff;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 4px;
  color:#767676;
  transition: 0.3s;
  &:hover {
    color:#111;
  }
  
  ${props => props.sort === 'white' && css`
    background:#fff;
    color:#767676;
    &:hover {
      color:#111;;
    }
  `};

  ${props => props.sort === 'info' && css`
    background: #3cb46e;
    color: #fff;
    &:hover {
      background: #339b5e;
      color: #fff;
    }
  `};
  
  ${props => props.sort === 'outline' && css`
    border: 1px solid #d1d1d1;
    border-radius: 4px;
  `};
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
  height: 32px;
  border:1px solid #d1d1d1;
  border-radius: 4px;
  transition: 0.3s;
  cursor:pointer;
  background:#fff;
  & + & {
    margin-left: 6px;
  }
  svg {
    fill: #767676;
    transition: 0.3s;
    width: 13px;
    height: 13px;
  }
  &:hover {
    border-color:#111;
    svg {
      fill: #111;
    }
  }
`;