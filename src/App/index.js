import { Form } from "./Form";
import { Clock } from "./Clock";
import { Main } from "./styled";

function App() {
  return (
    <Main>
      <Clock />
      <Form title="Przelicz walutę na PLN:" />
    </Main>
  );
}

export default App;
