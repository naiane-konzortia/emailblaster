import React from 'react';
import { Col, Row } from 'reactstrap';
import investHubLogo from '../assets/images/svg/investHubLogo.svg'
import {FaPaperPlane} from 'react-icons/fa'

export const OrangeHeader = () => {

    return (<>
          <div className="justify-between bg-orange-primary px-8 mx-auto lg:max-w-7xl ">
          <div className="orange-header flex center-div  mx-auto lg:max-w-7xl">
        <Col sm={12} lg={12} xl={12}>
          <div className='font-label-white'>
            EMAIL BLASTER
          </div>
          {/* <img
              src={investHubLogo}
              alt="user-profile"
              className="object-fit investHubLogo "
            /> */}
              <div className='flex flex-row ml-12 font-label-black'>
            {/* <span>A</span> */}
            <div className='mt-1 ml-1 mr-1'>
            <FaPaperPlane size={13} />
            </div>
            Konzortia Capital Company
            </div>
          </Col>
          <Col className='center-div flex flex-row '>
            <Row>
              
                </Row>
                </Col>
          </div>
          </div>
    </>)
}