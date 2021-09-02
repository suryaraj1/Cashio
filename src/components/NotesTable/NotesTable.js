import React from 'react';
import './NotesTable.css';

const NotesTable = () => {
    return (
        <div className='notes-table-wrapper'>
            <table className='notes-table'>
                <tr>
                    <th>No. of Notes</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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
    )
}

export default NotesTable;