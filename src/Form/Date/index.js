import "./style.css"
export const CurrentDate = () => {
    const date = new Date();
  
const day = date.toLocaleDateString("pl", {
  weekday: "long", 
  day: "numeric", 
  month: "long", 
  year: "numeric"
});

const time = date.toLocaleTimeString();

const dateAndTime = `${day}, ${time}`;

return(
    <div className="date">Dzisiaj jest {dateAndTime}</div>
);
}