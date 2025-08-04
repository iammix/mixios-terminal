import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { Seperator } from "../styles/Welcome.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <Seperator>---</Seperator>
      <EduIntro>My work experience!</EduIntro>
      <Seperator>---</Seperator>
      {experienceBg.map(({ title, desc, from, until}) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="duration">{from} - {until}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const experienceBg = [
  {
    title: "Senior Data Engineer",
    desc: "LeadInfo B.V., Rotterdam, Netherlands",
    from: "August 2025",
    until: "present"
  },
  {
    title: "Software Engineer",
    desc: "Working as a freelancer software engineer, for Research Programs and Companies based in Greece.",
    from: "January 2020",
    until: "July 2025"
  },
  {
    title: "Invited Researcher",
    desc: "University of Toronto, Canada | Jun. 2019 - Dec. 2019",
    from: "July 2019",
    until: "December 2019"
  },
  {
    title: "Intern",
    desc: "Internship at the Institute of Engineering Seismology and Earthquake Engineering, Research and Technical Institute",
    from: "Jun. 2017",
    until: "Sept. 2017"
  }
];

export default Experience;
