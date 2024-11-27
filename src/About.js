import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-5">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            {/* Main container with hover effect */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 hover:shadow-2xl transition-transform transform hover:scale-105">
              {/* Professional Profile with hover effect */}
              <h1 className="text-3xl font-bold text-indigo-600 text-center mb-4 hover:text-purple-600 transition-colors">
                Professional Profile
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                Throughout my academic and professional journey, I have engaged in extensive research in electronics.
                I also have practical experience as a full-stack developer, combining technical skills, problem-solving
                abilities, and innovative thinking.
              </p>

              {/* Final Year Research Project section with separate hover effect */}
              <div className="space-y-8 hover:bg-purple-50 transition-colors p-4 rounded-lg">
                <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-4 hover:text-indigo-600 transition-colors">
                  Final Year Research Project
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Designed and integrated a circuit for an IR sensor-based obstacle detection robot. Developed a working prototype
                    on a breadboard to accurately detect obstacles in real-time.
                  </li>
                  <li>
                    Implemented a safe and efficient conversion of 220V AC to 24V DC for the system. Focused on power regulation
                    to ensure the reliability and safety of the robot's operation.
                  </li>
                </ul>
              </div>
              {/* Final Year Research Project section with separate hover effect */}
              <div className="space-y-8 hover:bg-purple-50 transition-colors p-4 rounded-lg">
              <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">
                    Full Stack developer
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, and WordPress.
                      Ensured seamless UI/UX integration with modern design practices.
                    </li>
                    <li>
                      Built robust backend systems using PHP, Laravel, Node.js, and Express.js. Designed and integrated APIs,
                      implemented database solutions with SQL and MongoDB, and maintained codebases using Git.
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
