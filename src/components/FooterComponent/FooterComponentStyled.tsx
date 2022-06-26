import styled from "styled-components";
const FooterComponentStyled = styled.footer`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    padding: 25px;
    background: yellow;

    li img {
      width: 100px;
      height: 100px;
    }
  }
`;
export default FooterComponentStyled;
