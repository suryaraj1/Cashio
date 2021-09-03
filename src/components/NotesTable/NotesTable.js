import React from "react";
import "./NotesTable.css";

const validateNotesCount = (notes) => {
  // should not be done this way
  if (!notes.length) {
    const zeroes = [0, 0, 0, 0, 0, 0, 0];
    const notesUI = zeroes.map((zero) => <td>{zero}</td>);
    return notesUI;
  } else {
    const notesUI = notes.map((note) => <td>{note}</td>);
    return notesUI;
  }
};

const NotesTable = ({ notes }) => {
  return (
    <div className="notes-table-wrapper">
      <table className="notes-table">
        <tr>
          <th>No. of Notes</th>
          {validateNotesCount(notes)}
        </tr>
        <tr>
          <th>Note</th>
          <td>2000</td>
          <td>500</td>
          <td>100</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
};

export default NotesTable;
