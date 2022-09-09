import React, { useEffect, useMemo, useState } from 'react';
import { useRedux } from '../hooks';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Label } from 'reactstrap';
import { setActiveTimelineStep } from '../redux/actions';

interface IForm{
label:string;
nextStep:1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
previousStep:1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
onSubmit:(value:any) => void;
sublabel?:string;
buttons:boolean;
}

export const Form = ({label, onSubmit, nextStep, previousStep, sublabel, buttons}: IForm) => {
  const { dispatch, useAppSelector } = useRedux();
    const customStyles = {
        control: () => ({
        minWidth:"100%",
          display: "flex",
          height:"30px",
          borderRadius: "6px",
          background: "#F8F8F8",
          borderTop:"transparent",
          borderLeft:"transparent",
          borderRight:"transparent",
          fontSize: "10px",
        //   padding: "6px 3px 3px 6px",
          color:"#BDBDBD",
          alignItems:"left",
          justifyContent:"left",
        }),
        option: () => ({
          cursor: "pointer",
          fontSize: "10px",
          marginBottom: "2px",
          padding: "10px",
          color:"#BDBDBD",
          "&:hover": {
            background: "#E0FF4F",
            color:"black"
          }
        }),
      };


      const resolver = yupResolver(
        yup.object().shape({
        companyLegalName: yup.string().required("Required field."),
        })
      );
    
      const defaultValues: any = {
        companyLegalName: "",
      };
    
      const methods = useForm({ defaultValues, resolver });
      const {
        handleSubmit,
        register,
        control,
        formState: { errors },
      } = methods;


      
    return (
    <div className='each-wrap w-12/12 w-full '>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col font-timeline-form">
    <div className="font-label font-size-14 ml-5">
          <Label>{label}</Label>
        </div>
       <div className="each-wrap w-10/12 md:w-12/12 ml-3 sm:w-12/12 pl-2">
                    <Input
                      type="text"
                      name="companyLegalName"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form font-label"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>
                  <span className='font-label font-size-12 ml-5'>{sublabel}</span>

    </div>
    {buttons &&
      <div className='flex flex-row each-wrap w-10/12 ml-4 text-end justify-end '>
      <div className='flex flex-row each-wrap w-2/12 justify-end rigth-div mt-2 mr-2'>
      <Button className="btn-cancel " onClick={() => dispatch(setActiveTimelineStep(previousStep))}>BACK</Button>
  
      </div>
      <div className='flex flex-row each-wrap w-2/12 justify-end mt-2 '>
      <Button className="btn-yellow" onClick={() => dispatch(setActiveTimelineStep(nextStep))}>CONTINUE</Button>
  
      </div>
      </div>
    }
  
    </form>
    </div>
    )
}