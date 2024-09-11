//import * as React from "react";
import React, { useState } from "react";

//import NativeSelect from "@mui/material/NativeSelect";
//import FormControl from "@mui/material/FormControl";
//import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";
//import { FormGroup } from "@mui/material";
//import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input, InputGroup } from 'reactstrap';

// function Selector() {
//   return (
//     <Box
//         component="form"
//         sx={{
//             '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//     >
//         {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
//             <NativeSelect
//                 defaultValue={"none"}
//                 inputProps={{
//                     name: 'category',
//                     id: 'uncontrolled-native',
//                 }}
//             >
//                 <option value={"none"}>통합검색</option>
//                 <option value={"title"}>제목</option>
//                 <option value={"publisher"}>출판사</option>
//                 <option value={"chapter"}>단원</option>
//             </NativeSelect>
//       	</FormControl> */}
//         <TextField
//             id="standard-search"
//             type="search"
//             variant="standard"
//             label = "연락처"
//         />
//     </Box>
//   );
// }

function Selector(props) {

    const [inputValue, setInputValue] = useState('');
    //const [inputEmail, setInputEmail] = useState('')
 
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <InputGroup>
            <Label for={props.id}>
                {props.label}
            </Label>
            <Input
                id={props.id}
                name={props.name}
                //placeholder="with a placeholder"
                type={props.type}
                bsSize="sm"
                value={props.value}
                onChange={handleInput}
                //bsSize="small"
            />
        </InputGroup>

        // <Box
        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { m: 2, width: '25ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        //     <TextField
        //         id="standard-search"
        //         type="search"
        //         variant="standard"
        //         label = {props.label}
        //     />
        // </Box>
  );
}

export default Selector;