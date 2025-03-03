import "./style.css";

const Form = () => {
    return (
        <form className="form">
        <h1 className="form__header">Kalkulator walut</h1>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w zł*
            </span>
            <input className="form__field" placeholder="Wpisz kwotę w złotówkach" type="number" required
              step="0.01" />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta
            </span>
            <select className="form__field" name="currency">
              <option value="EUR" selected>Euro</option>
              <option value="USD">Dolar amerykański</option>
              <option value="GBP">Funt brytyjski</option>
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz!</button>
        </p>
        <p className="form__info">Kursy pochodzą ze strony nbp.pl</p>
        <p className="form__result">
        </p>
      </form>
    )
};

export default Form;