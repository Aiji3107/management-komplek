// components/AppBar.js
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function CustomAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Komplek Mutiara
        </Typography>
        <div className="flex gap-2">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/keuangan"}>Keuangan</Link>
          <Link href={"/penghuni"}>Penghuni</Link>
          <Link href={"/kalender"}>Kalender</Link>
          <Link href={"/pengaduan"}>Pengaduan</Link>
          <Link href={"/pengumuman"}>Pengumuman</Link>
          <Link href={"/laporan"}>Laporan</Link>
          <Link href={"/help"}>Help</Link>
        </div>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
