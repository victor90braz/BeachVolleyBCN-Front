import styled from "styled-components";

const MainComponentStyled = styled.main`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;

    .perfil {
      display: flex;
      justify-content: center;

      img {
        width: 120px;
        height: 120px;
        border-radius: 120px;
        object-fit: fill;
      }
    }

    .data {
      display: flex;
      flex-direction: column;
      align-items: center;

      .data_keywords {
        font-size: 13px;
        color: red;
        margin-top: 5px;
        font-weight: 600;
      }
      .data_name {
        font-size: 20px;
        margin-top: 2px;
      }
      .data_like {
        font-size: 15px;
        margin-top: -15px;
      }
    }

    .statistics {
      display: flex;
      flex-direction: row;
      flex-direction: row;
      justify-content: space-around;
      padding: 0;
      list-style: none;

      h3 {
        margin: 0;
        font-size: 15px;
      }

      .points,
      .rate,
      .game {
        background: yellow;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }

      .points,
      .game {
        width: 110px;
        height: 110px;
        border-radius: 110px;
        transform: translateY(-40px);
      }

      .rate {
        width: 90px;
        height: 90px;
        border-radius: 90px;
      }

      .statistics_number {
        font-size: 20px;
        font-weight: 700;
      }

      .game {
        display: flex;
        flex-direction: column;
      }

      .rate {
        .rate_status {
          font-size: 11px;
          margin-top: -20px;
        }
      }
    }
  }
`;
export default MainComponentStyled;
