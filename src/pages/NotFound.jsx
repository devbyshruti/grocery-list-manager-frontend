import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center px-4">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="mt-4 text-lg text-slate-600">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;