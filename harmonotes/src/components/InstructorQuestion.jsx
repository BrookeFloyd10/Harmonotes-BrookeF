import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";


const InstructorQuestion = () => {
    const [ question, setQuestion ]=useState('');
    const [ submittedQuestion, setSubmittedQuestion ]=useState('');

    const handleChange = (ev) => setQuestion(ev.target.value);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setSubmittedQuestion(question);
        setQuestion('');
    };


    return(
        <aside className="instructor-question">
            <h2>Ask your instructor:</h2>
            
            <form onSubmit={handleSubmit}>
                <FormField label="Ask your Instructor:"
                            as="textarea"
                            id="question"
                            name="question"
                            value={question}
                            onChange={handleChange}
                            rows={9}
                            cols={30}
                            placeholder={"Ask away.."} />
                <Button id="submit-btn" type="submit" className="submit-btn" label="Submit" />
            </form>
                            {submittedQuestion && <p className="submitted-question">{submittedQuestion}</p>}
        </aside>
    );
};
export default InstructorQuestion;





        