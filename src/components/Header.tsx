import './Header.css'

function Header() {
    return (
        <header>
            <h1 className="typing" id="name">Dean Fernandes</h1>
            <h2 className="typing"id="job-title">Software Developer</h2>
            <img src="images/avatar.png" alt="profile picture" className='profile-pic'/>
        </header>
    );
}

export default Header;