import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <section id="home" className="h-screen flex flex-col justify-center items-center bg-white">
                <h1 className="text-5xl font-bold text-blue-600">Hi, I'm Jacky 👋</h1>
                <p className="mt-4 text-xl text-gray-700">ECE Student | Aspiring Developer</p>
            </section>

            <About />
            <Contact />
        </>
    );
};

export default Home;