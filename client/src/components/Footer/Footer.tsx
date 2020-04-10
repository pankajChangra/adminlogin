import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
        <div className="fluid">
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}  made with love for a better web
          </p>
        </div>
      </footer>
  )
}