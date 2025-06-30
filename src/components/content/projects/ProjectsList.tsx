import './ProjectsList.css'
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../../hooks/useLanguage";

interface Project {
    id: number,
    title: string,
    desc: string,
    images: string[],
    srcCodeLink: string,
}

function ProjectsList() {
    const {t} = useLanguage();
    const [visibleCount, setVisibleCount] = useState(3);

    const projects: Project[] = [
        {id: 1, title:'MirrorTube', desc:'Chrome extension for mirroring youtube videos', images: ['images/mirrortube1.png', 'images/mirrortube2.png'], srcCodeLink: 'https://github.com/deanfernandes/MirrorTube'},
        {id: 2, title:'Fruitle', desc:'Wordle but fruit 🍓', images: ['images/fruitle1.png'], srcCodeLink: 'https://github.com/deanfernandes/fruitle-v2'},
        {id: 3, title:'Chess.js', desc:'Play online chess against another local user', images: ['images/chessjs1.png'], srcCodeLink: 'https://github.com/deanfernandes/Chess.js'},
        {id: 4, title:'Stopwatch', desc:'Google-style stopwatch npm package', images: ['images/stopwatch1.gif'], srcCodeLink: 'https://github.com/deanfernandes/stopwatch'},
    ];

    const handleLoadMore = () => {
        setVisibleCount(prev=>Math.min(prev+3, projects.length))
    };

    return (
        <div className='projects-container'>
            {projects.slice(0, visibleCount).map((project) => {
                return <ProjectCard key={project.id} title={project.title} desc={project.desc} images={project.images} srcCodeLink={project.srcCodeLink}/>
            })}
            {visibleCount < projects.length && <button onClick={handleLoadMore} className="load-more-btn" title={t('load-more-btn-tooltip')}>{t('load-more-btn')}</button>}
        </div>
    );
}

export default ProjectsList;