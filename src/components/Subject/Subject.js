import React from "react";
import Chapter from "./Chapter.js";
import chapterData from "./chapters.json";
import { useNavigate } from "react-router-dom";
import './Subject.css';
import { ArrowBackIos } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export default function Subject() {
    const chapters = JSON.parse(JSON.stringify(chapterData)).sort((a,b)=> a.index-b.index);

    const navigate = useNavigate();
    return (
        <div>
            <div className="subject">
                Science
            </div>
            <button className="back" type="button" onClick={() => navigate(-1)}>
                <SvgIcon component={ArrowBackIos}/>
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
