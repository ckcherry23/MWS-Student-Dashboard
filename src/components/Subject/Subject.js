import React from "react";
import Chapter from "./Chapter.js";
import chapterData from "./chapters.json";
import { useNavigate } from "react-router-dom";
import './Subject.css';

export default function Subject() {
    const chapters = JSON.parse(JSON.stringify(chapterData)).sort((a,b)=> a.index-b.index);

    const navigate = useNavigate();
    return (
        <div>
            <h2>Science</h2>
            <button className="back" type="button" onClick={() => navigate(-1)}>
                Back
            </button>
            <div className="grid">
            {chapters.map((chapter) => <div className="grid-item"><Chapter title={chapter.title}
                section={chapter.section}
                image={chapter.image} /></div>)}
            </div>
        </div>
    );
}
