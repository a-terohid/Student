import styles from "./student.module.scss"
import Card from '../module/Card';

const Students = ({students}) => {

    

    return (
        <div className={ styles.home } >
            <h1 className={ styles.title } >Students:</h1>
            <div className={ styles.students } >
                {
                    students.map( student => <Card key={ student._id } data={ student }  />) 
                }
            </div>
        </div>
    );
};

export default Students;