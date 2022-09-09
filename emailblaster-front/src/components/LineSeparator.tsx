import React from 'react';

interface LineSeparatorProps {
    width: number;
    height: number | string;
    color: string;
}

export const LineSeparator = ({width, height,color}:LineSeparatorProps) => {

    return(<> 
    <div style={{
        width:width,
        height:height,
        backgroundColor:color
        }}></div>
    </>
    )
}