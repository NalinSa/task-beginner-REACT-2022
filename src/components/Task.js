import { useState } from "react";
import Backdrop from "./Backdrop";
import TriggerConfirm from "./TriggerConfirm";
function Task(props) {
  const [triggerIsPop, setTriggerPop] = useState(false);
  function deleteTaskHandler() {
    console.log(props.text + " *finish*");
    setTriggerPop(true);
  }
  function closeTriggerHandler(){
    setTriggerPop(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTaskHandler}>
          Finish
        </button>
      </div>
      {triggerIsPop ? <TriggerConfirm onCancelClick = {closeTriggerHandler} onAcceptClick = {closeTriggerHandler}/> : null}
      {triggerIsPop && <Backdrop onClick = {closeTriggerHandler}/>}
    </div>
  );
}
export default Task;
