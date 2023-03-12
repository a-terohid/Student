import Student from "@/model/student";


export default async function PATCH( id , data , res ) {
  
    try{
        console.log(data);
        const student = await Student.findById( id )

        student.name = data.name
        student.lastName = data.lastName
        student.personalCode = data.personalCode
        student.phoneNumber = data.phoneNumber
        student.lessons = data.lessons
        student.email = data.email
        student.avvrage = data.avvrage
        student.save()

        res.status( 200 ).json({
            status: 'success',
            data: student
        })

    } catch( err ) {
        console.log(err);
        res.status( 500 ).json({
            status : "failed",
            message : "error in updating student data"
        })
        return
    }

}