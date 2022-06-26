import styled from "styled-components";

const MainComponentStyled = styled.main`
  display: flex;
  flex-direction: column;

  ul li {
    padding: 0;
    list-style: none;
  }

  .element-perfil {
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 150px;
    }
  }

  .element-data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .element-statistics {
    display: flex;
    flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    list-style: none;

    .points,
    .rate,
    .game {
      background: yellow;
      width: 150px;
      height: 150px;
      border-radius: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
export default MainComponentStyled;
