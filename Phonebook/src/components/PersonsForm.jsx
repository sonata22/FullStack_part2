const FormEntry = ({ name, value, onChange }) => {
    return (
        <div>
            {name}:
            <input
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

const PersonsForm = ({ addName, newName, handlePersonChange, newPhoneNum, handlePhoneNumChange }) => {

    return (
        <form onSubmit={addName} >
            <FormEntry name={'Name'} value={newName} onChange={handlePersonChange} />
            <FormEntry name={'Number'} value={newPhoneNum} onChange={handlePhoneNumChange} />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonsForm