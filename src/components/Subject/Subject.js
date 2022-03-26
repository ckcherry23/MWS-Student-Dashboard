import React from "react";
import Chapter from "./Chapter.js";
import chapterData from "./chapters.json";
import { useNavigate } from "react-router-dom";

export default function Subject() {
    const chapters = JSON.parse(JSON.stringify(chapterData));

    const navigate = useNavigate();
    return (
        <div>
            <h2>Science</h2>
            {chapters.map((chapter) => <Chapter title={chapter.title} section={chapter.section} />)}
            <button type="button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}
