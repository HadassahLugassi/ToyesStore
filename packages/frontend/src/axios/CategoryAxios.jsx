import axios from "axios"

let url="https://localhost:7048/api/CategoryTbl/"

 export const getCategoriesReact=()=>{
    return axios.get(`${url}GetCategories`)
}

export const getCategoryByIdReact=(id)=>{
    return axios.get(`${url}GetCategoryById?id=${id}`)
}

export const updateCategoryByIdRract=(id,obj)=>{
    return axios.post(`${url}UpdateCategoryById?id=${id}`,obj)
}

export const addCategoryRract=(obj)=>{
    return axios.put(`${url}AddCategory`,obj)
}

export const deleteCategoryRract=(id)=>{
    return axios.delete(`${url}DeleteCategory?id=${id}`) 

}