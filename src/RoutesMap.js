import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Page1 from "./pages/sample/Page1";
import Page2 from "./pages/sample/Page2";
import NoLayout from "./pages/sample/NoLayout";

function RoutesMap(){
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout />}> {/* 감싸는 Layout과 하위 Contents 구성 */}
                <Route path={"/page1"} element={<Page1/>}/>
                <Route path={"/page2"} element={<Page2/>}/>
            </Route>
            <Route path={"/no-layout"} element={<NoLayout/>}/>
        </Routes>
    </BrowserRouter>
}

export default RoutesMap;