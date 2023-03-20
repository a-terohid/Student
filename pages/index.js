import Students from "@/components/template/Students";
import Student from "@/model/student";
import connectDB from "@/utils/connectDB";
import Head from "next/head";

const index = ({ students }) => {
    return (
        <div>
            <Head>
                <title>Students</title>
            </Head>
           <Students students={ students } /> 
        </div>
    );
};

export default index;

export async function getServerSideProps() {
    try{
        await connectDB()
        const students = await Student.find()
        console.log(students);

        return{
            props: {
                students : JSON.parse( JSON.stringify( students ) )
            }
        }

    } catch(err) {
        return {
            notFound: false,
        }
    }
}