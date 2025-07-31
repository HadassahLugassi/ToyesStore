import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetBayingDetailsByBayingIdReact } from "../axios/ByingDetail"

export const ShowBayingDetails = () => {
    let prop = useParams()


    const [details, setDetails] = useState([])

    //הפונקציה המביאה את כל פרטי הקניה מהשרת
    const getFromService = async () => {
        if (details.length == 0) {
            let x = (await GetBayingDetailsByBayingIdReact(prop.bayingId))
            setDetails(x.data)
        }
    }
    useEffect(() => {
        getFromService()
    },
        [])

    return <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "85%", padding: "3%" }}>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>שם מוצר</th>
                    <th>מחיר</th>
                    <th>כמות</th>
                    <th>סה"כ</th>
                    <th>תמונה</th>
                </tr>
            </thead>
            <tbody>

                {details.map((x, i) => (<>
                    <tr key={i} >
                        <td>{x.gamesName}</td>
                        <td >{x.price}</td>
                        <td >{x.amount}</td>
                        <td >{x.amount * x.price}</td>
                        <td><img src={`https://localhost:7048/${x.img}`} style={{ height: "10vh", width: "10Vh" }}></img></td>
                    </tr>
                </>

                ))}

            </tbody>
        </table>
    </div>
}
