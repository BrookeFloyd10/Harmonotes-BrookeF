import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import PracticeCard from '../components/PracticeCard'


function Dashboard() {
    const [practiceData, setPracticeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleToggleComplete = (id) => {
        setPracticeData((prevData) => 
            prevData.map((exercise) => 
                exercise.id === id
                    ? {...exercise, completed: !exercise.completed }
                    :exercise
        )
      );
    };

     useEffect(() => {
       const fetchPracticeData = async () => {
           try {
               const response = await fetch('/mock-data/practiceData.json');
               if(!response.ok) {
                   throw new Error(`Error fetching data! Status:${response.status}`);
               }
              
               const data = await response.json();
               setPracticeData(data);
           } catch (err) {
               setError(err.message);
               console.error('Fetch error: ', err);
           } finally {
               setIsLoading(false);
           }
       };
      
       fetchPracticeData()
   }, []);
   


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading: {error}</p>;
    return (
        <div>
        <h2>Practice Exercises</h2>
            <ul>
                {practiceData.map((item ) => (
                <li key={item.id}><PracticeCard exercise={item} onToggleComplete={handleToggleComplete}/>
                </li>
                )) }
            </ul>    
        </div>
        )
    }


export default Dashboard;