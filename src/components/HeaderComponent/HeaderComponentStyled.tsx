import styled from "styled-components";

const HeaderComponentStyled = styled.header`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 9px;

    .title {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    img {
      width: 30px;
      object-fit: cover;
    }

    .icon-menu {
      background: white;
      border: none;
    }
  }
`;

export default HeaderComponentStyled;
