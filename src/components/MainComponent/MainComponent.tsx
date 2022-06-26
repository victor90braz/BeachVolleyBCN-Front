import { useState } from "react";
import { SiHomebridge } from "react-icons/si";
import perfil from "../../images/perfil.jpg";
import MainComponentStyled from "./MainComponentStyled";

const MainComponent = () => {
  const [datas] = useState([
    {
      keywords: "Experienced",
      name: "Kimberly Hill",
      like: 10,
      point: 170,
      rate: 53,
      game: 25,
    },
  ]);

  return (
    <MainComponentStyled>
      <ul>
        {datas.map((data, index) => {
          return (
            <li key={index}>
              <div className="element-perfil">
                <img src={perfil} alt={`Perfil atleta`} />
              </div>
              <div className="element-data">
                <span>{data.keywords}</span>
                <h1>{data.name}</h1>
                <span>{data.like} Likes</span>
              </div>

              <ul className="element-statistics">
                <li className="points">
                  <SiHomebridge />
                  <h3>Points</h3>
                  <span>{data.point}</span>
                </li>
                <li className="rate">
                  <span>{data.rate}</span>
                  <span>Win Lose Ratio</span>
                </li>
                <li className="game">
                  <SiHomebridge />
                  <h3>Games Won</h3>
                  <span>{data.game}</span>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </MainComponentStyled>
  );
};

export default MainComponent;
