import { useState } from "react";

export default function InputField({ icon, eyeIcon,  type = "text", placeholder, value, onChange }) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === "password";

  return (
    <div
      className="relative flex items-center transition-all"
      style={{
        border: focused ? "1.5px solid #16a34a" : "1.5px solid #e5e7eb",
        borderRadius: "12px",
        background: focused ? "#f0fdf4" : "#ffffff",
        boxShadow: focused ? "0 0 0 3px rgba(22,163,74,0.08)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <span className="absolute left-4 pointer-events-none flex items-center">
        <img src={icon} alt="" className="w-5 h-5 object-contain opacity-50" />
      </span>

      <input
        type={isPassword && show ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-12 bg-transparent pl-11 pr-11 text-sm text-gray-800 outline-none"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 flex items-center"
        >
          <img
            src={eyeIcon}
            alt="toggle password"
            className="w-5 h-5 object-contain opacity-50 hover:opacity-100 transition-opacity"
          />
        </button>
      )}
    </div>
  );
}