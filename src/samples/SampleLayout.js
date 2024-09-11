import logo from "../assets/images/logo.png";
 
function SampleLayout() {
    return (
        <div className="wrap">
            <div className="container">
                <div className="left_area">
                    <div className="lnb">
                        <div className="logo">
                            <img src={logo} alt={"sosohanya logo"} />
                        </div>
                        <div className="menus">
                            <p className="tit">Menu 1</p>
                            <ul>
                                <li>
                                    <a href={"/#"}>Sub 1</a>
                                </li>
                                <li className={"on"}>
                                    <a href={"/#"}>Sub 2</a>
                                </li>
                                <li>
                                    <a href={"/#"}>Sub 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right_area">
                    <div className="top_area">
                        <div className="menus">
                            <ul>
                                <li className={"on"}>
                                    <a href={"/#"}>Menu 1</a>
                                </li>
                                <li>
                                    <a href={"/#"}>Menu 2</a>
                                </li>
                                <li>
                                    <a href={"/#"}>Menu 3</a>
                                </li>
                                <li>
                                    <a href={"/#"}>Menu 4</a>
                                </li>
                                <li>
                                    <a href={"/#"}>Menu 5</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contents_area">
                        <div className="contents">Contents</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SampleLayout;