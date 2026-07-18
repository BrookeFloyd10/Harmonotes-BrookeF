import Button from "./Button"

const PracticeTable = ({ handleEdit, handleDelete, sessions }) => {
    if (sessions.length === 0) {
        return (
            <div className="empty-table">
                <p>No Sessions Logged</p>
            </div>
        );
    }
        return (
            <table className="practice-table">
                <thead>
                    <tr>
                        <th>Practice Focus</th>
                        <th>Duration</th>
                        <th>Triumps/Challenges</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session) => (
                    <tr key={session.id}>
                        <td>{session.focus}</td>
                        <td>{session.time}</td>
                        <td>{session.outcome}</td>
                        <td><Button id={`edit-btn-${session.id}`}
                                    type="button"
                                    className="edit-btn"
                                    label="Edit"
                                    onClick={ () => handleEdit(session)} />
                            <Button id={`remove-btn-${session.id}`}
                                    type="button"
                                    className="remove-btn"
                                    label="Remove"
                                    onClick={ () => handleDelete(session.id)}/></td>
                    </tr>
                    ))}
                </tbody>
            </table>

    );
};

export default PracticeTable;
