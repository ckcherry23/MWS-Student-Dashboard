import React from "react";
import { Component } from "react";
import Chapter from "./Chapter.js";
import './Subject.css';
import { ArrowBackIos } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import axios from 'axios';

export default class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapters: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/chapters/')
            .then(response => {
                this.setState({ chapters: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    chaptersList() {
        return this.state.chapters.map(currentChapter => {
            return <Chapter chapter={currentChapter} key={currentChapter._id} />;
        }).sort((a, b) => a.props.chapter.index - b.props.chapter.index);
    }

    render() {
        const { navigate } = this.props;
        console.log(this.props.navigate);
        return (
            <div>
                <div className="subject">
                    Science
                </div>
                <button className="back" type="button" onClick={() => navigate(-1)}>
                    <SvgIcon component={ArrowBackIos} />
                    Back
                </button>
                <div className="grid">
                    {this.chaptersList()}
                </div>
            </div>
        );
    }
}
