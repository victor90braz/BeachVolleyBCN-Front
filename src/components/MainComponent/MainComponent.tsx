import { useState } from "react";
import { GoStar } from "react-icons/go";
import KimberlyHill from "../../images/kimberly-hill.jpg";
import { IPerfilPlayer } from "../../Interfaces/IPerfil";
import { initialState } from "../../utils/utiles";
import MainComponentStyled from "./MainComponentStyled";

const MainComponent = () => {
  const [playersData] = useState<IPerfilPlayer[]>(initialState);

  return (
    <MainComponentStyled>
      {playersData.map((data, index) => {
        return (
          <div key={index}>
            <div className="perfil">
              <img src={KimberlyHill} alt={`Perfil of ${data.name}`} />
            </div>

            <div className="data">
              <span>{data.keywords}</span>
              <h2>{data.name}</h2>
              <span>{data.like} Likes</span>
            </div>

            <ul className="statistics">
              <li className="points">
                <GoStar size={30} />
                <h3>Points</h3>
                <span>{data.point}</span>
              </li>
              <li className="rate">
                <span>{data.rate}</span>
                <span>Win Lose Ratio</span>
              </li>
              <li className="game">
                <GoStar size={30} />
                <h3>Games Won</h3>
                <span>{data.game}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </MainComponentStyled>
  );
};

export default MainComponent;
