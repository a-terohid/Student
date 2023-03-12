import Student from "@/model/student";


export default async function POST( data , res ) {
    if( !data.name || !data.lastName || !data.personalCode ){
        res.status( 400 ).json({
            status : "failed",
            message : "Please fill in the required fields"
        }) 
    }

    try{

        const student = await Student.create( data )
        res.status( 201 ).json({
            status : "success",
            message : "data created",
            data : student,
        })

    } catch( err ) {
        console.log(err);
        res.status( 500 ).json({
            status : "failed",
            message : "error in storing data"
        })
        return
    }

}