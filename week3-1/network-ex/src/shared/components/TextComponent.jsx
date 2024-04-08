const TextComponent = ({
    inputType,
    text,
    changeTextFn,
}) => {
    return (
        <input
            type={inputType}
            onChange={changeTextFn}
            value={text}
        />
    );
}

export default TextComponent;