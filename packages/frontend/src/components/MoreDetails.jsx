import { useParams } from "react-router-dom"
import { getGameByIdReact } from "../axios/GamesAxios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const MoreDetails = () => {

    let params = useParams({})
    console.log(params.id)



    const func = async () => {
        if (game == 0) {
            let y = (await getGameByIdReact(params.id));
            setGame(y.data)
        }
    }


    const [game, setGame] = useState(0)
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
            totalPrice: x.price * 1,
            img: x.img
        }

        //מפעיל את הפעולה של הוספת מוצר לסל הגלובלי
        myDispatch({ type: 'addProdToSalType', payload: prdSal })
        alert(`${prdSal.gameName} נוסף לסל`)
    }


    return <div>
        <div className="row text-bg-light" style={{ margin: "5vh", marginBottom: "0vh", paddingBottom: "0vh", padding: "10vh" }}>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <td><img src={`https://localhost:7048/${game.img}`} style={{ height: "30vh", width: "30Vh" }}></img></td>
                    </div>
                    <div className="col-4">
                        <button type="button" class="btn btn-outline-dark" onClick={() => { fAddProd(game) }}>לסל</button>
                    </div></div>
            </div>




            <div className="col">
                <div className="row">
                    <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>פרטים נוספים על המוצר {game.gamesName}</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <td >קטגורית מוצר: {game.categoryName}</td>
                    </div>
                    <div className="col">
                        <td>קוד מוצר: {game.gamesId}</td>

                    </div>
                    <div className="col">
                        <td>שם מוצר: {game.gamesName}</td>
                    </div>

                    <div className="col">
                        <td >מחיר מוצר: {game.price}</td>
                    </div>
                    <div className="col">
                        <td >כמות במלאי: {game.amount}</td>
                    </div>
                </div>
            </div>


        </div>
    </div>

}