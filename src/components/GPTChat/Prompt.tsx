import Svg from "./Svg";
import './style.css';
import logo from "../../assets/GreenshiftAiLogo.webp"

const Prompt = () => {
    return (
        <div className="text-center gpt-prompt">
            <div className="gpt-circleL text-dark">
            <img src={logo} alt="Greenshift AI Logo" className="img-fluid" />
            </div>
            <h5 className="font-weight-bold mt-3">
                How can I help you today?
            </h5>
        </div>
    );
}
 
export default Prompt;