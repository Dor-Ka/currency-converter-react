import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset margin">
            <legend className="form__legent">
                Przelicz walutę na PLN:
            </legend>
            <p>
                <label className="form__labellText">
                    Waluta:
                    <select className="form__field  form__field--smaller">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>CHF</option>
                        <option>GBP</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labellText">
                        *Kwota:
                        <input className="form__field form__field--smaller" type="number" step="0.01" min="0.01" required>
                        </input>
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
)

export default Form;