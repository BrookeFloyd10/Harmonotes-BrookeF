
function PracticeCard({exercise, onToggleComplete}) {
    
    const { title, description, duration, xp, videoLink, completed } = exercise;
    return (
        <article>
          <h2> {title} </h2>
          <p>{description}</p>
          <p>{duration}</p>
          <a href={videoLink} target="_blank" rel="noopener noreferrer">Reference Video!</a>
          <p>{xp} XP</p>
          <label htmlFor={`completed-${exercise.id}`}>
          <input id={`completed-${exercise.id}`} 
                 type="checkbox" 
                 checked={exercise.completed} 
                 onChange={() => onToggleComplete(exercise.id)}/>
                 Completed</label>
        </article>
    )
}

export default PracticeCard;