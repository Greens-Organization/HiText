import { parseISO, format } from "date-fns";

export const Clock = () => {
  const now = Date.now().toString();

  const date = parseISO(now);

  return (
    <div>
      <time dateTime={now}>{format(date, "dd/mmmm/yyyy")}</time>
      <time dateTime={now}>{format(date, "hh:mm a..aa")}</time>
    </div>
  );
};
