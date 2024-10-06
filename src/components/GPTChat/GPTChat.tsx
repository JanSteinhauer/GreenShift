import { useEffect, useState } from "react";
import Caution from "./Caution";
import Prompt from "./Prompt";
import Sidebar from "./Sidebar";
import PromptCard from "./PromptCard";
import './style.css';
import { promptBoxes } from "./promptBoxes";

function GPTChat() {

  const [userMessage, setUserMessage] = useState("");
  const [selectedChat, setselectedChat] = useState(0);

  useEffect(() => {
    console.log("Application loaded...");
  }, []);

  // Function to handle setting the selected prompt in the input box
  const handlePromptClick = (title: string, subtitle: string) => {
    console.log("i was executed")
    const UserMessageString = title + " " + subtitle
    setUserMessage(UserMessageString);
  };

  const getPromptBoxesByCategory = () => {
    switch (selectedChat) {
      case 0:
        return promptBoxes.standard;
      case 1:
        return promptBoxes.energy;
      case 2:
        return promptBoxes.waste;
      case 3:
        return promptBoxes.sustainability;
      case 4:
        return promptBoxes.carbon;
      default:
        return promptBoxes.standard;
    }
  };

  return (
    <>
      <div className="row vh-100">
        <div className="col-lg-2 gpt-sidebar">
          <Sidebar selectedChat={selectedChat} setselectedChat={setselectedChat} />
        </div>

        <div className="col-lg-10 gpt-chat-area text-white">
          <Prompt selectedChat={selectedChat} setselectedChat={function (): void {
            throw new Error("Function not implemented.");
          } } />

          <div className="container px-6">
            <div className="row">
            {getPromptBoxesByCategory().map((item) => (
                <PromptCard
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  onClick={() => handlePromptClick(item.title, item.subtitle)}
                />
              ))}
            </div>

            <div className="input-group input-group-lg mb-3 gpt-message-box">
              <input
                type="text"
                className="form-control gpt-form-control"
                placeholder="Message GreenshiftAI..."
                value={userMessage} // Use the state value
                onChange={(e) => setUserMessage(e.target.value)} // Update state on input change
              />
              <div className="input-group-append gpt-submit">
                <button
                  className={`btn gpt-btn-gray ${userMessage === "" ? "" : "bg-white"}`}
                  type="button"
                >
                  <i className="fas fa-arrow-up" onClick={()=>{console.log("usermessage", userMessage)}}></i>
                </button>
              </div>
            </div>

            <Caution />
          </div>
        </div>
      </div>
    </>
  );
}

export default GPTChat;
