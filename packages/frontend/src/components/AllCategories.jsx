import { useEffect, useState } from "react"
import { deleteCategoryRract, getCategoriesReact, updateCategoryByIdRract } from "../axios/CategoryAxios"
import { AddGame } from "./AddGame"
import { Link, Outlet } from "react-router-dom"

export const AllCategories = () => {

    //הקטגוריות
    const [categories, setCategories] = useState([])

    const func2 = async () => {
        if (categories.length == 0) {
            let x = (await getCategoriesReact())
            setCategories(x.data)
        }
    }

    useEffect(() => {
        func2()
    },
        [])


    //פונקצית עדכון קטגוריה
    const saveChanges = async () => {
        let answer = await updateCategoryByIdRract(newCategory.categoryId, newCategory)

        if (answer.data) {
            let y = (await getCategoriesReact());
            setCategories(y.data)
            alert("הקטגוריה שונתה בהצלחה")
            setIsUpdate(0)
        }
        else {
            alert("קטגוריה לא שונתה")
        }
    }

    //פונקצית מחיקת קטגוריה
    const DeleteCategory = async (id) => {
        let answer =( await deleteCategoryRract(id))
        if (answer.data) {
            let x = (await getCategoriesReact())
            setCategories(x.data)
            alert("קטגוריה נמחקה")
        }
        else {
            alert("אין אפשרות למחוק קטגוריה זו מכיוון שהיא מקושרת כבר לטבלאות אחרות")
        }
    }

    const [newCategory, setnewCategory] = useState([])
    const [isUpdate, setIsUpdate] = useState(0)
    const [isAddCategory, setIsAddCategory] = useState(false)
    
    const setIsUpdateBig = (x) => {
        setIsUpdate(x.categoryId)
        setnewCategory(x)
    }
     //פונקצית עדכון כל המוצרים בתצוגה
   const save=async()=>{
    let y = (await getCategoriesReact());
    setCategories(y.data)
}

    return <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "85%", padding: "3%" }}>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>קוד קטגוריה</th>
                    <th>שם קטגוריה</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {categories.map((x, i) => (<>
                    {(isUpdate !== x.categoryId) &&
                        <tr key={i} >
                            <td>{x.categoryId}</td>
                            <td>{x.categoryName}</td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { setIsUpdateBig(x) }}>עדכון</button></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { DeleteCategory(x.categoryId) }}>מחיקה</button></td>
                        </tr>
                    }
                    {(isUpdate === x.categoryId) &&
                        <tr key={i} >
                            <td>{x.categoryId}</td>
                            <td><input type="text" defaultValue={x.categoryName}   onBlur={(e) => { setnewCategory({ ...newCategory, categoryName: e.target.value }) }}></input></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { setIsUpdate(0) }}>ביטול</button></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { saveChanges() }}>שמור</button></td>
                        </tr>
                    }
                </>
                ))}

            </tbody>
        </table>
        <div className="row" style={{ margin: "5vh", padding: "5vh" }}>
            <Link to={'addCategory'} className="btn btn-outline-dark" onClick={() => { setIsAddCategory(!isAddCategory); save()}} style={{ marginTop: "1.5vh" }} >{(!isAddCategory)?"הוספת קטגוריה":"סגירת הוספת קטגוריות ועדכון הקטגוריות החדשות"}</Link>
        </div>
        {(isAddCategory) &&
       <div><Outlet></Outlet></div>}
    </div>
}
    
    
    
