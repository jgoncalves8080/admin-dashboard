import styled from 'styled-components';

export const Container = styled.div``;

export const Sider = styled.div`
  background: #027581;
  height: 100%;
  width: 240px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  color: #fff;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

export const Menu = styled.div`
  padding: 1rem;
`;

export const NavLinks = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 1.5rem;

  a {
    color: #fff;
    font-size: 0.9rem;
    > span:last-child {
      padding-left: 0.6rem;
    }
  }
`;
