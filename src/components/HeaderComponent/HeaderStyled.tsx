import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  img {
    width: 40px;
    object-fit: cover;
  }
`;

export default HeaderStyled;
