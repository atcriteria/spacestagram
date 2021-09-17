// A component for storing rendered Image Cards

import ImageCard from './ImageCard';

export default function CardHolder(props){
    const {data} = props;
    return(
        <section className="cardHolder">
            {
                (!data)  ? "Loading images...." :
                data.map((imageData) => {
                    return <ImageCard imageData={imageData} key={imageData.date}/>
                })
            }
        </section>
    )
}