import axios from "axios"

 const url="https://localhost:7048/api/GamesTbl/"

export const GetAllGamesReact=()=>{
    return axios.get(`${url}GetAllGames`)
}

export const getGameByIdReact=(id)=>{
    return axios.get(`${url}getGameById?id=${id}`)
}

export const getGameByByCategoryIdReact=(id)=>{
    return axios.get(`${url}GetGamesTblByCategoryId?c=${id}`)
}

export const AddGameReact=(obj)=>{
    return axios.put(`${url}AddGame`,obj)
}

export const DeleteGameByIdReact=(id)=>{
   return axios.delete(`${url}DeleteGameById?id=${id}`)
}
export const updateGameByIdReact=(id,newGame)=>{
    return axios.post(`${url}UpdateGameById?id=${id}`,newGame)
}



