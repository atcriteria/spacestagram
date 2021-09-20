// A component for storing rendered Image Cards

import ImageCard from './ImageCard';
import Loader from './Loader';

export default function CardHolder(props){
    const {data} = props;
    const localData = JSON.parse(localStorage.getItem("data"))
    console.log(localData)

    return(
        <main className="cardHolder">
            {
                (!data)  ? <Loader /> :
                data.map((imageData) => {
                    let isLiked = (localData && localData[imageData.date]) ? true : false;
                    return <ImageCard imageData={imageData} key={imageData.date} isLiked={isLiked} />
                })
            }
        </main>
    )
}