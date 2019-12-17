import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Link to="/use-event">UseEvent</Link>
      <Link to="/use-getlocation">UseGeolocation</Link>
      <Link to="/use-intersection">UseIntersection</Link>
    </>
  );
}
