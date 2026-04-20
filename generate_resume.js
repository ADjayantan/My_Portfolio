import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

const outputDir = 'public';
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({ margin: 50 });
const stream = fs.createWriteStream(path.join(outputDir, 'Jayantan_AD_Resume.pdf'));

doc.pipe(stream);

// Header
doc.fontSize(24).font('Helvetica-Bold').text('Jayantan AD', { align: 'left' });
doc.moveDown(0.5);

// Contact Info
doc.fontSize(10).font('Helvetica').text('370, Sanganoor Main Road, Ganapathy, Coimbatore-641006.');
doc.text('Email: adjayantan2007@gmail.com');
doc.text('Phone: 8610852612');
doc.fillColor('blue').text('GitHub: https://github.com/ADjayantan', { link: 'https://github.com/ADjayantan' });
doc.text('LeetCode: https://leetcode.com/u/jayantan/', { link: 'https://leetcode.com/u/jayantan/' });
doc.fillColor('black');
doc.moveDown(1);

// Skills
doc.fontSize(16).font('Helvetica-Bold').text('Skills');
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica-Bold').text('Programming Languages:');
doc.font('Helvetica').text('Java (Core Java), Python (Basic), JavaScript (Fundamentals)');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Web Technologies:');
doc.font('Helvetica').text('HTML5, CSS3, Basic Web Development.');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Programming Concepts:');
doc.font('Helvetica').text('Object-Oriented Programming (OOP) Basics, Data Structures Fundamentals (Arrays, Strings), Problem Solving');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Tools & Technologies:');
doc.font('Helvetica').text('GitHub, Visual Studio Code, IntelliJ IDEA');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Operating Systems:');
doc.font('Helvetica').text('Macintosh, Windows OS');
doc.moveDown(1);

// Career Objective
doc.fontSize(16).font('Helvetica-Bold').text('Career Objective');
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica').text('Computer Science Engineering student seeking a Software/Web Development Internship to apply foundational knowledge in Java, Python, and web technologies while gaining practical development experience and improving problem-solving skills.');
doc.moveDown(1);

// Experience
doc.fontSize(16).font('Helvetica-Bold').text('Experience');
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica').text('Fresher.');
doc.moveDown(1);

// Education
doc.fontSize(16).font('Helvetica-Bold').text('Education');
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica-Bold').text('The VSB College of Engineering Technical Campus');
doc.font('Helvetica').text('B.E Computer Science Engineering');
doc.text('Sept 2024 - May 2028');
doc.moveDown(1);

// Achievements
doc.fontSize(16).font('Helvetica-Bold').text('Achievements / Activities');
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica').list([
  'Actively learning Data Structures and Web Development.',
  'Participated in coding practice and self-learning projects'
]);

doc.end();
console.log('Resume PDF generated successfully at public/Jayantan_AD_Resume.pdf');
