import React, { useState } from "react";
// import { Google } from "lucide-react";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log("Signup submitted", { name, email, password, agreedToTerms });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Signup Form Section */}
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6">Get Started Now</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mr-2 rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the Terms & Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={!agreedToTerms}
            >
              Signup
            </button>
          </form>

          <div className="mt-4 text-center">
            <div className="flex items-center justify-center my-4">
              <div className="border-t w-1/3"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="border-t w-1/3"></div>
            </div>

            <button className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-50 transition duration-300">
              {/* <Google className="mr-2" /> */}
              Sign in with Google
            </button>
          </div>

          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
