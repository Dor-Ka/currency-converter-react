import { useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { Result } from "./Result";
import { currencies } from "./currencies";
import { Clock } from "./Clock";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ name }) => name === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: rate * amount,
      currency,
    });
  };

  return (
    <Container>
      <Clock/>
      <Form
        title="Przelicz walutę na PLN:"
        calculateResult={calculateResult}
      />
        <Result result={result} />
    </Container>
  );
};


export default App;
