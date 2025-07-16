import './projectpage.css'

const ProjectsPage = () => {
    const colorClasses = [
    'text-white/100',
    'text-white/80',
    'text-white/60',
    'text-white/40',
    'text-white/20',
    'text-white/10',
    ];
    return (
        <div className="text-center mt-32 space-y-4">
            {colorClasses.map((cls, i) => (
            <h1
                key={i}
                className={`fade-down delay-${i} ${cls} text-4xl font-semibold`}
            >
                Under Development
            </h1>
            ))}
        </div>
    );
};
export default ProjectsPage;