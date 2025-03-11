import { ResultInfo } from "./styled";

export const Result = ({ result }) => (
    <ResultInfo>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </ResultInfo>
);