import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import LibraryCard from '../components/LibraryCard';

const Library = () => {
    const [libraryData, setLibraryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    return(
        <div className="pages">
        <h1>Your Library</h1>
        </div>
    )
};

export default Library;