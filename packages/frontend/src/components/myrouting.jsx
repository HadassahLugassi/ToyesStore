import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Login } from "./login"
import { Sal } from "./Sal"
import { Connect } from "./Connect"
import { AllCategories } from "./AllCategories"
import { AllProducts } from "./AllProducts"
import { AddGame } from "./AddGame"
import { PresonalArea } from "./PresonalArea"
import { AddCategory } from "./AddCategory"
import { MoreDetails } from "./MoreDetails"
import { ShowBayingDetails } from "./ShowBayingDetails"
import { DoBying } from "./DoBaying"

export const MyRouting = () => {
    return <div>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}>
                <Route path="moreDetails/:id" element={<MoreDetails></MoreDetails>}></Route>
            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="sal" element={<Sal></Sal>}></Route>
            <Route path="connect" element={<Connect></Connect>}></Route>
            <Route path="allCategories" element={<AllCategories></AllCategories>}>
                <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
            </Route>
            <Route path="allProducts" element={<AllProducts></AllProducts>}>
                <Route path="addGame" element={<AddGame></AddGame>}></Route>
            </Route>
            <Route path="personalArea" element={<PresonalArea></PresonalArea>}>
                <Route path="ShowBayingDetails/:bayingId" element={<ShowBayingDetails></ShowBayingDetails>}></Route>
            </Route>
            <Route path="doBaying" element={<DoBying></DoBying>}></Route>
        </Routes>

    </div>
}