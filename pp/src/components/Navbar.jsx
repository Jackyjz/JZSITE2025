import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Jacky.dev</h1>
                <div className="space-x-4 text-sm sm:text-base">
                    <Link to="/" className="hover:underline text-gray-700">Home</Link>
                    <Link to="/projects" className="hover:underline text-gray-700">Projects</Link>
                    <Link to="/hobbies" className="hover:underline text-gray-700">Hobbies</Link>
                    <Link to="/Resume" className="hover:underline text-gray-700">Resume</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
