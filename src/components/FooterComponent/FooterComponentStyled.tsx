import styled from "styled-components";
const FooterComponentStyled = styled.footer`
  width: 100%;
  background: yellow;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    padding: 25px;

    li img {
      width: 100px;
      height: 100px;
    }

    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export default FooterComponentStyled;
