import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { isExistCustomerReact } from "../axios/CustomersAxios"
import { useDispatch, useSelector } from "react-redux"

export const Login = () => {

    //משתנה מהסטור
    let isManager = useSelector((j) => j.isManager)
    let myDispatch = useDispatch()

    const setIsManager = (flag) => {
        myDispatch({ type: 'setIsManagerType', payload: flag })

    }

    const nevigate = useNavigate()
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const f1 = async () => {
        if (name == 'manager' && pass == '123') {
            alert(`שלום מנהל`)
            setIsManager(true)
            myDispatch({ type: 'setCurentUserType', payload: { userName: "מנהל", userPass: "סיסמאת מנהל", userId: 0 } })
            nevigate("../home")
        }
        else {
            if (pass == "" || name == "") {
                alert("יש למלא את כל הפרטים")
            }
            else {
                let y = await isExistCustomerReact(name, pass)
                if (y.data != 0) {
                    alert(`שלום ${name}`)
                    setIsManager(false)
                    myDispatch({ type: 'setCurentUserType', payload: { userName: name, userPass: pass, userId: y.data } })
                    nevigate("../home")
                }
                else {
                    alert("משתמש לא קיים")
                    nevigate("../connect")
                }
            }
        }
    }





    return <div> <form >
        <div className="border border-3  text-bg-light"  style={{ margin: "20vh", padding: "10vh" }}>
            <div className="row" >
                <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>פרטים להתחברות</h5>

                <div className="col">
                    <label htmlFor="name ">שם משתמש</label>
                    <input type="text" className="form-control" placeholder="הכנס שם משתמש" id="name" onBlur={(e) => setName(e.target.value)} ></input>
                </div>
                <div className="col" >
                    <label htmlFor="p">סיסמא</label>
                    <input type="password" className="form-control" placeholder="הכנס סיסמא" id="p" onBlur={(e) => setPass(e.target.value)}></input>
                </div>

            </div>
            <div className="row" >
                <input type="button" className="btn btn-outline-dark" style={{ marginTop: "5vh" }}
                    onClick={() => { f1() }} value="כניסה" />
            </div>
        </div>


    </form>

    </div>
}
