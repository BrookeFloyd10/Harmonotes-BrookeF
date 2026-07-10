
const FormField =  ({ label, id, type, name, value, onChange, as="input", maxLength, required}) => {
    const Element = as;
    
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>
            <Element
                id={id}
                type={as === "input" ? type : undefined}
                name={name}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                required={required} />
    </div>
    
    );
};

export default FormField;