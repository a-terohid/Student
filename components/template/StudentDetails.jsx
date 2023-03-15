import Link from "next/link";
import Lessen from "../module/Lessen";
import styles from "./studentDetail.module.scss"

const StudentDetails = ({ data }) => {

    const { name , lastName , personalCode , phoneNumber , avvrage , _id , lessons , email  } = data;

    return (
        <div className={ styles.detail } >
            <div className={ styles.info } >
                <div className={ styles.head } >
                    <h1 className={ styles.name } >{name} {lastName}</h1>
                    <Link className={ styles.edit } href={`/student/edit/${_id}`} >Edit user</Link>
                </div>
               <div className={ styles.det } >
                    <div className={ styles.text } >
                        <h4>personal code:</h4>
                        <p>{ personalCode }</p>
                    </div>
                    <div className={ styles.text } >
                        <h4>phone number:</h4>
                        { phoneNumber ? <p>{ phoneNumber }</p> : <p> ----------------- </p> }
                    </div>
                    <div className={ styles.text } >
                        <h4>email:</h4>
                        { email ? <p>{ email }</p> : <p> ----------------- </p> }
                    </div>
                    <div className={ styles.text2 } >
                        <h4>avrage:</h4>
                        { avvrage ? <p>{ avvrage }</p> : <p> ----------------- </p> }
                    </div>
               </div>
            </div>
            <div className={ styles.lesson } >
                <h2 className={ styles.title } >lessens:</h2>
                {
                    !lessons.length ? <p className={ styles.error } >this student dont have any lesson!!</p> : 
                    <div className={styles.less} >
                        {
                            lessons.map( ( lesson ) => <Lessen  data={ lesson } /> )
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default StudentDetails;