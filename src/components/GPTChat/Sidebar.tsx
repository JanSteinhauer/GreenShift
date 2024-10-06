import logo from "../../assets/GreenshiftAiLogoCroped.png";
import './style.css';
import carbon from "../../assets/Carbon.png";
import energy from "../../assets/Energy.png";
import equipment from "../../assets/Equipment.png";
import waste from "../../assets/Waste.png";



const Sidebar = () => {
    return (
        <>
            <div className="p-1 text-white">

                <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2">
                    <i className="float-right mt-2 mr-1 far fa-pen-to-square"></i>
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <img src={logo} alt="Greenshift AI Logo" className="img-fluid" />
                        </span>
                        <div className="ml-2 mt-1">
                            <small>Overview</small>
                        </div>
                    </span>
                    
                </div>

                <div className="px-4 mt-3">
                    <small className="text-secondary">Agents</small>
                </div>

                <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2">
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <img src={energy} alt="Greenshift AI Logo" className="img-fluid" />
                        </span>
                        <div className="ml-2 mt-1">
                            <small>Energy Advisor</small>
                        </div>
                    </span>
                    
                </div>
                <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2">
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <img src={waste} alt="Greenshift AI Logo" className="img-fluid" />
                        </span>
                        <div className="ml-2 mt-1">
                            <small>Waste Advisor</small>
                        </div>
                    </span>
                    
                </div>

                <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2">
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <img src={equipment} alt="Greenshift AI Logo" className="img-fluid" />
                        </span>
                        <div className="ml-2 mt-1">
                            <small>Equipment Advisor</small>
                        </div>
                    </span>
                    
                </div>

                <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2">
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <img src={carbon} alt="Greenshift AI Logo" className="img-fluid" />
                        </span>
                        <div className="ml-2 mt-1">
                            <small>Carbon Advisor</small>
                        </div>
                    </span>
                    
                </div>


            </div>
        </>
    );
}

export default Sidebar;
