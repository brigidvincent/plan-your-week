import { useState, useEffect } from "react";
import Button from "../Button";
import "./calendarStyling.css";

function WeeklyCalendar() {
    const [days, setDays] = useState([]);
    const [events, setEvents] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [editingEventIndex, setEditingEventIndex] = useState(null);
    const [tempEvent, setTempEvent] = useState({
        title: "",
        time: "",
        location: ""
    });
    const [expandedDay, setExpandedDay] = useState(null);

    const toggleDay = (index) => {
      setExpandedDay(prev => (prev === index ? null : index));
    };

    const [expandedEvent, setExpandedEvent] = useState(null);

    useEffect(() => {
        const today = new Date();
        const tempDays =[];
        for (let i = 0; i<8;i++) {
            const d = new Date(today);
            d.setDate(today.getDate()+i);
            tempDays.push(d);
        }
        setDays(tempDays);
        const initialEvents = {};
        tempDays.forEach(d=> {
            const key = d.toISOString().split("T")[0];
            initialEvents[key] = [];
        });
        setEvents(initialEvents);
    }, []); //runs when component loads

    const openModalForDay = dateKey => {
        setSelectedDay(dateKey);
        setEditingEventIndex(null);
        setTempEvent({ title:"", time:"", location: ""});
        setModalOpen(true);
    }; //loads pop-up to add event


    const saveEvent = () => {
        if (!tempEvent.title.trim()) {
            return;
        }
        const updatedEvents = {...events};
        const list = updatedEvents[selectedDay]
        if (editingEventIndex !== null){
            list[editingEventIndex] = tempEvent;
        } else {
            list.push(tempEvent);
        }
        setEvents(updatedEvents);
        setModalOpen(false);
    }; // saves event that user enters, closes popup 

    const editEvent = (dateKey, index) =>{
        setSelectedDay(dateKey);
        setEditingEventIndex(index);
        setTempEvent(events[dateKey][index]);
        setModalOpen(true);
    }; //loads popup with all details of event, but alterable

    const discardEvent = () => {
        setModalOpen(false);
    }; //closes popup when edit is discarded
    
    return (
    <div className="calendar-container">
      <div className="calendar-grid">
        {days.map((d, index) => {
          const dateKey = d.toISOString().split("T")[0];
          const readable = d.toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric"
        });

        return (
          <div key={index} className="calendar-day">
            <div className="around-day">

            {/* The button to expand/collapse the day's events */}
            <div className="day-header"><Button className="dropdown-button" onClick={() => toggleDay(index)}>
              {readable}
              <span>
              {expandedDay === index ? " ▼" : " ▲"}</span>
              </Button>
            </div>
            {/* expanded content*/}
            {expandedDay === index && (
              <>
                <div className="events-list">
                {events[dateKey]?.length === 0 && <p className="no-events">No events</p>}

                {events[dateKey]?.map((ev, i) => (
                  <div key={i} className="event-card">
                    <div className="event-info">
                        <div className="expanded-event-title">{ev.title}</div>
                        <div>{ev.time} — {ev.location}</div>

                        <Button
                          className="event-edit-button"
                          onClick={() => editEvent(dateKey, i)}>
                            Edit
                        </Button>
                    </div>
                  </div>
                ))}
                <Button
              className="add-event-button"
              onClick={() => openModalForDay(dateKey)}>
              +
                </Button>
                </div>
              </>
            )}

          </div>
          </div>
        );
      })}
    </div>

    {modalOpen && (
      <div className="modal-overlay">
        <div className="modal-box">
          <h3>{editingEventIndex !== null ? "Edit Event" : "Add Event"}</h3>

          <input
            className="modal-input"
            placeholder="Event title"
            value={tempEvent.title}
            onChange={e => setTempEvent({ ...tempEvent, title: e.target.value })}
          />

          <input
            className="modal-input"
            type="time"
            value={tempEvent.time}
            onChange={e => setTempEvent({ ...tempEvent, time: e.target.value })}
          />

          <input
            className="modal-input"
            placeholder="Location"
            value={tempEvent.location}
            onChange={e =>
              setTempEvent({ ...tempEvent, location: e.target.value })
            }
          />

          <div className="modal-buttons">
            <Button className="discard-button" onClick={discardEvent}>
              Discard
            </Button>

            <Button className="save-button" onClick={saveEvent}>
              Save
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
export default WeeklyCalendar;

