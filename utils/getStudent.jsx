import Student from "@/model/student";


export default async function GET( id , res ) {

    try{

        const student = await Student.findById( id );
        res.status( 201 ).json({
            status : "success",
            data : student,
        })

    } catch( err ) {
        console.log(err);
        res.status( 500 ).json({
            status : "failed",
            message : "cant finde student"
        })
        return
    }

}