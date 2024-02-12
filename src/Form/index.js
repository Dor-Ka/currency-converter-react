import { useState } from "react";
import currencies from "../currencies";
import "./style.css";

const Form = ({ calculateResult, result, title }) => {
  const [currency, setCurrency] = useState(currencies[1].name);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset margin">
          <legend className="form__legent">
            {title}
          </legend>
          <p>
            <label className="form__labellText">
              Waluta:
              <select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                className="form__field  form__field--smaller"
              >
                {currencies.map((currency => (
                  <option
                    key={currency.name}
                    value={currency.name}
                  >
                    {currency.name}
                  </option>
                )))}
              </select>
            </label>
          </p>
          <p>
            <label>
              <span className="form__labellText">
                *Kwota:
                <input
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  className="form__field  form__field--smaller"
                  type="number"
                  step="0.01" min="0.01"
                  required
                />
              </span>
            </label>
          </p>
          <p className="form__field form__field--star">
            * pole wymagane
          </p>
        </fieldset>
        <p className="form__button">
          <button className="form__button">Przelicz!</button>
        </p>
      </form>
    </>
  )
}

export default Form;