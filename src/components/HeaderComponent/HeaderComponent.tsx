import logo from "../../../src/images/logo.webp";
import { BsThreeDotsVertical } from "react-icons/bs";
import HeaderComponentStyled from "./HeaderComponentStyled";

const HeaderComponent = () => {
  return (
    <HeaderComponentStyled>
      <div className="title">
        <img src={logo} alt={`Logo of the VolleyMania`} />
        <h1>Volley World</h1>
      </div>
      <button className="icon-menu">
        <BsThreeDotsVertical size={30} />
      </button>
    </HeaderComponentStyled>
  );
};

export default HeaderComponent;
