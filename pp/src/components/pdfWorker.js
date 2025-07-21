import { pdfjs } from 'react-pdf';

// Serve the worker you just copied into public/
pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;