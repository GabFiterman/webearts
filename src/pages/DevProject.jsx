import { useParams } from "react-router-dom"
import portfolioData from "../data/portfolio-dev.json";

export default function DevProject() {
    const { id } = useParams();
    const project = portfolioData.find((project) => project.id === parseInt(id));

    return (
        <h1>{project.projectName}</h1>
    )
}