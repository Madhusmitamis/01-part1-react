const Hello =()=>{
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  // const now = new Date()
  // const a = 10
  // const b = 20
  // console.log(now, a+b)

  return (
    <div>
      {/* <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>  */}
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App
