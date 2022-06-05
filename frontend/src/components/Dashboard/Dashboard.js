import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import science_img from './subjects_icons/Science.png';
import math_img from './subjects_icons/Math.png';
import computers_img from './subjects_icons/Computers.png';
import english_img from './subjects_icons/English.png';
import socsci_img from './subjects_icons/SocialScience.png';
import chinese_img from './subjects_icons/Chinese.png';
import Subject from "../Subject/Subject.js";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Welcome!</h2>

            <div className="grid">
                <div className="grid-item">
                    <img className="subject_icon" src={science_img} alt="Science" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        Science
                    </button>
                </div>
                <div className="grid-item">
                    <img className="subject_icon" src={math_img} alt="Maths" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        Maths
                    </button>
                </div>
                <div className="grid-item">
                    <img className="subject_icon" src={computers_img} alt="Computers" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        Computers
                    </button>
                </div>
                <div className="grid-item">
                    <img className="subject_icon" src={english_img} alt="English" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        English
                    </button>
                </div>
                <div className="grid-item">
                    <img className="subject_icon" src={socsci_img} alt="Social Science" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        Social Science
                    </button>
                </div>
                <div className="grid-item">
                    <img className="subject_icon" src={chinese_img} alt="Chinese" />
                    <button type="button" onClick={() => navigate("/subject")}>
                        Chinese
                    </button>
                </div>
            </div>
        </div>
    );
}
