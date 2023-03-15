import style from "./lessen.module.scss"

const Lessen = ({ data }) => {
        const { subject ,  point , isPass } = data
    return (
        <div className={ style.lessen } >
            <p><span>subject: </span>{ subject }</p>
            <p><span>point: </span>{ point }</p>
            { isPass ? <p><span>isPass: </span>pass</p> : <p><span>isPass: </span>not-pass</p> }
        </div>
    );
};

export default Lessen;