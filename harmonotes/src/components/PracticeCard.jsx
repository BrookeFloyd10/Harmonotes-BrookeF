
function PracticeCard({exercise, onToggleComplete}) {
    
    const { title, description, duration, xp, videoLink, completed } = exercise;
    return (
        <article>
          <h2> {title} </h2>
          <p>{description}</p>
          <p>{duration}</p>
          <a href={videoLink} target="_blank">Here's a video to jog your memory!</a>
          <p>{xp} XP</p>
          <label htmlfor="completed">
         <input type="checkbox"  checked={exercise.completed} onChange={() => onToggleComplete(exercise.id)}/>
         Completed
          </label>
        </article>
    )
}

export default PracticeCard;