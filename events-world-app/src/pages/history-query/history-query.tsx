import React from "react";
import { Navigation } from "../../components/navbar";
import { useDeleteHistoryMutation, useGetHistoryQuery } from "../../services/history-query-api";
import { Button, ChartAirPoll, PlaceInfo } from "../../components";
import { getUserName } from "../../hooks/user.actions";
import logger from "../../logging/logger";

export const HistoryQuery = () => {
    const userName = getUserName();
    
    const {data, refetch} = useGetHistoryQuery(userName)
    const [deleteRecord] = useDeleteHistoryMutation()

    const handleClick=(id:any) => {
        deleteRecord({id: id})
        logger.postMessage({user: userName, action: `Пользователь ${userName} удалил из БД запись id=${id}`})
        refetch()
    }
    return (
        <>
            <Navigation />
            <h1>
                Список соханенных городов
            </h1>
            <div>
            {data && Array.from({ length: data.length }).map(
                (_, i) => (
                    <div key={i}>
                        <PlaceInfo props={data[i]} />
                        <ChartAirPoll props={data[i]} />
                        <Button text="Удалить" onClick={() => handleClick(data[i]._id)}></Button>
                    </div>
                ),
            )}
            </div>
        </>
    );
}

export default HistoryQuery;