const Card = ({ task, onDelete, onEdit }) => {
  return (
    <div className="card-container">
      <p>{task.t}</p>
      <button className="edit-button" onClick={() => onEdit(task.i)}>Edit</button>
      <button className="delete-button" onClick={() => onDelete(task.i)}>Delete</button>
    </div>
  );
};

export default Card;
