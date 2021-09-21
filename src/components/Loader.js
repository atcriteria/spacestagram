// A simple component I'll animate while we load the data

export default function Loader(){
    return(
        <div className="loader" alt="The page is fetching data from the API">
            <h1 className="loader-p">
                Receiving Transmissions
            </h1>
            <div className="loader-sphere" />
            <div className="loader-sphere-thinner" />
            <div className="loader-sphere-even-thinner" />
        </div>
    )
}