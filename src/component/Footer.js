import React from "react";

export const Footer = () => (
    <footer className="text-muted color">
        <div className="container">
            <div className="footer-copyright text-center py-3 text-color">
                &copy;&nbsp;{new Date().getFullYear().toString()}
            </div>
        </div>
    </footer>
)
