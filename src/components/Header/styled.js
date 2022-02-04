import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  background-color: #00000000;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 43.9px;
  padding-left: 34px;
  z-index: 1;
  img {
    width: 98px;
  }

  ul {
    display: flex;
  }

  a {
    color: #e5e5e5;
  }
`;

export const NavPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 0.9em;
    font-size: 1.1vw;
    margin-left: 18px;
    display: flex;
  }
  a:hover {
    color: #bfbfbf;
    transition: color 0.4s;
  }
  ul {
    padding-left: 26px;
  }
  img {
    margin-top: 3px;
  }
`;

export const NavSecondary = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
  a {
    font-size: 1.5em;
    padding: 10px;
    display: flex;
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 4px;
  }
`;

export const SortDown = styled.span`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1), -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
    -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1), -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
`;

export const AccountMenu = styled.div`
  background-color: rgba(0, 0, 0, 9);
  position: absolute;
  top: 108%;
  right: 6%;
  height: max-content;
  width: 13vw;
  color: #fff;
  align-items: flex-start;
  border: #1f1f1f 1px solid;
  border-radius: 1px;
  flex-direction: column;
  display: ${({ accountMenuOn }) => (accountMenuOn === 1 ? 'flex' : 'none')};

  :hover {
    display: flex;
  }

  p:hover {
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
  }
`;

export const DivProfile = styled.div`
  margin: 10px;
  display: flex;
  color: #fff;
  cursor: pointer;
  align-items: center;
  :hover {
    ${SortDown} {
      transform: rotate(180deg);
    }
  }
`;

export const Profiles = styled.div`
  position: relative;
  height: min-content;
  margin-top: 15px;

  ul {
    display: flex;
    flex-direction: column;
    span {
      margin-top: 8px;
      font-size: 0.95em;
    }
  }
  a {
    font-size: 0.85em;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0;
    margin: 0px 10px 12px 10px;
  }
  img {
    width: 31px;
    height: 31px;
    margin-right: 10px;
  }
`;

export const ConfigsAccountMenu = styled.div`
  border-top: 1.5px #1f1f1f solid;
  width: 100%;
  ul {
    display: flex;
    font-size: 0.6em;
    flex-direction: column;
    padding-bottom: 7px;
  }
  a {
    padding: 10px 10px 3px 10px;
    font-weight: 500;
  }
`;
