import ChangeUIContext from "./context";
import { useState } from "react";

const ProviderContext = ({children}) => {
    //dinh nghia State va action cap nhat State de share global
    const [bgColor, setBgColor] = useState('light')
    const [color, setColor] = useState('black')
    // su kien nguoi dung chuyen che do 
    const onChange = (checked) => {
        if(checked){
            setBgColor('light')
            setColor('black')
        }else{
            setBgColor('dark')
            setColor('white')
        }
      };
    return(
        <>
            <ChangeUIContext.Provider value={{bgColor, color, onChange}}>
                {children}
            </ChangeUIContext.Provider>
            
        </>
    )
}
export default ProviderContext