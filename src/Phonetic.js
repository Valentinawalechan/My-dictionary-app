import React from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import "./Phonetic.css";

export default function Phonetic (props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <AiFillPlayCircle />
            </a>
            {props.phonetic.text}
        </div>
    )
}