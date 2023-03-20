import AddStudent from '@/components/template/AddStudent';
import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Add Student</title>
            </Head>
            <AddStudent /> 
        </div>
    );
};

export default index;