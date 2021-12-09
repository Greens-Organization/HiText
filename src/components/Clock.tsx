import { useEffect, useState } from "react";
import dateFormat from "dateformat";

//Estilo
import styles from "../styles/components/clock.module.scss";

//Componente
export function Clock() {
  return (
    <>
      <div className={styles.app}>
        <span>{dateFormat(Date.now(), "dd/mmmm/yyyy")}</span>
        <span>{dateFormat(Date.now(), "hh:M TT")}</span>
      </div>
      ;
    </>
  );
}
