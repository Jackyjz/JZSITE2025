import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* ✅ About Section */}
            <section id="about" className="min-h-screen bg-gray-100 p-10 text-center pt-20">
                <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    I'm currently an Electrical & Computer Engineering student at U of T. I love learning about technology, building projects, and exploring the intersection of hardware and software.
                </p>
            </section>
        </>
    );
};

export default About;
