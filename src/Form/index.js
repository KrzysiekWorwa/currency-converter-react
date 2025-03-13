import { LabelText, FormField, Info, Button, Header } from "./styled";
import React, { useState } from "react";
import { Result } from "./Result";
import { useRatesData } from "./useRatesData";


export const Form = () => {

  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);

  }

  return (
    <form
      onSubmit={onSubmit}>
      <Header>Kalkulator walut</Header>
      {ratesData.state === "loading"
        ? (
          <p>Ładuję kursy</p>
        )
        : (
          ratesData.state === "error" ? (
            <p>Coś poszło nie tak</p>
          ) : (
            <>
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
                  <FormField
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.data).map((currencyCode) => (
                      <option key={currencyCode}
                        value={currencyCode}
                      >
                        {ratesData.data[currencyCode].code}
                      </option>
                    ))}
                  </FormField>
                </label>
              </p>
              <p>
                <Button>Przelicz!</Button>
              </p>
              <Info>Kursy pochodzą ze strony currencyapi.com</Info>
              <Result result={result} />
            </>
          )
        )}
    </form>
  );
};

export default Form;