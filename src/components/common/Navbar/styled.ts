import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #23272f;
  border: 1px solid red;
`;

export const NavbarLogo = styled.div`
  color: #21a1c1;
  font-size: 1.5em;
  margin-left: 0.5em;
  margin-top: 0.2em;
  font-weight: bold;
`;
export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 5px;
  input[type="text"]:focus {
    text-indent: 20px;
    caret-color: white;
    text-decoration-color: white;
  }
`;

export const SearchBarInput = styled.input`
  width: 800px;
  height: 40px;
  border-radius: 50rem;
  background-color: #353a48;
  border: none;
`;

const ButtonStyle = css`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #293644;
  color: #ffff;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #21a1c1;
  }
  font-weight: bold;
`;

export const LinkButton = styled(Link)`
  ${ButtonStyle}
`;

export const NavButton = styled.button`
  ${ButtonStyle}
`;
