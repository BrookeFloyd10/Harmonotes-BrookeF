import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import LibraryCard from '../components/LibraryCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';


const Library = () => {
    const [libraryData, setLibraryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [instrumentFilter, setInstrumentFilter] = useState("all");

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


        const filterByInstrument = libraryData.filter(item => 
            instrumentFilter === "all" || item.instrument.includes(instrumentFilter));

        const songs = filterByInstrument.filter(item => item.type === "song");
        const exercises = filterByInstrument.filter(item => item.type === "exercise");
        const resources = filterByInstrument.filter(item => item.type === "reference");

        return(
            <>
    <h1>Studio Library:</h1>
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
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
                </div>
            )}

            {exercises.length > 0 && (
                <div className="exercises">
                    <h2>Exercises:</h2>
                    <ul>
                        {exercises.map((item) =>
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
                </div>
            )}
                

            {resources.length > 0 && (
                <div className="resources">
                    <h2>Theory & Guides:</h2>
                    <ul>
                        {resources.map((item) =>
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
                </div>
            )}
            </>
    );
};

export default Library;