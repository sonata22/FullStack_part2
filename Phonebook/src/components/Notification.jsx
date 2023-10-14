const Notification = ({ message, styleOption }) => {
    if (message === null) {
        return null
    }

    const success = {
        color: "#0bb873",
        background: "#c3f9ea93",
    }

    const error = {
        color: "#b80b4b",
        background: "#d6266493",
    }

    let notification = {
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginTop: 10
    }

    return (
        <div style={{
            ...notification,
            ...(styleOption.error ? error : ""),
            ...(styleOption.success ? success : "")
        }}>
            {message}
        </div>
    )
}

export default Notification