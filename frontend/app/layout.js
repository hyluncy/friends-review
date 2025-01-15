import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react-bootstrap'; 
import MainNavbar from "@/components/mainNavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <MainNavbar></MainNavbar>
    </>
  );
}
