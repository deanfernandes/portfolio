import { type FC } from "react"
import './TechCard.css';

type TechCardProps = {
    name: string,
    logo: string,
}

const TechCard: FC<TechCardProps> = ({name, logo}) => {
    return (
        <div className="tech-card">
            <img src={logo} alt="logo" className="logo" />
            <p className='name'>{name}</p>
        </div>
    );
}

export default TechCard;