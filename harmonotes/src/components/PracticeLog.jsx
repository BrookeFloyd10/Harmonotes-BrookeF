import FormField from "./FormField";
import Button from "./Button";



const PracticeLog = ({practiceSession, handleChange, handleSubmit }) => {   
    return (
        <aside className="practice-log">
            <h2>Practice Log</h2>
            
            <form onSubmit={handleSubmit}>
                <FormField label="Practice Focus"
                            as="textarea"
                            id="session-focus"
                            name="focus"
                            value={practiceSession.focus || ""}
                            onChange={handleChange}
                            rows={2}
                            cols={30}
                            placeholder={"What did you focus on?"} />
                <FormField label="Practice Length"
                            as="textarea"
                            id="session-time"
                            name="time"
                            value={practiceSession.time || ""}
                            onChange={handleChange}
                            rows={1}
                            cols={30}
                            placeholder={"Practice length in minuets..."} />
                <FormField label="Triumphs & Challenges"
                            as="textarea"
                            id="practice-outcome"
                            name="outcome"
                            value={practiceSession.outcome || ""}
                            onChange={handleChange}
                            rows={2}
                            cols={30}
                            placeholder={"What successes or challenges did you have?"} />
                <Button id="submit-btn" 
                        type="submit" 
                        className="submit-btn" 
                        label="Log Session" />

            </form>
        </aside>
    );
};


export default PracticeLog;