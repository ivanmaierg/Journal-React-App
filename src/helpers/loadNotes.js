import { db } from '../firebase/firebase-config';

const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  notesSnap.forEach((snapChild) => {
    notes.push({
      id: snapChild.id,
      ...snapChild.data(),
    });
  });
  return notes;
};
export default loadNotes;
