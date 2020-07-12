import React from "react";

export const Footer = () => (
    <footer className="text-muted color">
        <div className="container">
            <div className="footer-copyright text-center py-3 text-color">
                {new Date().toDateString()} {new Date().toTimeString()}&nbsp;Все
                прова защещены.&nbsp;&reg;&nbsp;Copyright&nbsp;&copy;&nbsp;
            </div>
        </div>
    </footer>
)