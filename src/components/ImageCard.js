// The standard card for rendering data
// from the API

import {useState} from 'react';
import saveToStorage from '../util/saveToStorage';

export default function ImageCard(props){
    const {imageData, isLiked} = props;
    const [state, setState] = useState(isLiked);

    const handleClick = e => {
        e.preventDefault();
        saveToStorage(imageData.date, !state)
        setState(!state)
    }


    return(
        <section className={`imageCard ${(state) ? "liked" : ""}`}>
            <h1>{imageData.title}</h1>
            <p>{imageData.date}</p>
            {(imageData.media_type === "image") ? <img src={imageData.hdurl} alt={imageData.explanation} /> :
            <iframe src={imageData.url} title="video title">
            </iframe>
        }
            <button onClick={handleClick}>{(!state) ? "🚀" : "❤️"}</button>
        </section>
    )
}