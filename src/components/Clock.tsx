import { useEffect, useState } from "react";
import dateFormat from "dateformat";

//Style
// import styles from '../styles/components/clock.module.scss';

//Component clock
export function Clock() {
  const now = Date.now();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    setDate(dateFormat(now, "dd/mmmm/yyyy"));
    setHour(dateFormat(now, "hh:M TT"));
  }, [now]);

  return (
    <>
      <div className={"display: flex; flex-direction: column;"}>
        <span
          className={
            "color: var(--placeholder-color); font-weight: bold; font-size: .75rem;"
          }
        >
          {date}
        </span>
        <span
          className={
            "color: var(--placeholder-color); font-weight: bold; font-size: .75rem;"
          }
        >
          {hour}
        </span>
      </div>
    </>
  );
}
