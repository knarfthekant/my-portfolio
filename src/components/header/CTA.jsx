import CV from '../../assets/Frank_Shan_Resume.pdf';

const CTA = () => {
    return (
        <div className="mt-4">
            <a href={CV} className="cv" download>
                Download CV</a>
        </div>
    )
}

export default CTA;
