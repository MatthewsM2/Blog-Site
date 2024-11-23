import './App.css'
// import Login from './login'

function App() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
        <div className="contact-info">
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Website: www.johndoe.com</p>
          <p>Location: New York, USA</p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        <p>
          Experienced Full Stack Developer with a passion for building dynamic, user-friendly websites and applications. 
          Expertise in JavaScript, React, Node.js, and database management. Adept at working in agile environments and committed 
          to continuous learning.
        </p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>Full Stack Developer</h3>
          <p>XYZ Tech Solutions - New York, NY</p>
          <p>January 2020 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
            <li>Collaborated with design and product teams to build responsive user interfaces</li>
            <li>Optimized website performance and ensured scalability for high traffic</li>
          </ul>
        </div>
        
        <div className="experience">
          <h3>Junior Web Developer</h3>
          <p>ABC Web Services - New York, NY</p>
          <p>June 2018 - December 2019</p>
          <ul>
            <li>Assisted in front-end development using HTML, CSS, and JavaScript</li>
            <li>Worked on back-end features with Node.js and Express</li>
            <li>Performed code reviews and implemented best practices</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>University of New York - Graduated 2018</p>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <ul>
          <li>Languages: JavaScript, HTML, CSS, SQL</li>
          <li>Frameworks: React, Node.js, Express</li>
          <li>Tools: Git, Docker, Webpack, Nginx</li>
          <li>Databases: MongoDB, PostgreSQL</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Certifications</h2>
        <p>Certified React Developer - 2021</p>
        <p>Certified Full Stack Web Developer - 2020</p>
      </section>
    </div>
  );
}
export default App


// import React from 'react';
// import './CV.css';  // Add this file for custom styling

// const CV = () => {
//   return (
//     <div className="cv-container">
//       <header className="cv-header">
//         <h1>John Doe</h1>
//         <p>Full Stack Developer</p>
//         <div className="contact-info">
//           <p>Email: john.doe@example.com</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Website: www.johndoe.com</p>
//           <p>Location: New York, USA</p>
//         </div>
//       </header>

//       <section className="cv-section">
//         <h2>Summary</h2>
//         <p>
//           Experienced Full Stack Developer with a passion for building dynamic, user-friendly websites and applications. 
//           Expertise in JavaScript, React, Node.js, and database management. Adept at working in agile environments and committed 
//           to continuous learning.
//         </p>
//       </section>

//       <section className="cv-section">
//         <h2>Experience</h2>
//         <div className="experience">
//           <h3>Full Stack Developer</h3>
//           <p>XYZ Tech Solutions - New York, NY</p>
//           <p>January 2020 - Present</p>
//           <ul>
//             <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
//             <li>Collaborated with design and product teams to build responsive user interfaces</li>
//             <li>Optimized website performance and ensured scalability for high traffic</li>
//           </ul>
//         </div>
        
//         <div className="experience">
//           <h3>Junior Web Developer</h3>
//           <p>ABC Web Services - New York, NY</p>
//           <p>June 2018 - December 2019</p>
//           <ul>
//             <li>Assisted in front-end development using HTML, CSS, and JavaScript</li>
//             <li>Worked on back-end features with Node.js and Express</li>
//             <li>Performed code reviews and implemented best practices</li>
//           </ul>
//         </div>
//       </section>

//       <section className="cv-section">
//         <h2>Education</h2>
//         <p>Bachelor of Science in Computer Science</p>
//         <p>University of New York - Graduated 2018</p>
//       </section>

//       <section className="cv-section">
//         <h2>Skills</h2>
//         <ul>
//           <li>Languages: JavaScript, HTML, CSS, SQL</li>
//           <li>Frameworks: React, Node.js, Express</li>
//           <li>Tools: Git, Docker, Webpack, Nginx</li>
//           <li>Databases: MongoDB, PostgreSQL</li>
//         </ul>
//       </section>

//       <section className="cv-section">
//         <h2>Certifications</h2>
//         <p>Certified React Developer - 2021</p>
//         <p>Certified Full Stack Web Developer - 2020</p>
//       </section>
//     </div>
//   );
// };

// export default CV;

