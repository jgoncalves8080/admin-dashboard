import styled from 'styled-components';

export const MainContent = styled.div`
  position: relative;
  margin-left: 240px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 240px;
  width: 82.5%;
  background: #fff;
  border-bottom: 1px solid #ccc;

  height: 60px;
  padding: 0rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input``;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  > span,
  img {
    margin-left: 1.5rem;
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  > input {
    border: 0;
    outline: 0;
    padding: 1rem;
    height: 38px;
  }
`;

export const Main = styled.main`
  margin-top: 60px;
  background: #f1f5f9;
  min-height: 90vh;
  padding: 1rem 3rem;

  > h2 {
    color: #1d2231;
    margin-bottom: 1rem;
  }
`;

export const DashboardCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
`;

export const CardSingle = styled.div`
  background: #fff;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  > span {
    font-size: 1.5rem;
    color: #777;
    padding-right: 1.4rem;
  }
  > div {
    > h5 {
      color: #8390a2;
      font-size: 1.2rem;
    }

    > h4 {
      color: #1d2231;
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  }
`;

export const CardFooter = styled.div`
  padding: 0.2rem 1rem;
  background: #f9fafc;

  > a {
    color: #027581;
  }
`;
