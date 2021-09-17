// The standard card for rendering data
// from the API

export default function ImageCard(props){
    const {imageData} = props;
    return(
        <section className="imageCard">
            <h1>{imageData.title}</h1>
            <p>{imageData.date}</p>
            {(imageData.media_type === "image") ? <img src={imageData.hdurl} alt={imageData.explanation} /> :
            <iframe src={imageData.url} title="video title">

            </iframe>
        }
        </section>
    )
}