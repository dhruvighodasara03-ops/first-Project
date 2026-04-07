const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          We are passionate developers building modern and user-friendly web
          applications using React and the latest technologies.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            🚀 Our goal is to create fast, responsive, and scalable web
            applications that provide a great user experience.
          </p>

          <p>
            💻 We specialize in frontend development using React, Tailwind CSS,
            and modern JavaScript tools.
          </p>

          <p>
            🎯 This project demonstrates routing, component structure, and clean
            UI design using React Router.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
