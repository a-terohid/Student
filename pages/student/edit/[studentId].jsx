import EditStudent from '@/components/template/EditStudent';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const index = () => {

    const [ student , setStudent ] = useState()
    const router = useRouter()

    const { query:{ studentId } , isReady } = router

    useEffect(() => {

        const ax = async () => {
            if( isReady ){
                const res = await axios.get(`/api/student/${ studentId }`)
                const data = await res.data
                setStudent( data.data )
            }
        }
        
        ax()
        
    }, [isReady])


   if ( student ) return ( <div><EditStudent data={ student } /></div> );
};

export default index;