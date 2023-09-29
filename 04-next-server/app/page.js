import TimeSinceForm from "./time-since-form";
import OnThisDay from "./on-this-day";

function timeSince(e,t){if(!t||!e)return"";if(isNaN(t.getTime())||isNaN(e.getTime()))return"Invalid date format";if(e>t)return"Where we're going, we don't need dates.";let n=Math.floor((t-e)/1e3);return`It has been ${Math.floor(n/86400)} days, ${Math.floor(n%86400/3600)} hours, ${Math.floor(n%3600/60)} minutes and ${n%60} seconds since ${e.toDateString()}.`}

function TimeSince(props) {
  return <div>{timeSince(props.then, props.now)}</div>;
}

export default function TimeSinceApp({ searchParams }) {
  let then = searchParams.then ? new Date(searchParams.then) : null;

  return (
    <div>
      <h1>Time Since App</h1>
      <TimeSinceForm initialValue={searchParams.then ?? ""} />
      <TimeSince then={then} now={new Date()} />
      {/* {then && <OnThisDay month={then.getMonth()} day={then.getDate()} />} */}
    </div>
  );
}
