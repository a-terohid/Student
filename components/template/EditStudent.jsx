import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Form from '../module/Form';
import style from "./editStudent.module.scss"

const EditStudent = ({ data }) => {

    const router = useRouter()

    const { name , lastName , personalCode , phoneNumber , lessons , avvrage  , email , _id } = data

    const [ student , setStudent ] = useState({
        name : name ,
        lastName : lastName,
        personalCode : personalCode,
        _id : _id,
        phoneNumber : phoneNumber || "" , 
        email : email || "" ,
        avvrage : avvrage || "",
        lessons : lessons || []
    })

    const saveHandler = async () => {
        const res = await axios.patch( `/api/student/${ _id }` , { data: student} )
        const data = res.data
        if (data.status === "success") router.push(`/student/${ _id }`);
    }

    const cancelHandler = () => {
        router.push(`/student/${ _id }`);
    };

    return (
        <div className={ style.countainer } >
            <div className={ style.Edit } >
                <h1>Edit student:</h1>
                <Form student={ student } setStudent={ setStudent } />
                <div className={ style.buttons } >
                    <button className={ style.cancel }  onClick={ cancelHandler } >Cancle</button>
                    <button className={ style.save } onClick={ saveHandler } >Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditStudent;