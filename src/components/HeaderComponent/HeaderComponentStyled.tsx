import styled from "styled-components";

const HeaderComponentStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    width: 50px;
    object-fit: cover;
  }

  .icon-menu {
    background: white;
    border: none;
  }
`;

export default HeaderComponentStyled;
