
const WorkoutDetails = ({workout}) => {
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load: {workout.load}</strong></p>
        <p><strong>Reps: {workout.reps}</strong></p>
        <p>{workout.createdAt}</p>
        {/* {console.log(workout.reps)} */}
    </div>
  )
}

export default WorkoutDetails