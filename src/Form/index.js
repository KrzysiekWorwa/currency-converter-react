import { LabelText, FormField, Info, Button, Header, Loading, Fail } from "./styled";
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
  const lastUpdatedAt = ratesData.meta
    ? new Date(ratesData.meta)
    : null;

  return (
    <form
      onSubmit={onSubmit}>
      <Header>Kalkulator walut</Header>
      {ratesData.state === "loading"
        ? (
          <Loading>Sekunda... <br />Ładuję kursy walut ze strony currencyapi.com...</Loading>
        )
        : (
          ratesData.state === "error" ? (
            <Fail>Coś poszło nie tak... Sprawdź, czy masz połączenie z internetem</Fail>
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
              <Info>Kursy pochodzą ze strony currencyapi.com <br /> Aktualne na dzień: <strong>{lastUpdatedAt.toLocaleDateString(undefined)}</strong></Info>
              <Result result={result} />
            </>
          )
        )}
    </form>
  );
};

export default Form;