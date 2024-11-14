function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get form data
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;
    const date = document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.querySelector('input[name="Gender"]:checked').value;

    // Add text to PDF
    doc.text("Sign Up Details", 10, 10);
    doc.text(`First-name: ${first}`, 10, 20);
    doc.text(`Surname: ${second}`, 10, 30);
    doc.text(`Email/Phone: ${mail}`, 10, 40);
    doc.text(`Password: ${pass}`, 10, 50);  
    doc.text(`Date of Birth: ${date}-${month}-${year}`, 10, 60);
    doc.text(`Gender: ${gender}`, 10, 70);

    // Save the PDF
    doc.save("signup_details.pdf");
}
// alert("hello world")