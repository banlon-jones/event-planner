export const newEvent = (event) => {
  if (localStorage.getItem("events")){
    const events = JSON.parse(localStorage.getItem('events'));
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
  }else {
    localStorage.setItem('events', JSON.stringify([event]));
  }
}

export const getMyEvent = () => {
  if (localStorage.getItem("events")){
    return JSON.parse(localStorage.getItem('events'));
  }else {
    return [];
  }
}

export const deleteEvent = (id) => {
  const events = JSON.parse(localStorage.getItem('events'));
  const newEvents = events.filter(event => event.id !== id);
  localStorage.setItem('events', JSON.stringify(newEvents));
  return newEvents;
}

export const editEvent = (event) => {
  const events = JSON.parse(localStorage.getItem('events'));
  const newEvents = events.map((eventItem) => eventItem.id === event.id? event : eventItem)
  localStorage.setItem('events', JSON.stringify(newEvents));
  return newEvents;
}

export const addParticipant = (id, email) => {
  const events = JSON.parse(localStorage.getItem('events'));
  events.map((event) => event.id === id && !event.participants.includes(email) && event.capacity > event.participants.length ? event.participants.push(email) : event);
  localStorage.setItem('events', JSON.stringify(events));
  return events;
}


