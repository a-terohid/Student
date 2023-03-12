import Student from "@/model/student";


export default async function DELETE( id , res ) {
  
    try{

        await Student.findOneAndDelete({ _id: id },)
        res.status( 201 ).json({
            status : "success",
            message : "data deleted",
        })

    } catch( err ) {
        console.log(err);
        res.status( 500 ).json({
            status : "failed",
            message : "error in deleting student"
        })
        return
    }

}