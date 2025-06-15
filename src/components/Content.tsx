import './Content.css'
import useLanguage from '../hooks/useLanguage';
import TechCard from './TechCard';
import ProjectCard from './ProjectCard';
import ProjectsList from './ProjectsList';

function Content() {
    const {t} = useLanguage();

    return (
        <div className='content'>
            <aside className='sidebar'>
                <nav>
                    <ul>
                        <li><a href="#education">🎓 Education</a></li>
                        <li><a href="#work-xp">💼 Work Experience</a></li>
                        <li><a href="#skills">🛠️ Skills</a></li>
                        <li><a href="#projects">💻 Projects</a></li>
                    </ul>
                </nav>
            </aside>
            <main>
                <section id="education">
                    <h2>{t('education')}:</h2>
                    <ul>
                        <li>GCSE
                            <ul>
                                <li>English</li>
                                <li>Mathematics</li>
                            </ul>
                        </li>
                        <li>A Level
                            <ul>
                                <li>Computing</li>
                                <li>ICT</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <hr />
                <section id="work-xp">
                    <h2>{t('work-experience')}:</h2>
                    <ul>
                        <li>Digital3rd + Digital Native UK (Apprentice Software Developer)</li>
                        <li>Civico Limited (Junior Software Developer)</li>
                    </ul>
                </section>
                <hr />
                <section id="skills">
                    <h2>{t('skills')}:</h2>
                    <div className='tech-stack'>
                        <TechCard name={'HTML'} logo={'images/html.svg'}/>
                        <TechCard name={'CSS'} logo={'images/css.svg'}/>
                        <TechCard name={'SASS'} logo={'images/sass.svg'}/>
                        <TechCard name={'JavaScript'} logo={'images/js.svg'}/>
                        <TechCard name={'React'} logo={'images/react.svg'}/>
                        <TechCard name={'TypeScript'} logo={'images/ts.svg'}/>
                        <TechCard name={'npm'} logo={'images/npm.svg'}/>
                        <TechCard name={'Git'} logo={'images/git.svg'}/>
                        <TechCard name={'GitHub'} logo={'images/github.svg'}/>
                    </div>
                </section>
                <hr />
                <section id="projects">
                    <h2>{t('projects')}:</h2>
                    <ProjectsList/>
                    {/*TODO: tags + filter*/}
                </section>
            </main>
        </div>
    );
}

export default Content;