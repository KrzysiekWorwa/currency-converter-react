import "./style.css";
import React, { useState } from "react";
import { currencies } from "../currencies";
import {Result} from "./Result";
import { CurrentDate } from "./Date";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);

  }
    return (
        <form className="form" onSubmit={onSubmit}>
        <CurrentDate />
        <h1 className="form__header">Kalkulator walut</h1>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w zł*
            </span>
            <input 
            value={amount}
            onChange={({target}) => setAmount(target.value)}
            className="form__field" 
            placeholder="Wpisz kwotę w złotówkach" 
            type="number" 
            required
            step="0.01" />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta
            </span>
            <select 
            className="form__field" 
            value={currency}
            onChange={({target}) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
              <option key={currency.short}
              value={currency.short}
              >
                {currency.name}
              </option>
            )))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz!</button>
        </p>
        <p className="form__info">Kursy pochodzą ze strony nbp.pl</p>
        <Result result={result}/>
      </form>
    );
};

export default Form;