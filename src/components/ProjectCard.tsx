import { type FC, useState, useEffect, useRef } from "react"
import './ProjectCard.css'

type ProjectCardProps = {
    title: string,
    desc: string,
    images: string[],
    srcCodeLink: string,
}

const ProjectCard: FC<ProjectCardProps> = ({title, desc, images, srcCodeLink}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalId = useRef<number>(0);
    useEffect(()=> {
        const intervalId = window.setInterval(()=>{
            setCurrentIndex((prev)=> {
                return images.length % (prev + 1);
            });
        }, 1000)

        return window.clearInterval(intervalId);
    }, [images]);

    const handleMouseEnter = () => {
        intervalId.current = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 1000);
    }

    const handleMouseLeave = () => {
        window.clearInterval(intervalId.current);
    }

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p><em>{desc}</em></p>
            <img src={images[currentIndex]} alt="screenshot" className="screenshot" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            <a href={srcCodeLink} target="_blank"><img src="images/github.svg" alt="github logo" className="github-logo"/>GitHub</a>
        </div>
    );
}

export default ProjectCard;