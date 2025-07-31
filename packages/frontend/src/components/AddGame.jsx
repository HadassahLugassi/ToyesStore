import { useEffect, useState } from "react"
import { getCategoriesReact } from "../axios/CategoryAxios"
import { AddGameReact } from "../axios/GamesAxios"


export const AddGame = () => {

    //מוצר חדש שיתמלא
    const [newGame, setNewGame] = useState(
        {
            gamesId: 0,
            gamesName: "",
            categoryId: 1,
            price: 0,
            img: "",
            amount: 0,
            categoryName: ""
        }

    )
    //הקטגוריות - לצורך הסלקט
    const [categories, setCategories] = useState([])

    const func2 = async () => {
        if (categories.length == 0) {
            let x = (await getCategoriesReact(newGame))
            setCategories(x.data)
            console.log(categories)
        }
    }

    useEffect(() => {
        func2()
    },
        [])


//פונקצית שמירת מוצר חדש
const saveNewGame=async(newGame)=>{
   let answer=(await AddGameReact(newGame)).data
   debugger
   if(answer){
    alert("המוצר הוסף בהצלחה")

   }
   else{
    alert("המוצר לא הוסף, אין אפשרות להוסיף מוצר ללא קטגוריה!")
   }
}

    return <div>
        <div className="row text-bg-light" style={{ margin: "5vh", marginBottom: "0vh", paddingBottom: "0vh", padding: "10vh" }}>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>הוספת מוצר חדש</h5>
            <div className="col">
                <label for="sel1" className="form-label">קוד קטגוריה</label>
                <select class="form-select" id="sel1"  onChange={(e) => {debugger; setNewGame({ ...newGame, categoryId: e.target.value }) }}>
                    {categories.map((x) => (
                        <option value={x.categoryId}>{x.categoryName}</option>
                    ))
                    }
                </select>
            </div>
            <div className="col">
                <label htmlFor="1">שם מוצר</label>
                <input type="text" className="form-control" id="1" onBlur={(e) => { setNewGame({ ...newGame, gamesName: e.target.value }) }} ></input>
            </div>

            <div className="col">
                <label htmlFor="2">מחיר</label>
                <input type="number" className="form-control" id="2" onBlur={(e) => { setNewGame({ ...newGame, price: e.target.value }) }}></input>
            </div>
            <div className="col">
                <label htmlFor="3">כמות במלאי</label>
                <input type="number" className="form-control" id="3" onBlur={(e) => { setNewGame({ ...newGame, amount: e.target.value }) }}></input>
            </div>
            <div className="col">
                <label htmlFor="4">שם תמונה</label>
                <input type="text" className="form-control" id="4" onBlur={(e) => { setNewGame({ ...newGame, img: e.target.value }) }}></input>
            </div>

        </div>
        <div className="row text-bg-light" style={{ margin: "5vh", marginTop: "0vh", padding: "10vh", paddingTop: "0vh" }}>
            <input type="button" className="btn btn-outline-dark" style={{ marginTop: "1.5vh" }}
                onClick={() => { saveNewGame(newGame) }} value="שמור" />
        </div>

    </div>
}