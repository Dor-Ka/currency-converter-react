import "./style.css";

const Result = ({ result }) => (
    <p className="text text--result">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}&nbsp; = &nbsp;
                <stong>
                    {result.targetAmount.toFixed(2)}&nbsp;PLN
                </stong>
            </>
        )}
    </p>
);

export default Result;