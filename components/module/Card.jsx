import Link from "next/link";
import style from "./card.module.scss"
import { BiTrashAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/router";

const Card = ({data}) => {

    const router = useRouter();

    
    const { name , lastName , personalCode , phoneNumber , avvrage , _id } = data;

    const deleteHandler = async () => {
        const res = await axios.delete(`/api/student/${_id}`)
        const data = res.data
        if (data.status === "success") {
            console.log("deleted");
            router.reload();
        } 
    }


    return (
        <div className={ style.card } >
            <Link className={ style.title } href={`/student/${ _id }`} >{ name } { lastName }</Link>
                <div className={ style.info } >
                    <p>personal code: { personalCode } </p>
                    {
                        phoneNumber ? <p>phone number: { phoneNumber } </p> : null
                    }
                    {
                        avvrage ? <p>avrage: { avvrage } </p> : null
                    }
            </div>
            <div className={ style.see } >
                <BiTrashAlt  className={ style.icon } onClick={ deleteHandler } />
                <Link href={`/student/${ _id }`} ><BsEye className={ style.icon } /></Link>
            </div>
        </div>
    );
};

export default Card;    