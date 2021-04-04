import React from 'react'

import ReactLoading from 'react-loading'


export default function Loading() {
    return (
        <div dir='ltr' className="p-5 m-5">
            <h2 style={{color:'#A9A9A9'}}>Loading ...</h2>
            <ReactLoading
type="bars"
color="#FF7F50"
height="100%"
width="100%"

/>
        </div>
    )
}
