import React , { useState, useRef, useEffect, useCallback } from "react";
import Selector from "./selector"
import { FormGroup, Form, Row, Col, Button, Alert } from 'reactstrap';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import axios from 'axios';

const SearchArea = () => {
    const [message, setMessage] = useState("");
    const [rowData, setRowData] = useState();
    //const agGridReactRef = React.useRef<AgGridReact>(null); // agGridReact useRef
    const agGridReactRef = useRef(); // agGridReact useRef

    //const [gridApi, setGridApi] = useState(null);

    // const [rowData] = useState([
    //     {make: "Toyota", model: "Celica", price: 35000},
    //     {make: "Ford", model: "Mondeo", price: 32000},
    //     {make: "Porsche", model: "Boxster", price: 72000}
    // ]);
    
    const [columnDefs] = useState([
        { field: 'chk', width:50, headerCheckboxSelection: true, checkboxSelection: true},
        { field: 'id' },
        { field: 'name' },
        { field: 'price' }
    ]);

    // Example load data from server
    // useEffect(() => {
    //     fetch('/user', {
    //         method: 'POST'
    //         })
    //         .then(result => result.json())
    //         .then(rowData => setRowData(rowData))
    //         ;
    // }, []);

    //const params = new URLSearchParams();    

    const onGridReady = () => {
    //setGridApi(params.api);
    //setGridColumnApi(params.columnApi);

    //const updateData = (data) => params.api.setRowData(data);

    fetch('/user', {
        method: 'POST'
        })
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
        ;
    };

    const search = () => {
        // fetch('/user', {
        //     method: 'POST'
        //     })
        //     .then(response => response.text())
        //     .then(message => {
        //         setMessage(message);
        //     });

        // params.append('param1', 'value1');
        // params.append('param2', 'value2');

        const params = {id : '1', name : '손선영'};

        axios.post('/user/condition', params)
            .then(reponse => reponse.data)
            .then(rowData => setRowData(rowData))
        ;

        // axios.post('/user/condition', {
        //     id : '1',
        //     name : '손선영'
        // })
        //     .then(reponse => reponse.data)
        //     //.then(result => result.json())
        //     .then(rowData => setRowData(rowData))
        // ;

        // fetch('/user', {
        //     method: 'POST'
        //     })
        //     .then(result => result.json())
        //     .then(rowData => setRowData(rowData))
        //     ;

        // fetch('/api/search', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name : "SY",
        //         // email : s_email.value,
        //     })
        //     .then(response => response.json())
        //     .then(message => {
        //         setMessage(message);
        //     }),
        // });
    };

    

    // 선택된 데이터 확인
    const save = () => {
        debugger;
        if(agGridReactRef.current) {
            const selectedNodes = agGridReactRef.current.api.getSelectedNodes();
            const selectedData = selectedNodes.map((node) => node.data);
            console.log(selectedData);

            if (selectedData) {
                axios.post('/user/save', selectedData)
                    .then(reponse => reponse.data)
                    .then(rowData => setRowData(rowData))
        ;
            }
        }

        //const data = gridApi.getSelectedRows();
        //console.log(data);
    }


    return (
        <Form>
            <Row>
                <Col md={3}>
                    <Selector 
                        label = "이름"
                        id = "s_name"
                        name = "name"
                        type = "search"
                        />
                </Col>
                <Col md={3}>
                    <Selector 
                        label = "연락처" 
                        id = "s_phone"
                        name = "phone"
                        type = "search"
                        />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Selector 
                        label = "이메일"
                        id = "s_email"
                        name = "email"
                        type = "email"
                        />
                </Col>
                <Col md={3}>
                </Col>
                <Col md={1}>
                    <Button className="search" onClick={search}><span>검색</span></Button>
                </Col>
                <Col md={1}>
                    <Button className="save" onClick={save}><span>저장</span></Button>
                </Col>
            </Row>
            <Row>{message}</Row>
            <div className="ag-theme-alpine" style={{ width: 600, height: 400, margin: '0 auto' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowSelection="multiple"
                    onGridReady={onGridReady}
                    ref={agGridReactRef}>
                </AgGridReact>
            </div>
        </Form>
    )
};

export default SearchArea;