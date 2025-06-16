import { type FC } from "react"
import './SkillCard.css';

type SkillCardProps = {
    name: string,
    logo: string,
}

const SkillCard: FC<SkillCardProps> = ({name, logo}) => {
    return (
        <div className="tech-card">
            <img src={logo} alt="logo" className="logo" />
            <p className='name'>{name}</p>
        </div>
    );
}

export default SkillCard;