import axios from "axios"

 const url="https://localhost:7048/api/CustomersTbl/"

    export const addCustomersReact=(cust)=>{
        return axios.put(`${url}AddCustomers`,cust)
    }


    export const isExistCustomerReact=(name,pass)=>{
        return axios.put(`${url}IsExistCustomer?name=${name}&pass=${pass}`)
    }

    export const UpdateCustomerCreditCardTblBL=(id,cart)=>{
        return axios.post(`${url}UpdateCustomerTblBL?id=${id}&cart=${cart}`)
    }
