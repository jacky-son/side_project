function Top(){
    return <div className="top_area">
        <div className="menus">
            <ul>
                <li className={"on"}>
                    <a href={"/page1"}>기준 관리</a>
                </li>
                <li>
                    <a href={"/page1"}>계약 관리1-1</a>
                </li>
                <li>
                    <a href={"/page2"}>계약 관리2</a>
                </li>
                <li>

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
}

export default Top;