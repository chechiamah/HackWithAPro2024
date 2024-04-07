'use client'
import {useSearchParams} from 'next/navigation';
import React from 'react';
export default function Page() {
    // console.log(router);
    // const dataArray = JSON.parse(data);
    const data = JSON.parse(sessionStorage.getItem('survey_output'));
    console.log(data);
    

    return (
        <>
            <h1>HELLO WORLD!</h1>
        </>
    );
}