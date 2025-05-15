import { useState } from "react";
import { AtSign, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    // Add login logic here
    console.log("Login submitted", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome back!
            </h2>
            <p className="text-gray-600 mb-6">
              Enter your Credentials to access your account
            </p>

            <div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline float-right mt-1"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me for 30 days
                </label>
              </div>

              <div
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-center cursor-pointer"
              >
                Login
              </div>
            </div>

            <div className="my-4 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer">
              <img
                src="/api/placeholder/24/24"
                alt="Google logo"
                className="h-6 w-6 mr-2"
              />
              Sign in with Google
            </div>

            <div className="text-center mt-4 text-sm">
              Don't have an account?
              <a href="/signup" className="text-blue-600 hover:underline ml-1">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
