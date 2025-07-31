import axios from "axios"

let url="https://localhost:7048/api/BayingDetailsTb/"
export const SaveBayingDetailsReact=(sal, bayingId)=>{
return axios.put(`https://localhost:7048/api/BayingDetailsTb/SaveBayingDetails?BayingID=${bayingId}`, sal)
}
export const GetBayingDetailsByBayingIdReact=(bayingId)=>{
    return axios.get(`${url}GetBayingDetailsByBayingId?BayingID=${bayingId}`)
}