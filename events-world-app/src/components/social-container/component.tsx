import React from 'react'
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export const SocialContainer = () => {
    return (
        <div className="social-container">
            <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
            </a>
        </div>
    );
};
