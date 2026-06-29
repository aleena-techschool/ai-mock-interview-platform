import { useState } from "react";
import { useNavigate } from "react-router-dom";
import email from "../../assets/email.png";
import eye from "../../assets/eye.png";
import lock from "../../assets/lock.png";
import user from "../../assets/user.png"
import InputField from "../../components/ui/InputField";
import logo from "../../assets/logo.svg";
import { dummyUsers } from "../../mock/authData";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ studentId: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.studentId || !form.email || !form.password) {
            setError("All fields are required.");
            return;
        }
        setLoading(true);
        const user = dummyUsers.find(
            (u) =>
                u.studentId === form.studentId &&
                u.email === form.email &&
                u.password === form.password
        );
        if (user) {
            dispatch(
                setCredentials({
                    user: user,
                    token: "dummy-token"
                })
            );
            navigate("/dashboard")
        } else {
            setError("Invalid credentials. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col justify-center px-14 py-16 bg-white" style={{ width: "45%", clipPath: "polygon(0% 0%, 101% 0%, 100% 100%, 0% 100%)" }}>


            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
                <img src={logo} alt="Offenso Logo" className="w-40 h-13 object-contain" />

            </div>

            <h1 className="text-xl font-semibold text-gray-900 mb-8">
                Sign Into Offenso Tech School
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputField
                    icon={user}
                    placeholder="Student ID"
                    value={form.studentId}
                    onChange={(e) => setForm({ ...form, studentId: e.target.value })}
                />
                <InputField
                    icon={email}
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <InputField
                    icon={lock}
                    eyeIcon={eye}
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                {error && (
                    <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                )}

                <p className="text-xs text-gray-400 text-right cursor-pointer hover:text-green-600 -mt-1">
                    Forgot password?
                </p>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gray-900 text-white rounded-full font-bold text-base
                     hover:bg-gray-700 active:scale-95 transition-all mt-2 disabled:opacity-60"
                >
                    {loading ? "Signing in..." : "Login"}
                </button>
            </form>
        </div>
    );
}