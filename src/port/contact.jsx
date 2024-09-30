import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./port.css"

const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <h1>CONTACT ME</h1>
                <div className="contact-icon" data-aos="zoom-in" data-aos-duration="1000">
                    <a href="https://www.instagram.com/utkarshawanjari?igsh=MTJjZnNtOTFtd2Q5OA==" className="items-icon">
                        <FaInstagramSquare className="icons"/>
                    </a>
                    <a href="https://www.facebook.com/share/VqP68rKrr4KmsKFP/?mibextid=LQQJ4d" className="items-icon">
                        <FaFacebook className="icons"/>
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsha-wanjari-0204922a8/" className="items-icon">
                        <FaLinkedin className="icons"/>
                    </a>
                    <a href="https://github.com/utkarshawanjari" className="items-icon">
                        <FaGithub className="icons"/>
                    </a>
                    <a href="#" className="items-icon">
                        <FaXTwitter className="icons"/>
                    </a>
                    <a href="utkarshawanjari07@gmail.com" className="items-icon">
                        <MdEmail className="icons"/>
                    </a>
                </div>
            </div>
            <div className="footer">
                    <p>2024 Utkarsha Wanjari. All Rights Reserved.
                        <br />
                        Designed By Utkarsha Wanjari.
                        Developed By React.
                    </p>
            </div>
        </>
    )
}

export default Contact