import './Main.css'
import useLanguage from "../../hooks/useLanguage";
import SkillCard from "./SkillCard";
import ProjectsList from './projects/ProjectsList';

function Main() {
    const {t} = useLanguage();

    return (
        <main>
            <section id="education">
                <h2>{t('education')}:</h2>
                <div className="education-container">
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
                </div>
            </section>
            <hr />
            <section id="experience">
                <h2>{t('experience')}:</h2>
                <div className='experience-container'>
                    <p><strong>Apprentice Software Developer</strong></p>
                    <p><strong>2018-2020</strong></p>
                    <p><strong>(Digital3rd, Digital Native UK)</strong></p>
                </div>
                <div className='experience-container'>
                    <p><strong>Junior Software Developer</strong></p>
                    <p><strong>2020-2023</strong></p>
                    <p><strong>(Civico Limited)</strong></p>
                </div>
            </section>
            <hr />
            <section id="skills">
                <h2>{t('skills')}:</h2>
                <div className='skills-container'>
                    <SkillCard name={'HTML'} logo={'images/html.svg'}/>
                    <SkillCard name={'CSS'} logo={'images/css.svg'}/>
                    <SkillCard name={'SASS'} logo={'images/sass.svg'}/>
                    <SkillCard name={'JavaScript'} logo={'images/js.svg'}/>
                    <SkillCard name={'React'} logo={'images/react.svg'}/>
                    <SkillCard name={'TypeScript'} logo={'images/ts.svg'}/>
                    <SkillCard name={'npm'} logo={'images/npm.svg'}/>
                    <SkillCard name={'Git'} logo={'images/git.svg'}/>
                    <SkillCard name={'GitHub'} logo={'images/github.svg'}/>
                </div>
            </section>
            <hr />
            
            <section id="projects">
                <h2>{t('projects')}:</h2>
                <ProjectsList/>
            </section>
        </main>
    );
}

export default Main;