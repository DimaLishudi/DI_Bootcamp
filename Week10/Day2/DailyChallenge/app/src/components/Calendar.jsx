import { useRef } from "react"
import { useDispatch } from "react-redux";

import { selectDateAction } from "../redux/actions";


function Calendar() {
    const dispatch = useDispatch();
    const dateRef = useRef();
    const selectDate = () => {
      if (dateRef.current) {
        dispatch(selectDateAction(dateRef.current.value));
      }
    }

    return (
      <>
        <input
          type="date"
          ref={dateRef}
          onChange={selectDate}
          className="date"
        />
        <br/>
      </>
    );
}

export default Calendar;
