import { createContext } from "react";
export const contextWheather  = createContext([
    {
        title : 'coord',
        dataIndex : 'coord',
        key : 1
    },
    {
        title : 'weather',
        dataIndex : 'weather',
        key : 2
    }
]);