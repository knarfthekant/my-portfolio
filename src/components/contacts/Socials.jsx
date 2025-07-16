import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Socials = () => {
    return (
        <>
            <h5 className="text-sky-200">Let's get in touch.</h5>
            <div className="justify-center flex flex-row gap-2 mt-2 text-sky-200">
                {/* _blank open in new page, noreferer disable referer header*/}
                <a href="https://linkedin.com/in/frank-shan-b9641a1b7" 
                    target="_blank" rel="noreferrer"><BsLinkedin size={60}/></a>
                <a href="https://github.com/knarfthekant" 
                    target="_blank" rel="noreferrer"><BsGithub size={60}/></a>
            </div>
        </>
    )
};

export default Socials;