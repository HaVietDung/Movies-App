// viet hooks luu thong tin nguoi dung vao localStorate

import { useState } from "react";
export const useLocalStorate = (keyName, defaultValues) => {
    // muon luu tru vao local storate thi phai khai bao key and values
    const [storeValues, setStoreValues] = useState(() => {
        try{
            //xu ly
            // b1 - lay gia tri tu local storate o trinh duyet
            const value = window.localStorage.getItem(keyName);
            if(value) {
                //co gia tri
                // -> tra giu lieu ve cho storate
                //khi luu du lieu vao local storate thi trinh duyete chi nhan dinh dang la String
                // chuyen tu chuoi json ve object JS
                return JSON.parse(value);
            } else {
                //khong co gia tri
                // luu data vao local Storate
                window.localStorage.setItem(keyName, JSON.stringify(defaultValues));
                return defaultValues;
            }

        } catch(error){
            //bao loi
            console.log(error)
            return defaultValues; //tra gia tri ve cho Storate
        }
    })
    // xu ly cho phan setStoreValues
    const setValue = (newValues) => {
        try{
            //xu ly
            window.localStorage.setItem(keyName,JSON.stringify(newValues));

        } catch(error) {
            //bao loi
            console.log(error)
        }
        setStoreValues(newValues)
    }
    return [storeValues, setValue]
}