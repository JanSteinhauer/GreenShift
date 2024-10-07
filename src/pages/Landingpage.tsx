import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/GreenshiftAiLogo.webp';
import GPTChat from '../components/GPTChat/GPTChat';
import Waitlist from '../components/Waitlist';
import Dashboard from './Dashboard';

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2f1, #a5d6a7);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004d40;
  padding: 1rem 2rem;
  position: relative;

  @media (max-width: 768px) {

    align-items: center;
    justify-content: space-between;
    z-index: 999;
  }
`;

const NavLogo = styled.img`
  width: 50px;
  height: auto;
`;

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: #004d40;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem;
  }
`;


const NavLink = styled(motion.li)`
  margin-left: 2rem;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #a5d6a7;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 4px 0;
    }
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionOverview = styled.section`
  margin-top: 12rem;
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  color: #1b5e20;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const SubHeader = styled(motion.h2)`
  font-size: 1.8rem;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
  font-size: 1rem;
  color: black;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TextTrademark = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #2e7d32;
  border-radius: 50px;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #66bb6a;
    color: white !important;
  }
`;

const Footer = styled.footer`
  background-color: #004d40;
  padding: 2rem;
  color: #ffffff;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;

  a {
    color: #a5d6a7;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <NavLogo src={logo} alt="GreenShift AI Logo" />
        
        {/* Hamburger Menu */}
        <Hamburger onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>

        <NavLinks isOpen={isOpen}>
          <NavLink whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <motion.a href="#home">Home</motion.a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <motion.a href="#about">About</motion.a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <motion.a href="#services">Services</motion.a>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <motion.a href="#waitlist">Waitlist</motion.a>
          </NavLink>
        </NavLinks>
      </Navbar>

      {/* Main Content */}
      <MainContent>
        {/* Hero Section */}
        <Section id="home">
          <Header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            Welcome to GreenShift AI
          </Header>
          <SubHeader
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            GenAI-Powered Sustainability Advisor for Companies
          </SubHeader>
          <Button
            href="#get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Button>
        </Section>

        <GPTChat />

        

        {/* Company Overview */}
        <SectionOverview id="about">
          <Header>Company Overview</Header>
          <Text>
            GreenShift AI is an innovative platform that leverages artificial intelligence to empower businesses in making eco-friendly decisions. By deploying specialized Large Language Model (LLM) agents, each focusing on different sustainability domains such as energy efficiency, waste management, and sustainable sourcing, we offer personalized, holistic solutions to reduce environmental impact.
          </Text>
          <Button href="#services">Learn More</Button>
        </SectionOverview>

        {/* Mission Statement */}
        <Section>
          <Header>Our AI Dashboard</Header>
          <Text>
            To accelerate the global shift towards sustainability by providing intelligent, data-driven tools that enable businesses to make environmentally responsible choices while maintaining profitability and competitive advantage.
          </Text>
        </Section>

        <Dashboard />

        {/* Objectives */}
        {/* <Section>
          <Header>Our Objectives</Header>
          <ul>
            <li>
              <Text>
                <strong>Short-Term:</strong> Launch the platform targeting small to medium enterprises (SMEs) within the first year, achieving a user base of 500 companies.
              </Text>
            </li>
            <li>
              <Text>
                <strong>Mid-Term:</strong> Expand services to larger corporations and diversify the range of sustainability areas covered by the AI agents.
              </Text>
            </li>
            <li>
              <Text>
                <strong>Long-Term:</strong> Become a leading global platform for AI-driven sustainability solutions, influencing policy-making and industry standards.
              </Text>
            </li>
          </ul>
        </Section> */}

        {/* Unique Value Proposition */}
        <Section>
          <Header>Why Choose Us</Header>
          <ul>
            <li>
              <Text><strong>Personalized Solutions:</strong> Tailored advice based on the specific needs and data of your business.</Text>
            </li>
            <li>
              <Text><strong>Holistic Approach:</strong> Integrated recommendations covering multiple facets of sustainability.</Text>
            </li>
            <li>
              <Text><strong>Data-Driven Insights:</strong> Leveraging advanced AI to interpret complex data sets for informed decision-making.</Text>
            </li>
            <li>
              <Text><strong>Regulatory Compliance:</strong> Assistance in meeting environmental laws and reporting requirements.</Text>
            </li>
          </ul>
        </Section>

        <Waitlist />

        {/* Call to Action */}
        {/* <Section id="get-started">
          <Header>Ready to Make a Green Shift?</Header>
          <Text>
            Join us in revolutionizing sustainability practices. Let's work together to create a better, greener future for all.
          </Text>
          <Button
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist
          </Button>
        </Section> */}
      </MainContent>

      {/* Footer */}
      <Footer>
        <FooterLinks>
          <a href="#home">Home</a>|
          <a href="#about">About</a>|
          <a href="#services">Services</a>|
          <a href="#waitlist">Waitlist</a>
        </FooterLinks>
        <TextTrademark>&copy; {new Date().getFullYear()} GreenShift AI. All rights reserved.</TextTrademark>
      </Footer>
    </Container>
  );
};

export default LandingPage;
