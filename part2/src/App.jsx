const Header = ({ course }) => <h1>{course}</h1>

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
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      id: 0,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 1,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 2,
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Course course={course} parts={parts} />
    </div>
  )
}

export default App