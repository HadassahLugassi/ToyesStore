import { useEffect, useState } from "react";
import { DeleteGameByIdReact, GetAllGamesReact, updateGameByIdReact } from "../axios/GamesAxios";
import { AddGame } from "./AddGame";
import { Link, Outlet } from "react-router-dom";
import { getCategoriesReact } from "../axios/CategoryAxios";

export const AllProducts = () => {

    //כל המשחקים
    const func = async () => {
        if (gamesList.length == 0) {
            let y = (await GetAllGamesReact());
            setGamesList(y.data)
        }
    }


    const [gamesList, setGamesList] = useState([])
    useEffect(() => {
        func()
    },
        [])


    //פונקצית מחיקת מוצר
    const deleteGame = async (id) => {
        let answer = await DeleteGameByIdReact(id)
        if (answer.data) {
            let y = (await GetAllGamesReact());
            setGamesList(y.data)
            alert("מוצר נמחק")
        }
        else {
            alert("אין אפשרות למחוק מוצר זה מכיוון שהוא מקושר לטבלאות אחרות")
        }
    }

    //סטטים
    const [newGame, setNewGame] = useState([])
    const [isUpdate, setIsUpdate] = useState(0)
    const [isAddGame, setIsAddGame] = useState(false)

    //פונקצית עדכון ראשית
    const setIsUpdateBig = (x) => {
        setIsUpdate(x.gamesId)
        setNewGame(x)
    }

    //פונקצית עדכון מוצר
    const saveChanges = async () => {
        let answer = await updateGameByIdReact(newGame.gamesId, newGame)

        if (answer.data) {
            let y = (await GetAllGamesReact());
            setGamesList(y.data)
            alert("המוצר שונה בהצלחה")
            setIsUpdate(0)
        }
        else {
            alert("המוצר לא שונה")
        }
    }

    //פונקצית עדכון כל המוצרים בתצוגה
    const save = async () => {
        let y = (await GetAllGamesReact());
        setGamesList(y.data)
    }


     //הקטגוריות - לצורך הסלקט של העדכון
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

    return <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "85%", padding: "3%" }}>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>קטגוריה</th>
                    <th>קוד מוצר</th>
                    <th>שם מוצר</th>
                    <th>מחיר</th>
                    <th>כמות במלאי</th>
                    <th>תמונה</th>
                    <th>עדכון</th>
                    <th>מחיקה</th>
                </tr>
            </thead>
            <tbody>

                {gamesList.map((x, i) => (<>
                    {(isUpdate !== x.gamesId) &&
                        <tr key={i} >
                            <td>{x.categoryName}</td>
                            <td>{x.gamesId}</td>
                            <td>{x.gamesName}</td>
                            <td >{x.price}</td>
                            <td >{x.amount}</td>
                            <td><img src={`https://localhost:7048/${x.img}`} style={{ height: "20vh", width: "20Vh" }}></img></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { setIsUpdateBig(x) }}>עדכון</button></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { deleteGame(x.gamesId) }}>מחיקה</button></td>
                        </tr>
                    }
                    {/* אם רוצים לשנות את המוצר הנוכחי */}
                    {(isUpdate === x.gamesId) &&
                        <tr key={i} >
                            <td> <select class="form-select" id="sel1" name="sellist1" onInput={(e) => { setNewGame({ ...newGame, categoryId: e.target.value }) }}>
                                {categories.map((x) => (
                                    <option value={x.categoryId}>{x.categoryName}</option>
                                ))
                                }
                            </select></td>
                            <td>{x.gamesId}</td>
                            <td><input type="text" defaultValue={x.gamesName} onBlur={(e) => { setNewGame({ ...newGame, gamesName: e.target.value }) }}></input></td>
                            <td ><input type="number" defaultValue={x.price} onBlur={(e) => { setNewGame({ ...newGame, price: e.target.value }) }} style={{ width: "50%" }}></input></td>
                            <td ><input type="number" defaultValue={x.amount} style={{ width: "50%" }} onBlur={(e) => { setNewGame({ ...newGame, amount: e.target.value }) }} ></input></td>
                            <td><input type="text" defaultValue={x.img} onBlur={(e) => { setNewGame({ ...newGame, img: e.target.value }) }}></input></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { setIsUpdate(0) }}>ביטול</button></td>
                            <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { saveChanges() }}>שמור</button></td>
                        </tr>
                    }
                </>
                ))}

            </tbody>
        </table>





        <div className="row" style={{ margin: "5vh", padding: "5vh" }}>
            <Link to={'addGame'} className="btn btn-outline-dark" onClick={() => { setIsAddGame(!isAddGame); save() }} style={{ marginTop: "1.5vh" }} >{(!isAddGame) ? "הוספת מוצר" : "סגירת הוספת מוצר ועדכון המוצרים החדשים"}</Link>
        </div>
        {(isAddGame) &&
            <div><Outlet></Outlet></div>}
    </div>
}


