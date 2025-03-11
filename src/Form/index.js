import { LabelText, FormField, SelectField, Info, Button, Header } from "./styled";
import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);

  }
  return (
    <form
     onSubmit={onSubmit}>
      <Header>Kalkulator walut</Header>
      <p>
        <label>
          <LabelText>
            Kwota w zł*
          </LabelText>
          <FormField
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w złotówkach"
            type="number"
            required
            step="0.01" />
        </label>
      </p>
      <p>
        <label>
          <LabelText>
            Waluta
          </LabelText>
          <SelectField
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </SelectField>
        </label>
      </p>
      <p>
        <Button>Przelicz!</Button>
      </p>
      <Info>Kursy pochodzą ze strony nbp.pl</Info>
      <Result result={result} />
    </form>
  );
};

export default Form;