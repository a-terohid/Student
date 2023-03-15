import avrage from "@/utils/avrage";
import { BiTrashAlt } from "react-icons/bi";
import styles from "./formItem.module.scss"

const Form_Item = ({ student , setStudent }) => {

    const { lessons } = student
    // console.log( student);

    const changeHandler = (e, index) => {
        const { name, value } = e.target;
        const newlesson = [...lessons];
        newlesson[index][name] = value;
        if ( newlesson[index].point >= 10 ){
            newlesson[index].isPass = true
        } else {
            newlesson[index].isPass = false
        }
        const avg = avrage( student.lessons );
        setStudent({ ...student, lessons: newlesson , avvrage: avg });
    };

    const addHnadler = () => {
        setStudent({
            ...student,
            lessons: [...lessons, { subject: "", point: "", isPass: "" }],
          });
        console.log( lessons );
    }

    const deleteHandler = (index) => { 
        const newlessons = [...lessons];
        newlessons.splice(index, 1);
        setStudent({ ...student, lessons: newlessons });
    };

    return (
        <div>
            {
                lessons.map( ( lesson, index ) => <div className={ styles.lesson }  key={ index } >
                    <div className={ styles.input } >
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id={ lesson.subject }
                            name="subject"
                            value={ lesson.subject }
                            onChange={ (e) => changeHandler( e , index ) }
                        />
                    </div>
                    <div className={ styles.input } >
                        <label htmlFor="point">Point:</label>
                        <input
                            type="number"
                            id={ lesson.point }
                            name="point"
                            value={ lesson.point }
                            onChange={ (e) => changeHandler( e , index ) }
                        />
                    </div>
                    <BiTrashAlt  className={ styles.icon } onClick={ () => deleteHandler( index ) } />
                </div> )
            }
            <button onClick={ addHnadler } className={ styles.bt }  >add lesson</button>
        </div>
    );
};

export default Form_Item;