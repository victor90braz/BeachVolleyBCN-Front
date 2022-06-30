import { useState } from "react";
import { GoStar } from "react-icons/go";
import { BsHeartFill } from "react-icons/bs";
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
              <span className="data_keywords">{data.keywords}</span>
              <h2 className="data_name">{data.name}</h2>
              <h3 className="data_like">
                <span className="data_number">{data.like} </span>
                Likes <BsHeartFill />
              </h3>
            </div>

            <ul className="statistics">
              <li className="points">
                <GoStar size={30} />
                <h3>Points</h3>
                <span className="statistics_number">{data.point}</span>
              </li>
              <li className="rate">
                <span className="statistics_number">{data.rate}</span>
                <h3 className="rate_status">Win Lose Ratio</h3>
              </li>
              <li className="game">
                <GoStar size={30} />
                <h3>Games Won</h3>
                <span className="statistics_number">{data.game}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </MainComponentStyled>
  );
};

export default MainComponent;
