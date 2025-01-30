// middleware.js
import { NextResponse } from "next/server";
import { verifyIdToken } from "./firebase"; // Fungsi untuk memverifikasi token Firebase

export async function middleware(req) {
  const token = req.cookies.get("auth_token"); // Ambil token dari cookie

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Arahkan ke halaman login jika tidak ada token
  }

  // Verifikasi token Firebase
  const user = await verifyIdToken(token);
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Lanjutkan jika pengguna terautentikasi
}
