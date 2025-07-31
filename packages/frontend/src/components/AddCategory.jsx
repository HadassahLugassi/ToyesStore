import { useEffect, useState } from "react"
import { addCategoryRract, getCategoriesReact } from "../axios/CategoryAxios"
import { AddGameReact } from "../axios/GamesAxios"


export const AddCategory = () => {

    //קטגוריה חדשה
    const [newC, setNewC] = useState(
        {
            categoryId: 0,
            categoryName: ""
        }
    )

    //פונקצית שמירת קטגוריה חדשה
    const saveNewC = async () => {
        let answer = (await addCategoryRract(newC)).data
        if (answer) {
            alert("קטגוריה הוספה בהצלחה")

        }
        else {
            alert("קטגוריה לא הוספפה")
        }
    }

    return <div>
        <div className="row text-bg-light" style={{ margin: "5vh", marginBottom: "0vh", paddingBottom: "0vh", padding: "10vh" }}>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>הוספת קטגוריה חדשה</h5>
        
            <div className="col">
                <label htmlFor="1">שם קטגוריה</label>
                <input type="text" className="form-control" id="1" onBlur={(e) => { setNewC({ ...newC, categoryName: e.target.value }) }} ></input>
            </div>
        </div>
        <div className="row text-bg-light" style={{ margin: "5vh", marginTop: "0vh", padding: "10vh", paddingTop: "0vh" }}>
            <input type="button" className="btn btn-outline-dark" style={{ marginTop: "1.5vh" }}
                onClick={() => { saveNewC() }} value="שמור" />
        </div>

    </div>
}