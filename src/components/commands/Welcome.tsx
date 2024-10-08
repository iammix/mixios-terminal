import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <Seperator>----</Seperator>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator></Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
          <Seperator>----</Seperator>
        </div>
      </div>
    </HeroContainer>
    
  );
};

export default Welcome;
