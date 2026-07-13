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

        const songs = libraryData.filter(item => item.type === "song");
        const exercises = libraryData.filter(item => item.type === "exercise");
        const resources = libraryData.filter(item => item.type === "resource");


        return(
            <>
            <div className="songs">
                <h1>The Stand:</h1>
                <h2>Songs:</h2>
                    <ul>
                        {libraryData.map((item) => (
                        <li key={item.id}><LibraryCard file={item} } />
                        </li>

                        ))}

                    </ul>
            </div>
            </>
    );
};

export default Library;