import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import LibraryCard from '../components/LibraryCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';


const Library = () => {
    const [libraryData, setLibraryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLibraryData = async () => {
            try {
                const response = await fetch('/mock-data/libraryData.json');
                if(!response.ok) {
                    throw new Error(`Error collecting library materials! Status: ${response.status}`)
                }
                const data = await response.json();
                setLibraryData(data);

            }catch (err) {
                setError(err.message);
                console.error('Fetch error: ', err)

            } finally {
                setIsLoading(false);
            }
        };
        fetchLibraryData()
        }, []);

        if (isLoading) return <Loading />;
        if (error) return <ErrorMessage message={error} />

        const [instrumentFilter, setInstrumentFilter] = usestate("all");

        const filterByInstrument = libraryData.filter(item => 
            instrumentFilter === "all" || item.instrument.includes(instrumentFilter));

        const songs = libraryData.filter(item => item.type === "song");
        const exercises = libraryData.filter(item => item.type === "exercise");
        const resources = libraryData.filter(item => item.type === "resource");

        return(
            <>
    <h1>The Stand:</h1>
            <select value={instrumentFilter} onChange={(ev) => setInstrumentFilter(ev.target.value)}>
                <option value="all">All Instruments</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>

            </select>

            {songs.length > 0 && (
                <div className="songs">
                    <h2>Songs:</h2>
                    <ul>
                        {songs.map((item) =>
                            <li key={item.id}><LibraryCard file={item} />
                        </li>)}
                    </ul>
                </div>
            )}

            {exercises.length > 0 && (
                <div className="exercises">
                    <h2>Exercises:</h2>
                    <ul>
                        {exercises.map((item) =>
                            <li key={item.id}><LibraryCard file={item} />
                        </li>)}
                    </ul>
                </div>
            )}
                

            {songs.length > 0 && (
                <div className="resources">
                    <h2>Theory & Guides:</h2>
                    <ul>
                        {songs.map((item) =>
                            <li key={item.id}><LibraryCard file={item} />
                        </li>)}
                    </ul>
                </div>
            )}
            </>
    );
};

export default Library;