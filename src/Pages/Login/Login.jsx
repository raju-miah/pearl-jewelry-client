import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Don&apos;t have an account? </span>
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register here
          </Link>
        </div>

        <div className="mt-4 text-center">
          <span>Or log in with</span>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          >
            Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default Login;