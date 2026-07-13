
const LibraryCard = ({ item }) => {

    const { title, type, artist, difficulty, file, audio } = item
    
    return (
        <article className="library-card">
            <h2>{title}</h2>
            {artist && <p>By: {artist}</p>}
            {file && (
                <a href={file} target="_blank" rel="noopener noreferrer">
                    {type === "song" ? "View Sheet Music" 
                    : type === "reference" ? "View Reference" 
                    : type === "exercise" ? "View Exercise"
                    : " "} </a>
                    )}
            {difficulty && <p>Difficulty level: {difficulty}</p>}
            {audio.length > 0 && (
                <div>
                    <p>Play along!</p>
                    {audio.map((audioClip) => (
                        <a key={audioClip.file} href={audioClip.file} target="_blank" rel="noopener noreferrer">
                            {audioClip.label}</a>
                   ))}
                </div>
            )}
        </article>
    );
};


export default LibraryCard;