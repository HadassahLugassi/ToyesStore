import { useState } from "react"
import { addCustomersReact, isExistCustomerReact } from "../axios/CustomersAxios"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export const Connect = () => {
    const [cust, setCust] = useState({
        "custId": 0,
        "custName": "",
        "custPass": "",
        "creditDetails": ""
    })

    let myDispatch = useDispatch()
     //משתנה מהסטור
     let isManager = useSelector((j) => j.isManager)

 
     const setIsManager = (flag) => {
         myDispatch({ type: 'setIsManagerType', payload: flag })
 
     }
 
    const nevigate = useNavigate()
    const f1 = async () => {
        if (cust.custName === "" || cust.custPass == "" || cust.creditDetails == "") {
            alert("יש למלאות את כל הפרטים")
        }

        else {
            if(!cust.creditDetails.includes("@")){
                alert("כתובת המייל אינה תקינה")
            }
            else{

            let output = await addCustomersReact(cust)
            if (output.data) {
                alert("נרשמת בהצלחה!")
                setIsManager(false)
                let y = await isExistCustomerReact(cust.custName, cust.custPass)
                myDispatch({ type: 'setCurentUserType', payload: { userName: cust.custName, userPass: cust.custPass, userId: y.data } })
                nevigate("../home")
            }
            else {
                alert("סיסמה תפוסה, נסה שוב")
            }
           

        }
    }
    }
    return <div>
        <form >
            <div className="border border-3  text-bg-light" style={{ margin: "20vh", padding: "10vh" }}>
                <div className="row">
                    <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>פרטים להרשמה</h5>

                    <div className="col">
                        <label htmlFor="name ">שם משתמש</label>
                        <input type="text" className="form-control" placeholder="הכנס שם משתמש" id="name" required onBlur={(e) => { setCust({ ...cust, custName: e.target.value }) }}></input>
                    </div>
                    <div className="col" >
                        <label htmlFor="p">סיסמא</label>
                        <input type="password" className="form-control" placeholder="הכנס סיסמא" id="p" required onBlur={(e) => { setCust({ ...cust, custPass: e.target.value }) }}></input>
                    </div>
                    {/* <div className="col" >
                    <label htmlFor="p">פרטי אשראי</label>
                    <input type="password" className="form-control" placeholder="הכנס פרטי אשראי" id="p" required onBlur={(e) => { setCust({ ...cust, creditDetails: e.target.value }) }}></input>
                </div> */}
                    {/* נתון זה לא ישמר בשום מקום כתבתי אותו כי כך היה כתוב בדרישות - לקלוט פרטים נוספים ללקוח ולבצע בדיקות תקינות */}
                    {/* שמרתי נתון זה בפרטי אשראי והוא ידרס כשהלקוח יבצע קניה */}
                    <div className="col">
                        <label htmlFor="name ">דואר אלקטרוני</label>
                        <input type="text" className="form-control" placeholder="הכנס דואר אלקטרוני" id="name" required onBlur={(e) => { setCust({ ...cust, creditDetails: e.target.value }) }}></input>
                    </div>

                </div>
                <div className="row " >

                    <div className="col" style={{ marginTop: "4vh" }}>

                        <input type="button" onClick={() => { f1() }} className="form-control btn btn-outline-dark" value="כניסה" />
                    </div>


                </div>
            </div>


        </form>
    </div>

}




