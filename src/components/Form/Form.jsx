import DataInput from "./DataInput";
import { useState } from "react";
import style from "./Form.module.css"

const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
}

export default function Form(props) {
  const [userInput, setUserInput] = useState(initialInput)

  const submitHandler = function(event) {
    event.preventDefault();
    props.onCalculate(userInput);
  }

  const resetHandler = function(event) {
    event.preventDefault();
    setUserInput(initialInput)
  }

  const changeHandler = function(value, input) {
    setUserInput(prevState => {
      return {
        ...prevState,
        [input]: +value
      }
    });
  }

  return (
    <form className={style.form} onSubmit={submitHandler} onReset={resetHandler}>
      <div className={style["input-group"]}>
        <DataInput handler={changeHandler} for="current-savings" title="Current Savings ($)" value={userInput["current-savings"]} />
        <DataInput handler={changeHandler} for="yearly-contribution" title="Yearly Savings ($)" value={userInput["yearly-contribution"]} />
      </div>
      <div className={style["input-group"]}>
        <DataInput handler={changeHandler} for="expected-return" title="Expected Interest (%, per year)" value={userInput["expected-return"]} />
        <DataInput handler={changeHandler} for="duration" title="Investment Duration (years)" value={userInput["duration"]} />
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}