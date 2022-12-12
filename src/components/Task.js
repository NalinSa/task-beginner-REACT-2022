import { useState } from "react";
import Backdrop from "./Backdrop";
import TriggerConfirm from "./TriggerConfirm";
function Task(props) {
  const [triggerIsPop, setTriggerPop] = useState(false);
  function deleteTaskHandler() {
    console.log(props.text + " *finish*");
    setTriggerPop(true);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTaskHandler}>
          Finish
        </button>
      </div>
      {triggerIsPop ? <TriggerConfirm /> : null}
      {triggerIsPop && <Backdrop />}
    </div>
  );
}
export default Task;
