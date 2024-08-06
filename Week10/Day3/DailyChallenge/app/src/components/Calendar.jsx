import { useRef } from "react"
import { useDispatch } from "react-redux";

import { selectDateAction } from "./TaskSlice";


function Calendar() {
    const dispatch = useDispatch();
    const dateRef = useRef();
    const selectDate = () => {
      if (dateRef.current) {
        dispatch(selectDateAction({date: dateRef.current.value}));
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
        {/* <button onClick={selectDate}>Select</button> */}
        <br/>
      </>
    );
}

export default Calendar;
