// /app/api/register/route.js

import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export async function POST(request) {
  try {
    const { name, email, password, username } = await request.json();

    if (!name || !email || !password || !username) {
      return new Response(
        JSON.stringify({ message: "Semua field harus diisi." }),
        { status: 400 }
      );
    }

    // Buat akun pengguna baru di Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update nama pengguna di profil Firebase
    await updateProfile(userCredential.user, { displayName: name });

    return new Response(JSON.stringify({ message: "Registrasi berhasil!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
