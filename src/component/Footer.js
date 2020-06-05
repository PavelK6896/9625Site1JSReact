import React from "react";

export const Footer = () => (
    <footer className="text-muted bg-dark">
        <div className="container">
            <div className="footer-copyright text-center py-3">
                Copyright&nbsp;&copy;&nbsp;{new Date().toDateString()}&nbsp;Все
                прова защещены.&nbsp;&reg;&nbsp;
            </div>
        </div>
    </footer>
)