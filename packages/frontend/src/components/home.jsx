import { useEffect, useState } from "react"
import { GetAllGamesReact } from "../axios/GamesAxios";
import { useDispatch, useSelector } from "react-redux";
import { MoreDetails } from "./MoreDetails";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
    //סיכרונית כי היא קוראת לפונקציה סיכרונית
    const func = async () => {
        //to prevent a out finish loop
        if (gamesList.length == 0) {
            //קבלת הנתונים מהשרת
            let y = (await GetAllGamesReact());
            setGamesList(y.data)
        }
    }

    const [gamesList, setGamesList] = useState([])
    useEffect(() => {
        func()
    },
        [])
    //כדי להוסיף מוצר לסל הגלובלי
    let myDispatch = useDispatch()

    //פונקציה המופעלת בעת לחיצה על הוספה לסל
    const fAddProd = (x) => {
        let prdSal = {

            gameId: x.gamesId,
            gameName: x.gamesName,
            amount: 1,
            priceForItem: x.price,
            totalPrice: x.price,
            img:String( x.img)

        }

        //מפעיל את הפעולה של הוספת מוצר לסל הגלובלי
        myDispatch({ type: 'addProdToSalType', payload: prdSal })
        alert(`${prdSal
            .gameName} נוסף לסל`)
    }

    const [is, setIs] = useState(false)

    return <>
        {(is) && <div> <Outlet></Outlet>
            <div className="row text-bg-light" style={{ margin: "5vh", marginTop: "0vh", padding: "10vh", paddingTop: "0vh" }}>
                <button type="button" class="btn btn-outline-dark" style={{ width: "100%" }} onClick={() => { setIs(false) }}>סגירת פרטים נוספים</button>
            </div>
        </div>}
        <div className="row" >
            {gamesList.map((x, i) => (
                <div className="container mt-3 col-3" key={i}>
                    <div className="card " style={{ width: "40vh", margin: "1.8%", marginTop: "15%", padding: "1.1%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", textAlign: "center" }} >
                        <div className="card-body">
                            <img src={`https://localhost:7048/${x.img}`} style={{ width: "20vh", height: "20vh" }} ></img>
                            <h4 className="card-title">{x.gamesName}</h4><br />
                            <p className="card-text">מחיר: {x.price}$</p><br />
                            <Link onClick={() => { setIs(true) }} to={`moreDetails/${x.gamesId}`} class="btn btn-outline-dark mrg-2" >פרטים נוספים</Link>
                            <button type="button" class="btn btn-outline-dark" onClick={() => { fAddProd(x) }}>לסל</button>
                        </div></div>
                </div>))}
        </div></>
}
