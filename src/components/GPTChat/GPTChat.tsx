import { useEffect, useState } from "react";
import Caution from "./Caution";
import Prompt from "./Prompt";
import Sidebar from "./Sidebar";
import PromptCard from "./PromptCard";
import './style.css';

function GPTChat() {
  const promptBoxes = [
    {
      id: 1,
      title: "Brainstorm incentives",
      subtitle: "for a customer royalty program in a small bookstore"
    },
    {
      id: 2,
      title: "Compare storytelling techniques",
      subtitle: "in novels and in films"
    },
    {
      id: 3,
      title: "Write a message",
      subtitle: "that goes with a kitten gif for a friend on a..."
    },
    {
      id: 4,
      title: "Give me ideas",
      subtitle: "for what to do with my kids' art"
    }
  ];

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

  return (
    <>
      <div className="row vh-100">
        <div className="col-lg-2 gpt-sidebar">
          <Sidebar selectedChat={selectedChat} setselectedChat={setselectedChat} />
        </div>

        <div className="col-lg-10 gpt-chat-area text-white">
          <Prompt selectedChat={selectedChat} />

          <div className="container px-6">
            <div className="row">
              {promptBoxes.map((item) => (
                <PromptCard
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  onClick={() => handlePromptClick(item.title, item.subtitle)} // Pass the handler
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
