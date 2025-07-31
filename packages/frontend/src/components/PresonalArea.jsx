import { useEffect, useState } from "react";
import { GetBayingByCustId } from "../axios/ByingAxios";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export const PresonalArea = () => {

    const [byingList, setBayingList] = useState([])
    let custId = useSelector(j => j.currentCust.custId)
    //פונקציה השולפת את כל הקניות של הלקוח הנוכחי
    const getFromService = async () => {
        if (byingList.length == 0) {
            let x = (await GetBayingByCustId(custId));
            setBayingList(x.data)
            console.log(x.data, x)
        }
    }
    useEffect(() => { getFromService() }, [])
//במשתנה זה ישמר האנדקס של הקניה שעליה נפתח פרטים נוספים
//כך יהיה ניתן לעשות טבלה עד לקניה זו
//מתחת הקניה לשים את הילד - הפרטים הנוספים
//ואז להמשיך ולרוץ על כל שאר הקניות
    const [is, setIs] = useState(-1)

    return <div style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "85%", padding: "3%" }}>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>קוד הקניה</th>
                    <th>תאריך ביצוע הקניה</th>
                    <th>תשלום כולל</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {byingList.map((x, i) => (<>
                    {(i<=is)&&<tr key={i} >
                        <td>{x.bayingId}</td>
                        <td >{( x.dateOfBaying)  }</td>
                        <td >{x.price}</td>
                        <td><Link onClick={() => { setIs(i) }} to={`ShowBayingDetails/${x.bayingId}`} class="btn btn-outline-dark mrg-2" >פרטים נוספים</Link></td>
                    </tr>}
                </>

                ))}
            </tbody>
        </table>
        { (is>-1)&& <div  className="row text-bg-light" style={{ margin: "5vh",padding: "5vh" }} > <Outlet></Outlet>
                <button type="button" class="btn btn-outline-dark" style={{ width: "100%" }} onClick={() => { setIs(-1) }}>סגירת פרטים נוספים</button>
        </div>}
        <table className="table table-hover">
            <tbody>
                {byingList.map((x, i) => (<>
                   { (i>is)&&<tr key={i} >
                        <td>{x.bayingId}</td>
                        <td >{x.dateOfBaying}</td>
                        <td >{x.price}</td>
                        <td><Link onClick={() => { setIs(i) }} to={`ShowBayingDetails/${x.bayingId}`} class="btn btn-outline-dark mrg-2" >פרטים נוספים</Link></td>
                    </tr>}
                </>

                ))}
            </tbody>
        </table>
    </div>
}
