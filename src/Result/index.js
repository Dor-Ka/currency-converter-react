import { StyledResult } from "./styled";

export const Result = ({ result }) => (
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
      (na dzień: 2024-02-09)
    </StyledResult>
);
