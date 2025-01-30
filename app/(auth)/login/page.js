// app/login/page.js
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Melakukan login dengan Firebase
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Ambil ID token dari Firebase untuk autentikasi
      const idToken = await user.getIdToken();

      // Simpan token di cookies menggunakan cookies-next
      setCookie("auth_token", idToken);

      // Redirect ke halaman dashboard setelah login berhasil
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed: " + err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
