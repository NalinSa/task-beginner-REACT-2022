function TriggerConfirm(props) {
  function cancelHandler(){
    props.onCancelClick();
  }
  function acceptHandler(){
    props.onAcceptClick();
  }
  return (
    <div className="trigger">
      <p>Did you finish the task?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Nope</button>
      <button className="btn" onClick={acceptHandler}>Yep</button>
    </div>
  );
}
export default TriggerConfirm;
