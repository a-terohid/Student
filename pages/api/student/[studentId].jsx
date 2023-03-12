
import connectDB from "@/utils/connectDB";
import DELETE from "@/utils/delete";
import GET from "@/utils/getStudent";
import PATCH from "@/utils/updateStudent";


export default async function(req, res,) {
    try {

        await connectDB()

    } catch (err) {
        
        console.log( err.message );
        res.status( 500 ).json({
            status : "failed",
            message : "can't connect to DB"
        })
        return
    }

    if( req.method == "DELETE" ) {
        const id = req.query.studentId
        await DELETE( id , res )
    }


    if( req.method == "GET" ) {
        const id = req.query.studentId
        GET( id , res )
    }

    if( req.method == "PATCH" ) {
        const id = req.query.studentId
        const data = req.body.data
        await PATCH( id , data , res )
    }


}