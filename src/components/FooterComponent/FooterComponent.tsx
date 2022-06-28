import FooterComponentStyled from "./FooterComponentStyled";
import { WiSunrise } from "react-icons/wi";
import { RiMedalLine } from "react-icons/ri";
import {
  MdOutlineSportsVolleyball,
  MdOutlineSportsHandball,
} from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";

const FooterComponent = () => {
  return (
    <FooterComponentStyled>
      <ul>
        <li className="home">
          <WiSunrise size={80} />
          <span>Home</span>
        </li>
        <li>
          <RiMedalLine size={80} />
        </li>
        <li>
          <MdOutlineSportsVolleyball size={80} />
        </li>
        <li>
          <MdOutlineSportsHandball size={80} />
        </li>

        <li>
          <AiOutlineTable size={80} />
        </li>
      </ul>
    </FooterComponentStyled>
  );
};
export default FooterComponent;
