import React, { useMemo, useState } from "react";
import { User } from "lucide-react";
import tastiImage from "./project_images/tasti.png";
import pwebimage from "./project_images/pweb.png";
import marioimage from "./project_images/mario.png";
import sae from "./project_images/sae.png";
import dbot from "./project_images/dbot.png";
import soccerdemo from "./project_images/soccermodel.png";
import connectfour from "./project_images/connectfour.png";
import hack from "./project_images/hack.png";

const projects = [
    {
        title: "MakeUoft 2026 Hackthon - Safety Beacon",
        description:
            "SafetyBeacon reads heart rate + motion + temperature/humidity on an ESP32, detects risky events (impact / abnormal HR / overheating), switches to WARNING, beeps until acknowledged, and sends compact JSON over BLE to an Android app. In WARNING it also includes GPS info (satellites + lat/lon) when available, and the Android app displays real-time status and data while giving feedback to the user to make decisions.",
        features: [
            "ESP32 (Main Controller) + MAX30100 speaker (Power amplified speaker) + MPU6050 (Motion Sensor) + DHT11 (Temp & Humidity Sensor) + DFR1103(GPS)",
            "ESP32 Programming: state machine (NORMAL/WARNING), sensor sampling, threshold logic, snapshot + GPS polling, BLE notify JSON",
            "Android (Kotlin + Jetpack Compose): BLE scan/connect/subscribe, parse JSON, display live cards + raw JSON debug window",
        ],
        tech: [
            "ESP32",
            "Sensors",
            "BLE",
            "C++",
            "I2C",
            "I2S",
            "Kotlin",
            "Android Studio",
        ],
        teamSize: "3",
        duration: "24hrs",
        image: hack,
        github: "https://github.com/Jackyjz/2026MakethonTeam294c4",
        demo: "https://youtu.be/zDJP2vL_iGA",
        types: ["Embedded", "Software"],
    },
    {
        title: "Soccer Penalty Predication Web App",
        description:
            "A deep learning pipeline that predicts soccer penalty kick outcomes. Using YOLOv11 for player and ball detection and a CNN-LSTM model for temporal analysis, the system classifies shot direction (left, center, right) and outcome (goal or miss).",
        features: [
            "Engineered a multi - staged model (YOLOv11 + ResNet-18 + LSTM pipeline) that predicted penalty outcomes (6 classes) with ~61% accuracy on unseen soccer penalty footage, proving feasibility without explicit ball tracking.",
            "Collected and preprocessed soccer video datasets, enabling robust object detection of players and ball in challenging sports footage where datasets are scarce.",
            "Deployed the trained model as a Streamlit web app, allowing real-time interactive demonstrations for coaches, analysts, and classmates",
        ],
        tech: [
            "Python",
            "PyTorch",
            "YOLOv11",
            "OpenCV",
            "Roboflow",
            "Streamlit",
            "Google Colab",
            "Confusion Matrix Evaluation",
            "Video Frame Preprocessing"
        ],
        teamSize: "4",
        duration: "4 months",
        image: soccerdemo,
        github: "https://github.com/Jackyjz/APS360_Project",
        demo: "/JZSITE2025/video/360demo.mp4",
        types: ["Software", "ML"],
    },
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
        teamSize: "3",
        duration: "4 months",
        image: tastiImage,
        demo: "/JZSITE2025/video/ece297demo.mp4",
        types: ["Software"],
    },
    {
        title: "Shooting, Mario!",
        description:
            "Developed a custom retro platformer in C, running on the Nios II processor and displayed via VGA on an FPGA board.",
        features: [
            "Designed game logic and player-object interactions using custom finite state machines (FSMs)",
            "Rendered real-time VGA graphics (sprites, bullets, collisions) via memory-mapped video output",
            "Implemented efficient bullet mechanics with background-preserving erasure logic",
            "Player Interaction via PS2 keyboard input",
            "Implemented real-time game audio on the DE1-SoC by configuring the audio codec and writing C drivers to generate and play sound effects triggered by player inputs.",
            "Deployed on Altera DE1-SoC FPGA using hardware/software interfacing"
        ],
        tech: ["NIOS V", "Embedded C", "Memory-mapped I/O", "VGA signal control Places API", "PS2", "Git"],
        image: marioimage,
        github: "https://github.com/Jackyjz/ECE243_Shooting_game_Project",
        teamSize: "2",
        duration: "2 months",
        // demo: "https://jackyjz.github.io/JZSITE2025/",
        types: ["Hardware", "Embedded"],
    },
    {
        title: "Electrical Team member, SAE Aero Design Team, UAS, University of Toronto Aerospace Team (UTAT)",
        description:
            "Focusing on Sensor and computer integration, Motor testing and motor-propeller matching, Circuit design and integration.",
        features: [
            "Won the 5th place Overall in 2024, 2025 SAE Aero Design West competition (Advanced Class).",
            "Won the 1st place design report award at the 2024, 2025 SAE Aero Design West competition.",
            "Optimized flight system of the UT-24 Minerva and PADA planes. Working with electrical components such as receivers, servo motors, Electronic Speed Controller (ESC), Battery Eliminator Circuit (BEC), GPS, avionics battery, etc.",
            "Paticipated in UT-25 Stratus Pixhawk PCB design (schematic stages) with heavily focusing on servo control.",
        ],
        tech: ["Altium", "Pixhawk", "QGroundControl", "Circuit", "RC Receiver", "KiCad", "UART", "PWM",],
        image: sae,
        teamSize: "6",
        duration: "2 years",
        types: ["Hardware"],
    },
    {
        title: "Connect4 on FPGA",
        description:
            "Designed and implemented a hardware version of the Connect-4 game using Verilog (VHDL), integrating keyboard input, real-time VGA rendering, and rule-based game logic.",
        features: [
            "Built and deployed on the Altera DE1-SoC FPGA board with external VGA monitor and PS/2 keyboard.",
            "Controlled game flow including piece movement, dropping, win detection, and turn alternation with Finite State Machine (FSM).",
            "Rendered a dynamic 7x6 Connect-4 board and updated in real time as players made moves with VGA signal pipeline.",
            "Designed Verilog modules to manage board state, enforce turn-taking, check for win/draw conditions, and reset the board.",
            "Verified design using DESim simulation and Quartus synthesis to ensure correctness before hardware deployment.",

        ],
        tech: ["Altera DE1-SoC FPGA", "Verilog", "Quartus Prime", "DESim", "Memory-mapped I/O", "FSM", "VGA signal control", "Git"],
        image: connectfour,
        github: "https://github.com/AlexGuo43/Connect4",
        teamSize: "2",
        duration: "2 months",
        // demo: "https://jackyjz.github.io/JZSITE2025/",
        types: ["Hardware", "Embedded"],
        demo: "https://youtu.be/0-wT1ND7T94?si=pzN3pM-h1FtUTOaL"
    },
    {
        title: "Website Backend Researcher",
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
        types: ["Software"],
    },
];
const containProjects = ["Website Backend Aid", "Soccer Penalty Predication Web App"];

const Projects = () => {
    const [activeType, setActiveType] = useState("All");

    // Collect unique types across all projects
    const typeOptions = ["All", "Hardware", "Software", "ML", "Embedded"];

    const shown = useMemo(() => {
        if (activeType === "All") return projects;
        return projects.filter((p) => (p.types || []).includes(activeType));
    }, [activeType]);
    return (
        <section className="min-h-screen bg-blue-50 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">My Projects</h2>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    {typeOptions.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveType(t)}
                            className={`px-4 py-2 rounded-xl border transition text-sm
                ${activeType === t
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {shown.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-64 md:h-72 bg-white ${containProjects.includes(project.title) ? "object-contain" : "object-cover"
                                    }`}
                            />

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {(project.types || []).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-200"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-blue-700 mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-3">{project.description}</p>

                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
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
