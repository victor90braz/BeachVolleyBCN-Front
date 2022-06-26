import HeaderStyled from "./HeaderStyled";
import logo from "../../images/logo.webp";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="title">
        <img src={logo} alt={`Logo of the VolleyMania`} />
        <h1>Volley World</h1>
      </div>
      <button>
        <img
          src="https://e7.pngegg.com/pngimages/207/247/png-clipart-computer-icons-hamburger-button-3-points-urban-brewery-menu-menu-text-monochrome.png"
          alt=""
        />
      </button>
    </HeaderStyled>
  );
};

export default Header;
