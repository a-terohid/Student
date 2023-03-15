
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Form from '../module/Form';
import style from "./addstudent.module.scss"

const AddStudent = () => {

    const router = useRouter();

    const [ student , setStudent ] = useState({
        name: "",
        lastName: "",
        personalCode: "",
        phoneNumber: "",
        email:"",
        avvrage:"",
        lessons:[]
    })

    const addHandler = async () =>{
        
        const res = await axios.post( "/api/student" , { data: student} )
        const data = res.data
        if (data.status === "success") router.push("/");

    }

    return (
        <div className={ style.countainer } >
            <div className={ style.addDiv } >
                <h1>Add student:</h1>
                <Form student={ student } setStudent={ setStudent } />
                <div className={ style.AddBtDiv } >
                    <button onClick={ addHandler } >Add student</button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;