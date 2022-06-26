import { SiHomebridge } from "react-icons/si";
import perfil from "../../images/perfil.jpg";
import MainComponentStyled from "./MainComponentStyled";

const MainComponent = () => {
  return (
    <MainComponentStyled>
      <div className="element-perfil">
        <img src={perfil} alt={`Perfil atleta`} />
      </div>

      <div className="element-data">
        <span>Experienced</span>
        <h1>Kimberly Hill</h1>
        <span>10 Likes</span>
      </div>

      <ul className="element-statistics">
        <li className="points">
          <SiHomebridge />
          <h3>Points</h3>
          <span>53</span>
        </li>
        <li className="rate">
          <span>53</span>
          <span>Win Lose Ratio</span>
        </li>
        <li className="game">
          <SiHomebridge />
          <h3>Games Won</h3>
          <span>53</span>
        </li>
      </ul>
    </MainComponentStyled>
  );
};

export default MainComponent;
