// A component for storing rendered Image Cards

import ImageCard from './ImageCard';

export default function CardHolder(props){
    const {data} = props;
    const localData = JSON.parse(localStorage.getItem("data"))

    return(
        <section className="cardHolder">
            {
                (!data)  ? "Loading images...." :
                data.map((imageData) => {
                    let isLiked = (localData && localData[imageData.date]) ? true : false;
                    return <ImageCard imageData={imageData} key={imageData.date} isLiked={isLiked} />
                })
            }
        </section>
    )
}