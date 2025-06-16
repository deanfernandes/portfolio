import { type FC } from "react"
import './ProjectCard.css'

type ProjectCardProps = {
    title: string,
    desc: string,
    images: string[],
    srcCodeLink: string,
}

const ProjectCard: FC<ProjectCardProps> = ({title, desc, images, srcCodeLink}) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p><em>{desc}</em></p>
            <a href={srcCodeLink} target="_blank"><img src={images[0]} alt="screenshot"/></a>
        </div>
    );
}

export default ProjectCard;