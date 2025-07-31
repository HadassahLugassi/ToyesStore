
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


export const Menue = () => {

  let userName = useSelector(j => j.currentCust.custName)
  let userId = useSelector(j => j.currentCust.custId)
  let isManager = useSelector(j => j.isManager)
  return<>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark" style={{height:"12vh"}}>
  <div class="container-fluid">
    <div>
    <ul class="navbar-nav">
      <li class="nav-item">
      <NavLink className="nav-link" to={'home'}>בית</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to={'connect'}>הרשמה</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to={'login'}>התחברות</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to={'sal'}>סל קניות</NavLink>
    </li>
    {isManager &&
      <li className="nav-item">
        <NavLink className="nav-link" to={'allCategories'}>תצוגה ועריכת קטגוריות</NavLink>
      </li>
    }
    {isManager &&
      <li className="nav-item">
        <NavLink className="nav-link" to={'allProducts'}>תצוגה ועריכת מוצרים</NavLink>
      </li>
    }
    {(userId !== 0 ) &&
      <li className="nav-item">
        <NavLink className="nav-link" to={'personalArea'}>אזור אישי שלום {userName}</NavLink>
      </li>
    }
    {(isManager) &&
      <li className="nav-item">
        <div className="nav-link">שלום מנהל</div>
      </li>
    }
  </ul>
  </div>
  <div>
    <img className="nav-link" src={`https://localhost:7048/mylogo1.png`} style={{height:"12vh"}}></img>
    </div>
  </div>
  </nav>

</>
  
}











  //  <ul className="nav nav-tabs">

  //   <li className="nav-item">
  //     <NavLink className="nav-link" to={'home'}>בית</NavLink>
  //   </li>
  //   <li className="nav-item">
  //     <NavLink className="nav-link" to={'connect'}>הרשמה</NavLink>
  //   </li>
  //   <li className="nav-item">
  //     <NavLink className="nav-link" to={'login'}>התחברות</NavLink>
  //   </li>
  //   <li className="nav-item">
  //     <NavLink className="nav-link" to={'sal'}>סל קניות</NavLink>
  //   </li>
  //   {isManager &&
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to={'allCategories'}>תצוגה ועריכת קטגוריות</NavLink>
  //     </li>
  //   }
  //   {isManager &&
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to={'allProducts'}>תצוגה ועריכת מוצרים</NavLink>
  //     </li>
  //   }
  //   {(userId !== 0 ) &&
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to={'personalArea'}>אזור אישי שלום {userName}</NavLink>
  //     </li>
  //   }
  //   {(isManager) &&
  //     <li className="nav-item">
  //       <div className="nav-link">שלום מנהל</div>
  //     </li>
  //   }
  // </ul>



