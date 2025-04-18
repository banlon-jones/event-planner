import {db} from "../configs/firebaseConfig.js";
import { v4 as uuidv4 } from 'uuid';

export const createEvent = async ({title, uid, description, capacity, location, date, time}) => {
  return await db.collection('events').doc(uuidv4()).set(
    {
      title,
      uid,
      description,
      capacity,
      location,
      date,
      time
    }
  )
}

export const getEvents = async () => {
  return await db.collection('events').get().then((querySnapshot) => {
    let events = [];
    querySnapshot.forEach((doc) => {
      events.push({id: doc.id, ...doc.data()});
    });
    return events;
  });
}

export const updateEvent = async (id, event) => {
  return await db.collection('events').doc(id).update(event);
}

export const deleteEvent = async (id) => {
  return await db.collection('events').doc(id).delete();
}
