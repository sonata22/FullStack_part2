const PersonsData = ({ person }) => {
    return (
        <li>
            <p>
                Id: {person.id}
                <br />
                Name: {person.name}
                <br />
                Number: {person.phoneNumber}
            </p>
        </li>
    )
}

export default PersonsData