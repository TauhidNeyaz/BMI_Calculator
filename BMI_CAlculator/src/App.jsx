import { useState } from "react"


function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")

  const cal_bmi = (e) => {
    e.preventDefault()

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height")
    } else {
      let bmi_value = (weight / (height * height) * 703)
      setBmi(bmi_value.toFixed(1))

      if (bmi_value < 25) {
        setMessage("You are underweight")
      } else if (bmi_value >= 25 && bmi_value <= 30) {
        setMessage("You are healthy")
      } else {
        setMessage("You are overweight")
      }
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <form onSubmit={cal_bmi}>
        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder="Enter the weight" value={weight}
          onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (lbs)</label>
          <input type="text" placeholder="Enter the Height" value={height}
          onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div>
          <button className="bnt" type="submit">Submit</button>
          <button className="btn-outline" onClick={reload} type="submit">Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  )
}

export default App
