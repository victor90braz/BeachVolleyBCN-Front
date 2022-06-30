import styled from "styled-components";
const FooterComponentStyled = styled.footer`
  @media (min-width: 320px) {
    width: 100%;
    background: yellow;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      list-style: none;
      padding: 25px;

      .home {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
export default FooterComponentStyled;
