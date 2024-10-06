import logo from "../../assets/GreenshiftAiLogoCroped.png";
import './style.css';
import carbon from "../../assets/Carbon.png";
import energy from "../../assets/Energy.png";
import equipment from "../../assets/Equipment.png";
import waste from "../../assets/Waste.png";
import { AIAgentProps } from "./AIAgentProps";

const Sidebar: React.FC<AIAgentProps> = ({ selectedChat, setselectedChat }) => {
  const handleChatSelection = (chatId: number) => {
    setselectedChat(chatId);
  };

  const chatOptions = [
    { id: 1, label: "Energy Advisor", imgSrc: energy },
    { id: 2, label: "Waste Advisor", imgSrc: waste },
    { id: 3, label: "Sustainablity", imgSrc: equipment },
    { id: 4, label: "Carbon Advisor", imgSrc: carbon },
  ];

  return (
    <>
      <div className="p-1 text-white">
        <div className="gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2" onClick={() => handleChatSelection(0)}>
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

        {chatOptions.map((option) => (
          <div
            key={option.id}
            className={`gpt-new-chat-btn px-2 py-2 mt-2 mb-1 ml-2 ${selectedChat === option.id ? 'bg-dark' : ''}`}
            onClick={() => handleChatSelection(option.id)}
            style={{
              cursor: 'pointer',
              borderRadius: selectedChat === option.id ? '10px' : '0px' // Apply border-radius if selected
            }}
          >
            <span className="d-flex">
              <span className="gpt-circle-2 text-dark">
                <img src={option.imgSrc} alt={`${option.label} Logo`} className="img-fluid" />
              </span>
              <div className="ml-2 mt-1">
                <small>{option.label}</small>
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
