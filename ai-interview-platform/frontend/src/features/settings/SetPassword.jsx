import React, { useState } from "react";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Password validation
  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid =
    passwordRequirements.length &&
    passwordRequirements.uppercase &&
    passwordRequirements.number &&
    passwordRequirements.special;

 const handleSubmit = (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  // Empty password
  if (!password) {
    setError("Please enter a password.");
    return;
  }

  // Invalid password requirements
  if (!isPasswordValid) {
    setError(
      "Password must be at least 8 characters and include an uppercase letter, number, and special character."
    );
    return;
  }

  // Empty confirm password
  if (!confirmPassword) {
    setError("Please confirm your password.");
    return;
  }

  // Password mismatch
  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  // Everything is valid
  console.log("Password:", password);

  setSuccess("Password has been set successfully.");

  // Clear form
  setPassword("");
  setConfirmPassword("");
};

  return (
    <div className="bg-white border border-green-100 rounded-2xl shadow-sm p-7">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <rect
              x="3"
              y="11"
              width="18"
              height="10"
              rx="2"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 11V7a5 5 0 0110 0v4"
            />
          </svg>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Set Password
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Set your password to secure your account.
          </p>
        </div>

      </div>

      {/* One-time password information */}
      <div className="flex gap-3 p-4 mb-6 rounded-xl border border-green-200 bg-green-50">

        <div className="text-green-600 mt-0.5">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01"
            />
          </svg>
        </div>

        <div>
          <p className="text-sm font-semibold text-green-700">
            Password can be set only once.
          </p>

          <p className="text-sm text-green-700/80 mt-1">
            Choose a strong password and keep it safe. You will not be
            able to change it again.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        {/* New Password */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-100
                         focus:border-green-500 text-sm"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-gray-400 hover:text-gray-600"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>

          </div>

          <p className="text-xs text-gray-400 mt-2">
            Password must be at least 8 characters and include
            uppercase, number and special character.
          </p>

        </div>

        {/* Confirm Password */}
        <div className="mb-6">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-green-100
                         focus:border-green-500 text-sm"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? "👁️" : "🙈"}
            </button>

          </div>

        </div>

        {/* Password Requirements */}
        <div className="p-5 rounded-xl bg-green-50/70 border border-green-100 mb-6">

          <h3 className="text-sm font-semibold text-green-700 mb-4">
            Password Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <Requirement
              valid={passwordRequirements.length}
              text="At least 8 characters"
            />

            <Requirement
              valid={passwordRequirements.number}
              text="At least one number"
            />

            <Requirement
              valid={passwordRequirements.uppercase}
              text="At least one uppercase letter"
            />

            <Requirement
              valid={passwordRequirements.special}
              text="At least one special character"
            />

          </div>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mb-5 p-3 rounded-xl bg-green-50 border border-green-200 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* Warning + Button */}
        <div className="flex items-center justify-between gap-5 p-4 rounded-xl border border-orange-100 bg-orange-50/50">

          <div className="flex gap-3">

            <div className="text-orange-500 mt-0.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M10.3 3.5l-8 14A1 1 0 003.2 19h17.6a1 1 0 00.9-1.5l-8-14a1 1 0 00-1.7 0z"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">
                Important
              </p>

              <p className="text-xs text-gray-500 mt-1">
                You will not be able to change your password again.
              </p>
            </div>

          </div>

          <button
  type="submit"
  className="flex-shrink-0 px-5 py-3 rounded-xl
             bg-green-600 text-white text-sm font-semibold
             hover:bg-green-700
             transition-all"
>
  Set Password
</button>

        </div>

      </form>

    </div>
  );
}


/* Password requirement component */

function Requirement({ valid, text }) {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full text-xs
          ${
            valid
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-400"
          }`}
      >
        {valid ? "✓" : "•"}
      </span>

      <span
        className={`text-sm ${
          valid ? "text-green-700" : "text-gray-500"
        }`}
      >
        {text}
      </span>

    </div>
  );
}