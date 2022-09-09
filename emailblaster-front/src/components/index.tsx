import React from 'react';
import { Row } from 'reactstrap';
import { Footer } from './Footer';
import { EmailBlaster } from './EmailBlaster';
import { OrangeHeader } from './OrageHeader';
import { LineSeparator } from './LineSeparator';
import { MoreInformation } from './MoreInformation';

export const StartCampaign = () => {

    return(
    <div className='w-100 h-100'>
        <OrangeHeader/>
        <div className='flex flex-row'>
    <EmailBlaster/>
    <div className='hidden md:flex lg:flex each-wrap w-6/12'>
    <LineSeparator width={1} height={"100%"} color={"#737373"}/>
    <MoreInformation/>
    </div>
    </div>
    </div>
    )
}