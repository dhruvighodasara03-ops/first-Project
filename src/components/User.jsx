import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Hello, {params.username} 👋
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to your profile page. This is a dynamic route using React
          Router.
        </p>
      </div>
    </div>
  );
};

export default User;
