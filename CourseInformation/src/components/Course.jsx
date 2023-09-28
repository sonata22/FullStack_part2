const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><strong>Total of {sum} exercises</strong></p>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) =>
                <Part key={part.id} part={part} />
            )}
        </>)
}

const Course = ({ course, parts }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total sum={parts.reduce((sum, part) => { return sum + part.exercises }, 0)} />
        </>
    )
}

export default Course