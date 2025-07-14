import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Socials = () => {
    return (
        <div className="socials">
            {/* _blank open in new page, noreferer disable referer header*/}
            <a href="https://linkedin.com/in/frank-shan-b9641a1b7" 
                target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/knarfthekant" 
                target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
    )
};

export default Socials;