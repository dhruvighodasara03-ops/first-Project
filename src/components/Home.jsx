const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website 👋
        </h1>

        <p className="text-gray-600 mb-6">
          This is the home page of your React application. You can navigate
          through different pages using the navbar above.
        </p>
      </div>
    </div>
  );
};

export default Home;
