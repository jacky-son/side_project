import logo from "../assets/images/logo.png";
//import logo from '../images/logo.png';

function Lnb() {
    return <div className="lnb">
        <div className="logo">
            <img src={logo} alt={"logo"} />
        </div>
        <div className="menus">
            <p className="tit">Menu 1</p>
            {/* <nav>
                <li>
                    <a href={"/page1"}>Sub 1</a>
                </li>
                <li className={"on"}>
                <a href={"/page2"}>Sub 2</a>
                </li>
                <li>
                    <a href={"/#"}>Sub 3</a>
                </li>
            </nav> */}

            <ul>
                <li>
                    <a href={"/page1"}>Sub 1</a>
                </li>
                <li className={"on"}>
                <a href={"/page2"}>Sub 2</a>
                </li>
                <li>
                    <a href={"/#"}>Sub 3</a>
                </li>
            </ul>
        </div>
    </div>
}

export default Lnb;