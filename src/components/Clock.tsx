import { useEffect, useState } from "react";
import dateFormat from "dateformat";

//Style
import styles from "../styles/components/clock.module.scss";

//Component
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
      <div className={styles.app}>
        <span>{date}</span>
        <span>{hour}</span>
      </div>
    </>
  );
}
