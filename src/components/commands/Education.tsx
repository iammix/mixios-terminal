import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { Seperator } from "../styles/Welcome.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <Seperator>---</Seperator>
      <EduIntro>Here is my education background!</EduIntro>
      <Seperator>---</Seperator>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Integrated Master, Civil Engineering",
    desc: "Aristotle University of Thessaloniki, Greece | 2013 ~ 2018",
  },
  {
    title: "MSc., Structural Engineering",
    desc: "Aristotle University of Thessaloniki, Greece | 2018 - 2019",
  },
  {
    title: "Invited Researcher, Civil Engineering",
    desc: "University of Toronto, Canada | Jun. 2019 - Dec. 2019",
  },
];

export default Education;
