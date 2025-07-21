import React, { useState, useEffect } from 'react';
import '../components/pdfWorker'; // must set pdfjs.GlobalWorkerOptions inside
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(800); // default width

    // Responsive page width
    useEffect(() => {
        function updateWidth() {
            const w = window.innerWidth - 64; // 32px padding left + right
            setPageWidth(Math.min(w, 800));   // max width cap
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const resumeFile = `${import.meta.env.BASE_URL}Jacky_Zhao_resume.pdf`;

    return (
        <section className="pt-20 min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-6">            <div className="max-w-5xl mx-auto flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Jacky Zhao – Resume</h1>
            <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                View Full PDF
            </a>
        </div>

            <Document
                file={resumeFile}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(err) => console.error('PDF load error:', err)}
            >
                {Array.from({ length: numPages || 0 }, (_, i) => (
                    <div key={i} className="flex justify-center">
                        <div
                            className="bg-black rounded-lg shadow-xl p-1.5 mb-8"
                            style={{ width: pageWidth + 32 }} // padding (p-4 = 16px x 2)
                        >
                            <Page
                                pageNumber={i + 1}
                                width={pageWidth}
                                renderAnnotationLayer
                                renderTextLayer
                            />
                        </div>
                    </div>
                ))}
            </Document>
        </section>
    );
}
