import React from "react";
import { User } from "lucide-react";
import tastiImage from "./project_images/tasti.png";
import pwebimage from "./project_images/pweb.png";
import marioimage from "./project_images/mario.png";
import sae from "./project_images/sae.png";
import dbot from "./project_images/dbot.png";

const projects = [
    {
        title: "Tasti Map",
        description:
            "The map is an interactive city navigation tool that visualizes real-world maps, highlights intersections, and finds optimized driving routes with one-way and turn penalty handling. It also integrates real-time data from the Google Places API to help users find nearby restaurants by cuisine type, rating, and open status, making it easy to discover places to eat directly within the map",
        features: [
            "Calculates fastest routes while handling one-way streets and turn penalties, just like real GPS systems.",
            "Fully navigable interface with clickable intersections, street name search, and intersection highlighting",
            "Dynamically fetches nearby restaurants by cuisine, rating, and open status based on user location",
            "Designed and implemented a responsive and user-friendly graphics interface without using external frameworks",
            "Collaborated across multiple milestones using Git, delivering a robust real-world application from backend to frontend",
        ],
        tech: ["C++", "EZGL", "GTK", "OpenStreetMap", "Google Places API", "A* Search Algorithm", "Greedy Heuristics", "Dijkstra's Algorithm"],
        teamSize: "4",
        duration: "4 months",
        image: tastiImage,
        demo: "https://pickupmap.vercel.app",
    },
    {
        title: "Shooting, Mario!",
        description:
            "Developed a custom retro platformer in C, running on the Nios II processor and displayed via VGA on an FPGA board.",
        features: [
            "Designed game logic and player-object interactions using custom finite state machines (FSMs)",
            "Rendered real-time VGA graphics (sprites, bullets, collisions) via memory-mapped video output",
            "Implemented efficient bullet mechanics with background-preserving erasure logic",
            "Embedded C Programming on the Nios V soft processor",
            "Deployed on Altera DE1-SoC FPGA using hardware/software interfacing"
        ],
        tech: ["NIOS V", "Embedded C", "Memory-mapped I/O", "VGA signal control Places API", "Git-based collaboration"],
        image: marioimage,
        github: "https://github.com/Jackyjz/ECE243_Shooting_game_Project",
        teamSize: "2",
        duration: "2 months",
        // demo: "https://jackyjz.github.io/JZSITE2025/",
    },
    {
        title: "Electrical Team member, SAE Aero Design Team, UAS, University of Toronto Aerospace Team (UTAT)",
        description:
            "Focusing on Sensor and computer integration, Motor testing and motor-propeller matching, Circuit design and integration, ",
        features: [
            "Optimized flight system of the UT-24 Minerva and PADA planes. Working with electrical components such as receivers, servo motors, Electronic Speed Controller (ESC), Battery Eliminator Circuit (BEC), GPS, avionics battery, etc",
            "Paticipated in UT-25 Stratus Pixhawk PCB design (schematic stages) with heavily focusing on servo control.",
        ],
        tech: ["Altium", "Pixhawk", "QGroundControl", "Circuit", "RC Receiver", "KiCad", "UART", "PWM",],
        image: sae,
        teamSize: "6",
        duration: "2 years",
    },
    {
        title: "Website Backend Aid",
        description:
            "Assisted a professor from ECE department in improving a website, designed to aid over 200 students within the ECE faculty at the University of Toronto",
        features: [
            "Utilizing Discord.py to develop web applications and implement Discord Bot for students' communication across class channel",
            "Implementing Discord REST API automating tasks via Discord's API",
            "Utilizing database integration Django ORM for Storing, querying, and managing data efficiently",
            "Handling API Keys and Bot Tokens with Secure Configuration and Token Management.",
            "Utilizing Git command for source code management",
        ],
        tech: ["Python", "discord.py", "Django", "Django ORM", "REST API Integration", "KiCad", "UART", "Git",],
        image: dbot,
        teamSize: "6",
        duration: "3 months",
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen bg-blue-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-100 rounded-t-lg bg-white ${project.title === "Website Backend Aid" ? "object-contain" : "object-cover"
                                    }`}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-blue-700 mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-3">{project.description}</p>
                                <ul className="list-disc list-inside text-gray-600 mb-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-col gap-2 mt-4">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((item, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Team Size */}
                                    <div className="flex items-center text-gray-500 text-sm gap-2">
                                        <span>Team Size:</span>
                                        <div className="flex gap-[2px]">
                                            {Array.from({ length: project.teamSize }).map((_, i) => (
                                                <User key={i} className="w-4 h-4" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <p className=" text-sm text-gray-500">Duration: {project.duration}</p>


                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {/* If project.github exists, render the button. If project.github is undefined or null, render nothing  */}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
