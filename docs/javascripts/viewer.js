const pdfUrl = 'figures/iDEC Report Final.pdf';
const pdfContainer = document.getElementById('pdf-container');
const pdfCanvas = document.getElementById('pdf-render');

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
    return pdfDoc.getPage(1); 
}).then(function(page) {
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    pdfCanvas.width = viewport.width;
    pdfCanvas.height = viewport.height;

    const context = pdfCanvas.getContext('2d');
    page.render({
        canvasContext: context,
        viewport: viewport
    });
}).catch(function(error) {
    console.error('Error loading PDF: ' + error);
});
