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
        <article className={`imageCard ${(state) ? "liked" : ""}`}>
            {(imageData.media_type === "image") ? <img src={imageData.hdurl} alt={imageData.explanation} title={imageData.explanation} /> :
            <iframe src={imageData.url} title={imageData.title}>
            </iframe>
            }
            <h1>{imageData.title}  ({imageData.date})</h1>
            <p>{imageData.explanation}</p>
            <button onClick={handleClick}>{(!state) ? "🚀" : "❤️"}</button>
        </article>
    )
}