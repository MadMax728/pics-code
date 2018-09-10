import moment from "moment";
const DateFormat = (date, formatStr = "L") => {
  if (date) {
    return moment(date).format(formatStr);
  }
  return ""; //required for other components.
};
export default DateFormat;
