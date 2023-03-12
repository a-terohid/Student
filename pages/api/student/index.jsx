import Student from "@/model/student";
import connectDB from "@/utils/connectDB";
import POST from "@/utils/post";

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

    if( req.method == "GET" ) {
        const students = await Student.find()
        res.status(200).json({
            status: "success",
            data : students
        })
    }

    if( req.method == "POST" ) {
        const data = req.body.data
        await POST( data , res )
    }



}