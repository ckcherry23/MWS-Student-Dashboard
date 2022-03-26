import React from "react";
import Chapter from "./Chapter.js"
import chapterData from "./chapters.json";
import { useNavigate } from "react-router-dom";

export default function Subject() {
    const getChapters = () => {
        fetch('data/chapters.json');
        console.log()
    }
    const navigate = useNavigate();
    return (
        <div>
            <h2>Science</h2>
            <Chapter />
            <button type="button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}
