import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import XPTracker from '../components/XPTracker';
import PracticeCard from '../components/PracticeCard'
import InstructorQuestion from '../components/InstructorQuestion';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';


const Dashboard= () => {
    const [practiceData, setPracticeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleToggleComplete = (id) => {
        setPracticeData((prevData) => 
            prevData.map((exercise) => 
                exercise.id === id
                    ? {...exercise, completed: !exercise.completed }
                    : exercise
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
   

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    return (
        <>
        <div className="dashboard-top">
            <div className="welcome-message">
                <h2>Welcome Back, Gabe!</h2>
            </div>

            <div className="lesson-summary">
                <h3>Last Lesson Summary:</h3>
                <ul>
                    <li>Practiced "Across the Universe" at 60 BPM</li>
                    <li>Worked on chords for "Another one Bites the Dust"</li>
                    <li>Worked on sight reading both songs</li>
                </ul>
            </div>

            <XPTracker practiceData={practiceData} />
        </div>

        <div className="dashboard-cards-row">
            <section className="exercise-list">
                <h2>Practice Exercises</h2>
                    <ul>
                        {practiceData.map((item ) => (
                            <li key={item.id}><PracticeCard exercise={item} onToggleComplete={handleToggleComplete}/>
                        </li>
                        )) }
                    </ul>    
            </section>
            <aside>
            <InstructorQuestion />
            </aside> 
        </div>

         <div className="instructor-notes">
                <h3>Instructor Notes:</h3>
                <ul>
                    <li>Remember, Mother metronome is there to help you.</li>
                    <li>Be mindful of hyperextension while you play.</li>
                    <li>You are doing great!</li>
                </ul>
            </div>
        </>

        );
    };


export default Dashboard;