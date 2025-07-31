import axios from "axios"

let url = "https://localhost:7048/api/BayingTbl/"

export const saveBayingBLReact = (sal,custId) => {

   return axios.put(` https://localhost:7048/api/BayingTbl/SaveBayingBL?custId=${custId}`,sal)
   
}

export const GetBayingByCustId=(custId)=>{
    return axios.get(`${url}GetBayingByCustId?custId=${custId}`)
}
