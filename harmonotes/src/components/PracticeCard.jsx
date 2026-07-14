
const PracticeCard = ({ exercise, onToggleComplete }) => {
    
    const { title, description, duration, xp, videoLink, completed } = exercise;
    return (
        <article className="practice-card">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={videoLink} target="_blank" rel="noopener noreferrer">Reference Video!</a>
          <p>{duration}</p>
          <p>{xp} XP</p>
          <label htmlFor={`completed-${exercise.id}`}>
          <input id={`completed-${exercise.id}`} 
                 type="checkbox" 
                 checked={completed} 
                 onChange={() => onToggleComplete(exercise.id)}/>
                 </label>
        </article>
    );
};

export default PracticeCard;