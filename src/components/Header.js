export default function Header(){
    return(
        <header>
            <h1 className="app-header">SPACE-STAGRAM</h1>
            <p>
                This application uses the free <a href="https://www.nasa.gov/" title="National Aeronautics and Space Administration">NASA</a> API, <a href="https://api.nasa.gov/#browseAPI">Astronomy Picture of the Day (APOD)</a>.
            </p><br />
            <p>
                Click or Tap the rocket emoji to 'like' your favorite images!
            </p>
        </header>
    )
}