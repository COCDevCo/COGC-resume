// scripts.js

function downloadPDF() {
    const element = document.body;
    const opt = {
        margin: 0,
        filename: 'Carlo_Orlando_Calvo_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf to generate and save the PDF
    html2pdf().from(element).set(opt).save().catch(error => {
        console.error('Error generating PDF:', error);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
