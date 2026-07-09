const Button =({ id, type, disabled, label, className, onClick}) => {
    return ( 
        <button
            id={id}
            type={type || "text"}
            disabled={isAnyFieldEmpty}
            className={className}
            onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;