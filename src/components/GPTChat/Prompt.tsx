import React from "react";
import './style.css';
import logo from "../../assets/GreenshiftAiLogo.webp";
import carbon from "../../assets/Carbon.png";
import energy from "../../assets/Energy.png";
import equipment from "../../assets/Equipment.png";
import waste from "../../assets/Waste.png";
import { AIAgentProps } from "./AIAgentProps";
import styled from 'styled-components';

const Title = styled.div`
  
`;

const Prompt: React.FC<AIAgentProps> = ({ selectedChat }) => {
  const chatOptions = [
    { id: 0, label: "How can I help you today?", imgSrc: logo },
    { id: 1, label: "Let's talk about your energy challenges!", imgSrc: energy },
    { id: 2, label: "Let's talk about your waste challenges!", imgSrc: waste },
    { id: 3, label: "Let's talk about your sustainablity challenges!", imgSrc: equipment },
    { id: 4, label: "Let's talk about your carbon challenges!", imgSrc: carbon },
  ];

  // Determine the current logo and label based on the selected chat option
  const currentOption = chatOptions.find(option => option.id === selectedChat) || { imgSrc: logo, label: "Select an Advisor" };

  return (
    <div className="text-center gpt-prompt">
      <div className="gpt-circleL text-dark">
        <img src={currentOption.imgSrc} alt="Selected Agent Logo" className="img-fluid" />
      </div>
      <h5 className="font-weight-bold mt-3" onClick={() => { console.log(selectedChat) }}>
        {currentOption.label}
      </h5>
      <Title>
      GreenShift AI is an innovative platform that leverages artificial intelligence to empower businesses in making eco-friendly decisions. By deploying specialized Large Language Model (LLM) agents, each focusing on different sustainability domains such as energy efficiency, waste management, and sustainable sourcing, we offer personalized, holistic solutions to reduce environmental impact.
      </Title>
      
    </div>
  );
}

export default Prompt;
