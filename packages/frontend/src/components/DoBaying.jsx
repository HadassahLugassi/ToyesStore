import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { saveBayingBLReact } from "../axios/ByingAxios"
import { SaveBayingDetailsReact } from "../axios/ByingDetail"
import { getGameByIdReact, updateGameByIdReact } from "../axios/GamesAxios"
import { useState } from "react"
import { isExistCustomerReact, UpdateCustomerCreditCardTblBL } from "../axios/CustomersAxios"

export const DoBying = () => {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [is, setIs] = useState(true)
    // כדי לאפשר איפוס של הסל
    let myDispatch = useDispatch()
    //משתנה מהסטור
    let isManager = useSelector((j) => j.isManager)

    const setIsManager = (flag) => {
        myDispatch({ type: 'setIsManagerType', payload: flag })

    }
    const f1 = async () => {
        if (pass == "" || name == "") {
            alert("יש למלא את כל הפרטים")
        }
        else {
            //בדיקה אם הלקוח קיים
            let y = await isExistCustomerReact(name, pass)
            if (y.data != 0) {
                alert(`שלום ${name} הכנס פרטי תשלום לצורך ביצוע הקניה`)
                setIs(!is)
                myDispatch({ type: 'setCurentUserType', payload: { userName: name, userPass: pass, userId: y.data } })
                setIsManager(false)
            }
            else {
                alert("משתמש לא קיים")
                myNavigate("../connect")
            }
        }

    }




    //מיבא את הסל מהסטור
    let sal = useSelector(j => j.sal)
    //מיבא סהכ מבסטור
    let totalCost = useSelector(j => j.salAmount)
    //מיבא את קוד הלקוח מהסטור
    let custId = useSelector(j => j.currentCust.custId)
    let myNavigate = useNavigate()
    //עדכון מלאי חדש עבור מוצר בודד
    const updateAmount = async (gameId, amountToReduce) => {
        let g = (await getGameByIdReact(gameId)).data
        g.amount = g.amount - amountToReduce
        updateGameByIdReact(gameId, g)
    }

    //שמירת בקניה
    const saveBaying = async (sal, custId) => {

        if ((cart.number).length != 16 || (cart.digits).length != 3 || (cart.date).length != 4)
            alert("פרטי אשרי אינם תקינים")
        else {
            debugger
            let cart1 = `${String(cart.number)} ${String(cart.digits)} ${String(cart.date)} ${String(cart.name)}`
            let y = await UpdateCustomerCreditCardTblBL(custId, cart1)
            if (y) {
                //שומרת את הקניה ב3 פעולות
                //1
                //שורה בטלת קניות
                let byingId = await saveBayingBLReact(sal, custId);
                //2
                //ששורה בטבלת פרטי קניות עבור כל מוצר הסל
                SaveBayingDetailsReact(sal, byingId.data)
                //3
                //עדכון כמות המוצרים במלאי:
                sal.forEach(x => {
                    updateAmount(x.gameId, x.amount)
                });
                alert("הקניה בוצעה בהצלחה")
                //ריקון הסל מהמוצרים ושינוי סה"כ לתשלום
                myDispatch({ type: 'restartSalType', payload: [] })
                setIs(!is)
                myNavigate('../home')
            }
        }
    }





    const [cart, setCart] = useState({
        number: "",
        date: "",
        digits: "",
        name: ""
    })

    return <div>
        <form>
            {(is) && <div className="border border-3  text-bg-light" style={{ margin: "20vh", padding: "10vh" }}>
                <div className="row">
                    <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>הזדהות לצורך ביצוע הקניה</h5>

                    <div className="col">
                        <label htmlFor="name ">שם משתמש</label>
                        <input type="text" className="form-control" placeholder="הכנס שם משתמש" id="name" onBlur={(e) => setName(e.target.value)} ></input>
                    </div>
                    <div className="col" >
                        <label htmlFor="p">סיסמא</label>
                        <input type="password" className="form-control" placeholder="הכנס סיסמא" id="p" onBlur={(e) => setPass(e.target.value)}></input>
                    </div>
                </div>
                <div className="row " >

                    <div className="col" style={{ marginTop: "4vh" }}>

                        <input type="button" onClick={() => { f1() }} className="form-control btn btn-outline-dark" value="כניסה" />
                    </div>
                </div>
            </div>}
            {(!is) &&
                <div className="border border-3  text-bg-light" style={{ margin: "20vh", padding: "10vh" }}>
                    <div className="row">
                        <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>סה"כ לתשלום {totalCost}$</h5>
                        <h5 style={{ textAlign: "center", marginBottom: "10vh" }}> הכנס פרטי תשלום</h5>
                        <div className="col" >
                            <label htmlFor="number">מספר אשראי 16 ספרות</label>
                            <input type="text" className="form-control" placeholder="מספר אשראי 16 ספרות" id="number" onBlur={(e) => { setCart({ ...cart, number: e.target.value }) }} ></input>
                        </div>
                        <div className="col" >
                            <label htmlFor="date">תוקף ב 4 ספרות</label>
                            <input type="text" className="form-control" placeholder=" תוקף ב 4 ספרות" id="date" onBlur={(e) => { setCart({ ...cart, date: e.target.value }) }}  ></input>
                        </div>
                        <div className="col" >
                            <label htmlFor="3digits">3 ספרות בגב הכרטיס</label>
                            <input type="text" className="form-control" placeholder="3 ספרות בגב הכרטיס" id="3digits" onBlur={(e) => { setCart({ ...cart, digits: e.target.value }) }} ></input>
                        </div>
                        <div className="col" >
                            <label htmlFor="p">שם בעל הכרטיס</label>
                            <input type="text" className="form-control" placeholder="שם בעל הכרטיס" id="p" onBlur={(e) => { setCart({ ...cart, name: e.target.value }) }}  ></input>
                        </div>

                        <div className="row " >

                            <div className="col" style={{ marginTop: "4vh" }}>

                                <input type="button" onClick={() => { saveBaying(sal, custId) }} className="form-control btn btn-outline-dark" value="לתשלום וסיום" />
                            </div>


                        </div>
                    </div >

                </div>}
        </form >
    </div >

}




