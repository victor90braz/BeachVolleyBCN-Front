import HeaderStyled from "./HeaderStyled";
import logo from "../../images/logo.webp";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="title">
        <img src={logo} alt={`Logo of the VolleyMania`} />
        <h1>Volley World</h1>
      </div>
      <button className="icon-menu">
        <BsThreeDotsVertical size={40} />
      </button>
    </HeaderStyled>
  );
};

export default Header;
