import { useCurrentDate } from "./useCurrentDate";
import { DataInfo } from "./styled";


export const DateCounter = () => {
    const date = useCurrentDate();

    return (
        <DataInfo>
            Dzisiaj jest {date.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })}
        </DataInfo>
    )
}