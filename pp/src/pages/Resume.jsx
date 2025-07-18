import React from 'react';

const Resume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}/Jacky_Zhao_resume.pdf`;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-purple-200 p-6">
            <div className="max-w-6xl w-full bg-white rounded-xl shadow-xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Jacky Zhao - Resume</h1>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Open Fullscreen
                    </a>
                </div>

                <iframe
                    src={`https://docs.google.com/gview?url=https://jackyjz.github.io/JZSITE2025/Jacky_Zhao_resume.pdf&embedded=true`}
                    className="w-full h-[90vh] rounded-md border"
                    title="Resume"
                />
            </div>
        </section>
    );
};

export default Resume;
