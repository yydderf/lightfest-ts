import "./events.css";
import NavBar from "../components/nav/nav.tsx";

type Event = {
    category: string;
    name: string;
    date: string;
};

interface TimeBlockProps {
    event: Event;
}
function TimeBlock({event}: TimeBlockProps) {
    return <div className="events-time-block">
        <h3>{event.category}</h3>
        <div className="events-time-block__date">{event.date}</div>
        <h2>{event.name}</h2>
    </div>
}

const events: Event[] = [
    {name: 'Artist Talk', category: '講座', date: '5/26'},
    {name: `Design Lab 光盒子`, category: '工作坊', date: '7/29'},
    {name: '星光開幕演出', category: '系列活動', date: '12/4'},
];

function Timeline() {
    return <div className="events-container events-container__center">
        <h1 className="events-heading">時程表</h1>

        <div className="events-timeline">
            {events.map((event, index) => (
                <TimeBlock event={event} key={`time-block-${index}`} />
            ))}
        </div>
    </div>
}

export default function Events() {
    return <section>
        <div className="events-nav">
            <NavBar />
        </div>

        <Timeline />
    </section>;
}