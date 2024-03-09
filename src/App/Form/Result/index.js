import { StyledResult } from "./styled";
import { useInfoDate } from "./useApiDate";

export const Result = ({ result }, ratesData) => {
  const formattedApiDate = useInfoDate(ratesData);

  return (
    <StyledResult>
      Po wymianie:
      <StyledResult primary>
        {result && (
          <>
            {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}&nbsp; =
            &nbsp;
            <stong>{result.targetAmount.toFixed(2)}&nbsp;PLN</stong>
          </>
        )}
      </StyledResult>
      (Kurs z dnia:<strong> {formattedApiDate}</strong>)
    </StyledResult>
  );
};
