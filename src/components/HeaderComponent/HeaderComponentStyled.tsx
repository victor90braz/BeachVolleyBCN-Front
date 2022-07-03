import styled from "styled-components";

const HeaderComponentStyled = styled.header`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 10px;

    .title {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }

    .icon-menu {
      background: white;
      border: none;
    }
  }
`;

export default HeaderComponentStyled;
