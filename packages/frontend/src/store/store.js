import { createStore } from 'redux';
import produce from 'immer';


//יצירת האוביקט הגלובלי
const Mystate = {
    isManager: false,
    currentCust:
    {
        custId: 0,
        custName: "",
        custPass: ""
    },
    //סל מוגדר בדיוק כמו בDTO
    sal: [
        //האוביקטים שיתווספו
        // {
        //     gameId: 11,
        //     gameName: "",
        //     amount: 2,
        //     priceForItem: 10,
        //     totalPrice: 1000,
        //     img:""
        // }
    ]
    ,
    salAmount: 0

}


//אוביקט שמכיל את :
//סטייט+פעולות שהם הפעולות שאפשר לעשות על הסטייט
//הסטייט עצמו
const reducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'setIsManagerType': {
                state.isManager = action.payload
                break;
            }
            case 'setCurentUserType': {
                state.currentCust.custPass = action.payload.userPass
                state.currentCust.custName = action.payload.userName
                state.currentCust.custId = action.payload.userId
                break;
            }
            case 'addProdToSalType': {
                //בדיקה אם כבר קיים המוצר
                if (state.sal.find(x => x.gameId === action.payload.gameId)) {
                    //אם קיים - עדכון
                    let p = state.sal
                    p.forEach(x => {
                        if (x.gameId === action.payload.gameId) {
                            x.amount = x.amount + 1
                            x.totalPrice = x.totalPrice + x.priceForItem
                        }
                    })
                    state.sal = p
                }
                else {
                    //אם לא קיים - הוספה
                    let p3 = state.sal
                    state.sal = p3.concat(action.payload)

                }
                state.salAmount = state.salAmount + action.payload.priceForItem

                break;
            }
            case 'restartSalType': {
                state.sal = []
                state.salAmount = 0;
                break;
            }
            case 'increaseProdType': {
                let p = state.sal
                p.forEach(x => {
                    if (x.gameId === action.payload) {
                        x.amount = x.amount + 1
                        x.totalPrice = x.totalPrice + x.priceForItem
                        state.salAmount = state.salAmount + x.priceForItem
                    }
                })
                state.sal = p

                break;
            }
            case 'decreaseProdType': {
                let p = state.sal
                p.forEach(x => {
                    if (x.gameId === action.payload) {
                        if (x.amount > 1) {
                            x.amount = x.amount - 1
                            x.totalPrice = x.totalPrice - x.priceForItem

                        }
                        else {
                            p = p.filter(x => x.gameId !== action.payload)
                        }
                        state.salAmount = state.salAmount - x.priceForItem
                    }
                })
                state.sal = p
                break;

            }
            case 'deleteProdType': {
                let p = state.sal
                p.forEach(x => {
                    if (x.gameId === action.payload) {
                        {
                            p = p.filter(x => x.gameId !== action.payload)
                        }
                        state.salAmount = state.salAmount - x.priceForItem * x.amount
                    }
                })
                state.sal = p
                break;
            }


        }
    }, Mystate)
//יצירת הסטור שמקבל את הרדוסר עם הפעולות והסטייט 
const store = createStore(
    reducer);
//הגדרה שהסטור הכללי הוא הסטור שהגדרנו
window.store = store;
//יצוא הסטור
export default store;
