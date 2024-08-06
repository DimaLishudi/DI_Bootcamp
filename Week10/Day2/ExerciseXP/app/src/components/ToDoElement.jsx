import { toggleToDoAction, removeToDoAction } from "../redux/actions";
import { connect } from "react-redux";

function ToDoElementUnconnected({text, isCompleted, toggle, remove}) {
    return (
        <li>
            <span className={isCompleted ? "completed" : "uncompleted"}>
                {text}
            </span>
            <button onClick={remove}>Remove</button>
            <button onClick={toggle}>Mark as {isCompleted ? "uncompleted" : "completed"}</button>
        </li>
    )
}


function mapStateToProps(state, ownProps) {
    const { text, isCompleted } = state.find(value => value.id === ownProps.id)
    return {
        text,
        isCompleted,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggle: () => dispatch(toggleToDoAction(ownProps.id)),
        remove: () => dispatch(removeToDoAction(ownProps.id))
    }
}

const ToDoElement = connect(mapStateToProps, mapDispatchToProps)(ToDoElementUnconnected);

export default ToDoElement;
