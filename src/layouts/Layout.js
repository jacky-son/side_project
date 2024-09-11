import Lnb from "../components/Lnb";
import Top from "../components/Top";
import {Outlet} from "react-router-dom";

function Layout(){
    return <div className="wrap">
        <div className="container">
            <div className="left_area">
                <Lnb/>
            </div>
            <div className="right_area">
                <Top/>
                <div className="contents_area">
                    <Outlet/> {/* 이 부분이 하위 Route에 매핑된 컴포넌트(page1, page2)로 치환됨 */}
                </div>
            </div>
        </div>
    </div>
}

export default Layout;