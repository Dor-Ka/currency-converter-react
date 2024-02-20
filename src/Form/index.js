import { useState } from "react";
import { currencies } from "../currencies";
import { LabelText, Fieldset, FormButton, Legend, Input, FormField } from "./styled";

export const Form = ({ calculateResult, title }) => {
  const [currency, setCurrency] = useState(currencies[1].name);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <Legend>{title}</Legend>
          <p>
            <LabelText>
              Waluta:
              <Input 
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.name} value={currency.name}>
                    {currency.name}
                  </option>
                ))}
              </Input>
            </LabelText>
          </p>
          <p>
            <LabelText>
              *Kwota:
              <Input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                step="0.01"
                min="0.01"
                required
              />
            </LabelText>{" "}
          </p>
          <FormField>* pole wymagane</FormField>
        </Fieldset>
        <FormButton>Przelicz!</FormButton>
      </form>
    </>
  );
};
