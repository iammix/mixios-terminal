import { useContext, useEffect } from "react";
import {
    checkRedirect,
    getCurrentCmdArry,
    isArgInvalid,
} from "../../utils/funcs";
import {
    ProjectContainer,
    ProjectDesc,
    ProjectsIntro,
    ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    const projects = [
        {
            id: 1,
            title: "OpenSeesPy-Substepping-Methods",
            desc: "Developed sub-stepping methods for load and displacement control analyses in OpenSeesPy, enhancing the analysis capabilities for large systems.",
            url: "https://github.com/iammix/OpenSeesPy-Substepping-Methods",
        },

        {
            id: 2,
            title: "Project-Management",
            desc: "Developed a project management platform to streamline and organize project workflows effectively.",
            url: "https://github.com/iammix/Project-Management",
        },
        {
            id: 3,
            title: "biaxialPy",
            desc: "Implemented a tool for biaxial load analysis of concrete sections, facilitating structural analysis under complex loading conditions.",
            url: "https://github.com/iammix/biaxialPy",
        },
        {
            id: 4,
            title: "mixios-terminal",
            desc: "Created a terminal-style portfolio website using React and TypeScript, showcasing personal projects and skills in an interactive manner.",
            url: "https://github.com/iammix/mixios-terminal",
        },
        {
            id: 5,
            title: "OpenSeesTcl2Py",
            desc: "Developed a converter to transform OpenSeesTcl files into OpenSeesPy files, aiding in the transition between scripting languages for structural analysis.",
            url: "https://github.com/iammix/OpenSeesTcl2Py",
        },
        {
            id: 6,
            title: "XFEM2D",
            desc: "Contributed to the development of a two-dimensional extended finite element method (XFEM) tool for fracture analysis in materials.",
            url: "https://github.com/iammix/XFEM2D",
        },
        {
            id: 7,
            title: "CUDA-Python",
            desc: "Integration of CUDA with Python to leverage GPU acceleration for computational tasks.",
            url: "https://github.com/iammix/CUDA-Python",
        },
        {
            id: 8,
            title: "Modal-Solvers",
            desc: "Developed solvers for modal analysis to determine the natural frequencies and mode shapes of structures.",
            url: "https://github.com/iammix/Modal-Solvers",
        },
        {
            id: 9,
            title: "SBP Project",
            desc: "Developed a comprehensive solution for managing SBP acceleration devices, including synchronization, device communication using TCP, data processing, and data visualization",
            url: "https://github.com/iammix/sbp", // Replace this with the actual URL if it differs.
        },
    ]
    const ids = projects.map(project => project.id.toString());

    /* ===== get current command ===== */
    const currentCommand = getCurrentCmdArry(history);

    /* ===== check current command is redirect ===== */
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "projects")) {
            projects.forEach(({ id, url }) => {
                id === parseInt(arg[1]) && window.open(url, "_blank");
            });
        }
    }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
        isArgInvalid(arg, "go", ids) ? (
            <Usage cmd="projects" />
        ) : null;

    return arg.length > 0 || arg.length > 2 ? (
        checkArg()
    ) : (
        <div data-testid="projects">
            <ProjectsIntro>
                A potpourri of personal projects. All projects can be found in my github page!

            </ProjectsIntro>
            {projects.map(({ id, title, desc }) => (
                <ProjectContainer key={id}>
                    <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                </ProjectContainer>
            ))}
            <Usage cmd="projects" marginY />
        </div>
    );
};

export default Projects;
