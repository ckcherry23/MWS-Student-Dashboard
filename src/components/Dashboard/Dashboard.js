import React from "react";
import { useNavigate } from "react-router-dom";
// import Subject from "../Subject/Subject.js";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Welcome!</h2>
            <button type="button" onClick={() => navigate("/subject")}>
                Science
            </button>
        </div>
    );
}
