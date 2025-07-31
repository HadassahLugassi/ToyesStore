
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

export const Sal = () => {

    //מיבא את הסל מהסטור
    let sal = useSelector(j => j.sal)
    //מיבא סהכ מבסטור  
    let totalCost=useSelector(j=>j.salAmount)
    // //מיבא את קוד הלקוח מהסטור
    // let custId = useSelector(j => j.currentCust.custId)

    //כדי לאפשר שינוי כמות בסל
    //וגם כדי לאפשר איפוס של הסל
    let myDispatch = useDispatch()
    //
    const add = (id) => {
        myDispatch({ type: 'increaseProdType', payload: id })
    }

    const reduce = (id) => {
        myDispatch({ type: 'decreaseProdType', payload: id })
       
    }
    const deleteItemFromSal=(id)=>{
        myDispatch({type: 'deleteProdType',payload: id})
    }

    let myNavigate = useNavigate()

    //ביצוע קניה
    const doBying = (sal) => {
         //בדיקה שהסל אינו ריק
         if (sal.length==0) {
            alert("הסל ריק")
        }
        else{
           myNavigate('../doBaying')
        }
    }
   

    return <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "85%", padding: "3%" }}>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>שם מוצר</th>
                    <th>מחיר</th>
                    <th>כמות</th>
                    <th>סה"כ</th>
                    <th>תמונה</th>
                    <th>+</th>
                    <th>-</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody>

                {sal.map((x, i) => (<>
                    <tr key={i} >
                        <td>{x.gameName}</td>
                        <td >{x.priceForItem}</td>
                        <td >{x.amount}</td>
                        <td >{x.totalPrice}</td>
                        <td><img src={`https://localhost:7048/${x.img}`} style={{ height: "20vh", width: "20Vh" }}></img></td>
                        <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { add(x.gameId) }}>+</button></td>
                        <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { reduce(x.gameId) }}>-</button></td>
                        <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { deleteItemFromSal(x.gameId) }}>להסרה</button></td>
                    </tr>
                </>

                ))}

            </tbody>
        </table>
        <div className="row text-bg-light border border-3" style={{ margin: "5vh", marginBottom: "0vh", paddingBottom: "0vh", padding: "5vh" }}>
            <div className="col">
                <h5 >סה"כ לתשלום: {totalCost}</h5>
            </div>
            <div className="col">
                <td ><button className="btn btn-outline-dark mrg-2" onClick={() => { doBying(sal) }}>לביצוע הקניה</button></td>
            </div>
        </div>
    </div>
}
