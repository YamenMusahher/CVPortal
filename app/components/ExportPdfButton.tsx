import { jsPDF } from 'jspdf';

const ExportPdfButton = ({ cvData }: { cvData: any }) => {
  const exportToPdf = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${cvData.personalInfo.name}`, 10, 10);
    doc.text(`Email: ${cvData.personalInfo.email}`, 10, 20);
    doc.save('CV.pdf');
  };

  return (
    <button onClick={exportToPdf} className="bg-primary text-white py-2 px-4 rounded">
      Export to PDF
    </button>
  );
};

export default ExportPdfButton;
