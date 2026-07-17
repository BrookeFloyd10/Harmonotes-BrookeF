import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import PracticeTable from "./PracticeTable";


const PracticeLog = () => {
    const [ practiceLog, setPracticeLog ]=useState([{}]);
    const [ practiceSession, setPracticeSession ]=useState({});
    const [ editId, setEditId ]=useState(null);

    const handleChange = (ev) => {
        const { name, value } = (ev.target);
        setPracticeSession((prev) => ({ ...prev, [name]: value }));
};

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (editId === null) { 
            setPracticeLog((prev) => [...prev, practiceSession]);
        } else {
            setPracticeLog((prev) => prev.map((session) => {
                if (session.id === editId) {
                    return practiceSession;
                } else {
                    return session;
                }
            }));
        }
        setPracticeSession({});
        setEditId(null);
    };

    const handleEdit =  (session) => {
        setPracticeSession(session);
        setEditId(session.id);
    };
   
    const handleDelete = (session) => {
        setPracticeLog((prev) => prev.filter(entry));
        if (entry.id !== session.id) {
            return practiceSession
        }

    };
    
        

    return(
        <aside className="practice-log">
            <h2>Practice Log</h2>
            
            <form onSubmit={handleSubmit}>
                <FormField label="focus"
                            as="textarea"
                            id="session-focus"
                            name="focus"
                            value={practiceSession.title}
                            onChange={handleChange}
                            rows={2}
                            cols={15}
                            placeholder={"What did you practice?"} />
                <FormField label="For..."
                            as="textarea"
                            id="session-time"
                            name="time"
                            value={practiceSession.time}
                            onChange={handleChange}
                            rows={2}
                            cols={15}
                            placeholder={"how long did you practice?"} />
                <FormField label="Triumphs/Challenges I faced..."
                            as="textarea"
                            id="practice-outcome"
                            name="outcome"
                            value={practiceSession.outcome}
                            onChange={handleChange}
                            rows={2}
                            cols={15}
                            placeholder={"What successes or challenges did you have?"} />
                <Button id="submit-btn" type="submit" className="submit-btn" label="Submit" />

            </form>
            {practiceSession.length > 0}
            <PracticeTable sessions={practiceSession} />
        </aside>
    );
};


export default PracticeLog;