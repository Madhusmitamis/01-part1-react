const Hello = (props) => {
  const name = props.name
  const age = props.age
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
const Footer =() =>{
  return (
    <div>
      <p>greeting app created by Madhu</p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const friend = [ 'Peter', ' Maya']

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friend}</p>
      <Footer/>
    </div>
  )
}

export default App
