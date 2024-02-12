import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import currencies from "./currencies";

function App() {
  const [result, setResult] = useState();

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
      <Form
        title="Przelicz walutę na PLN:"
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
};


export default App;
