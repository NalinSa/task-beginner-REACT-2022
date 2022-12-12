function Task(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">Finish</button>
      </div>
    </div>
  );
}
export default Task;
