import './Content.css'
import Main from './Main';
import Sidebar from './Sidebar';

function Content() {
    return (
        <div className='content-container'>
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default Content;