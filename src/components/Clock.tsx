import { useEffect, useState } from "react";
import dateFormat from "dateformat";

//Estilo
import styles from "../styles/components/clock.module.scss";

//Componente
export function Clock() {
  const now = Date.now();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  useEffect(() => {
    updateDateHour();
  }, [now]);

  function updateDateHour() {
    setDate(dateFormat(now, "dd/mmmm/yyyy"));
    setHour(dateFormat(now, "hh:M TT"));
  }

  return (
    <>
      <div className={styles.app}>
        <span>{date}</span>
        <span>{hour}</span>
      </div>
    </>
  );
}
