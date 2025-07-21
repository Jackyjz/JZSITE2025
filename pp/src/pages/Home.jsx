import About from './About';
import Contact from './Contact';
import selfie from '../assets/selfie.jpg'; // 👈 make sure the path is correct

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 text-center px-6"
            >
                <img
                    src={selfie}
                    alt="Jacky Zhao selfie"
                    className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg object-cover animate-fade-in mb-6"
                />
                <h1 className="text-5xl font-bold text-blue-600 mb-2">
                    Hi, I'm Jacky Zhao <span className="animate-waving-hand inline-block">👋</span>
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                    ECE Student at the University of Toronto
                </p>
                <p className="max-w-xl text-gray-600 text-lg">
                    I'm passionate about building engaging user experiences, solving engineering problems,
                    and exploring the intersection of hardware and software. Welcome to my personal site!
                </p>
            </section>



            <About />
            <Contact />
        </>
    );
};

export default Home;
