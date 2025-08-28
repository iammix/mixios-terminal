import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi there, my name is <HighlightSpan>Konstantinos Mixios</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Data Engineer and Full-Stack Developer</HighlightAlt>, with back-end focus!
      </p>
      <p>
        Currently working as a <HighlightSpan>Data Engineer</HighlightSpan> at {"Leadinfo B.V."}
          </p>
      <p>
        Passionate about giving solutions to real-life challenges and problems. <br />
      </p>
    </AboutWrapper>
  );
};

export default About;
