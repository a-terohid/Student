import styles from "./form.module.scss"
import Form_Item from "./Form_Item";

const Form = ({ student , setStudent }) => {

    const { name , lastName , personalCode , phoneNumber  , email  } = student

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    return (
        <div className={ styles.Form } >
            <div className={ styles.input } >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id={ name }
                    name="name"
                    value={ name }
                    onChange={ changeHandler }
                />
            </div>
            <div className={ styles.input } >
                <label htmlFor="lastName">last Name:</label>
                <input
                    type="text"
                    id={ lastName }
                    name="lastName"
                    value={ lastName }
                    onChange={ changeHandler }
                />
            </div>
            <div className={ styles.input } >
                <label htmlFor="personalCode">Personal Code:</label>
                <input
                    type="text"
                    id={ personalCode }
                    name="personalCode"
                    value={ personalCode }
                    onChange={ changeHandler }
                />
            </div>
            <div className={ styles.input } >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id={ email }
                    name="email"
                    value={ email }
                    onChange={ changeHandler }
                />
            </div>
            <div className={ styles.input } >
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id={ phoneNumber }
                    name="phoneNumber"
                    value={ phoneNumber }
                    onChange={ changeHandler }
                />
            </div>
            <div className={ styles.lessons } >
                <h3>lessens:</h3>
                <Form_Item student={ student } setStudent={ setStudent } />
            </div>
        </div>
    );
};

export default Form;