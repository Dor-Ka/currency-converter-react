import { WrapedSection } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formattedDate = (currentDate) => currentDate.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
});

const formattedTime = (currentDate) => currentDate.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});


export const Clock = () => {
    const currentDate = useCurrentDate();
    return (
        <WrapedSection>
            {formattedDate(currentDate)}
            {", "}
            {formattedTime(currentDate)}
        </WrapedSection>
    )
}