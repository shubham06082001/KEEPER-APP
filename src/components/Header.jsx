import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

const today = new Date();
const date = today.getDay();
let day = "";
switch (date) {
  case 0:
    day = "SUNDAY";
    break;
  case 1:
    day = "MONDAY";
    break;
  case 2:
    day = "TUESDAY";
    break;
  case 3:
    day = "WEDNESDAY";
    break;
  case 4:
    day = "THURSDAY";
    break;
  case 5:
    day = "FRIDAY";
    break;
  case 6:
    day = "SATURDAY";
    break;
  default:
    day = "";
}
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const Header = () => {
  return (
    <header>
      <h1>
        <HighlightIcon fontSize="inherit" /> Keeper App
      </h1>
      {/* <button className="time">{time}</button> */}
      <button className="time">{formatAMPM(new Date())}</button>
      <button className="day">{day}</button>
    </header>
  );
};
export default Header;
