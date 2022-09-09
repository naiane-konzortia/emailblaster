import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Control,
  useController,
  useForm,
  Controller,
} from "react-hook-form";
import { Button, Input, Label } from "reactstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Select, { components } from "react-select";
import ReactPickyDateTime from "react-picky-date-time";
import { useRedux } from "../hooks";
import { emailSender } from "../redux/actions";

export const EmailBlaster = () => {
  const { dispatch, useAppSelector } = useRedux();

  const customStyles = {
    control: () => ({
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      borderRadius: "6px",
      background: "white",
      padding: "6px 3px 3px 6px",
      border: "1px solid lighten(#737373 , 2%)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
      color: "#BDBDBD",
      fontWeigth: "0rem",
      alignItems: "left",
      justifyContent: "left",
    }),
    option: () => ({
      cursor: "pointer",
      fontSize: "14px",
      marginBottom: "2px",
      padding: "10px",
      color: "#BDBDBD",
      "&:hover": {
        background: "#E0FF4F",
        color: "black",
      },
    }),
    menuList: () => ({
      background: "#737373",
      color: "#BDBDBD",
      paddingBottom: "2px",
    }),
  };

  const customStylesCountries = {
    control: () => ({
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      borderRadius: "6px",
      background: "white",
      padding: "6px 3px 3px 6px",
      color: "#BDBDBD",
      border: "1px solid lighten(#737373 , 2%)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
      alignItems: "left",
      justifyContent: "left",
    }),
    option: () => ({
      cursor: "pointer",
      fontSize: "14px",
      marginBottom: "2px",
      padding: "10px",
      color: "#BDBDBD",
      "&:hover": {
        background: "#E0FF4F",
        color: "black",
      },
    }),
  };

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    register,
    // formState: { errors },
  } = useForm();

  const [stepper, setStepper] = useState(1);

  const { Option } = components;

  const onSubmit = () => {
    //do something
  };

  const data = {
    showPickyDateTime: true,
    date: "30",
    month: "01",
    year: "2000",
    hour: "03",
    minute: "10",
    second: "40",
    meridiem: "PM",
  };

  const [allData, setAllData] = useState(data);
  const [yearPicked, setYearPicked] = useState<any>();
  const [monthPicked, setMonthPicked] = useState<any>();
  const [DatePicked, setDatePicked] = useState<any>();
  const [ResetDate, setResetDate] = useState<any>();
  const [resetDefaultDate, setResetDefaultDate] = useState<any>();
  const [secondChange, setSecondChange] = useState<any>();
  const [minuteChange, setMinuteChange] = useState<any>();
  const [hourChange, setHourChange] = useState<any>();
  const [meridiemChange, setMeridiemChange] = useState<any>();
  const [resetTime, setResetTime] = useState<any>();
  const [resetDefaultTime, setResetDefaultTime] = useState<any>();
  const [clearTime, setClearTime] = useState<any>();

  const [names, setNames] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [subject, setSubject] = useState<any>();
  const [contacts, setContacts] = useState<any>();
  const [html, setHtml] = useState<any>();

  const sendEmail = () => {

    dispatch(emailSender(
       {"names":names.split(','),
        "email_recipient":email.split(','),
        "email_subject":subject,
        "number_contacts":contacts,
        "html":`${html}`
       }
    ))
  }

  return (
    <>
      <section className="bg-gray w-100 h-100">
        <div className="container md:items-center each-wrap w-10/12 mx-auto px-24 p-16">
          {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-noah-700">
            Email Blaster Campaign
          </h2> */}
            <Label className="mb-2">Names (comma separated)</Label>
              <Input
                type="text"
                name="name"
                placeholder="Ex: Name 1, Name 2"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
                onChange={(e) => setNames(e.target.value)}
              />
            <Label className="mb-2 mt-4">Emails (comma separated)</Label>
              <Input
                type="text"
                name="email"
                placeholder="Ex: email1@email.com, email2@email.com"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
                onChange={(e) => setEmail(e.target.value)}

              />
            <Label className="mb-2 mt-4">Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="Email subject"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
                onChange={(e) => setSubject(e.target.value)}
              />
            <Label className="mb-2 mt-4">Number of contacts</Label>
            <div className="each-wrap w-1/12">
              <Input
                type="number"
                name="subject"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
                onChange={(e) => setContacts(e.target.value)}
              />
              </div>
            <Label className="mb-2 mt-4">HTML</Label>
              <textarea
                name="html"
                className="form-one-line form-control font-label"
                placeholder="<html><body>Hey</body></html>"
                onChange={(e) => setHtml(e.target.value)}
              />
            {/* <Label className="mb-2">Files</Label>
              <Input
                type="file"
                name="facebook"
                placeholder="Facebook"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
              />
            <Label className="mb-2">Files</Label>
              <Input
                type="file"
                name="facebook"
                placeholder="Facebook"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
              />
            <Label className="mb-2">Files</Label>
              <Input
                type="file"
                name="facebook"
                placeholder="Facebook"
                className="form-one-line font-timeline-form font-label"
                withoutLabel={true}
                hidePasswordButton={true}
              />
          <Label className="mb-2 mt-5">Start date and time</Label>
          <ReactPickyDateTime
            size="xs" // 'xs', 's', 'm', 'l'
            locale={`en-us`} // 'en-us' or 'zh-cn'; default is en-us
            mode={1} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
            show={true} //default is false
            onClose={() => setAllData({ ...allData, showPickyDateTime: false })}
            defaultTime={`${allData.hour}:${allData.minute}:${allData.second} ${allData.meridiem}`} // OPTIONAL. format: "HH:MM:SS AM"
            defaultDate={`${allData.month}/${allData.date}/${allData.year}`} // OPTIONAL. format: "MM/DD/YYYY"
            onYearPicked={(res) => setYearPicked(res)}
            onMonthPicked={(res) => setMonthPicked(res)}
            onDatePicked={(res) => setDatePicked(res)}
            onResetDate={(res) => setResetDate(res)}
            onResetDefaultDate={(res) => setResetDefaultDate(res)}
            onSecondChange={(res) => setSecondChange(res)}
            onMinuteChange={(res) => setMinuteChange(res)}
            onHourChange={(res) => setHourChange(res)}
            onMeridiemChange={(res) => setMeridiemChange(res)}
            onResetTime={(res) => setResetTime(res)}
            onResetDefaultTime={(res) => setResetDefaultTime(res)}
            onClearTime={(res) => setClearTime(res)}
            // markedDates={['10/19/2021']} // OPTIONAL. format: "MM/DD/YYYY"
            // supportDateRange={['12/03/2021', '12/05/2021']} // OPTIONAL. min date and max date. format: "MM/DD/YYYY"
          /> */}
          <div className=" flex center-div m-10">
            <Button className="btn mt-10" onClick={sendEmail}>
              SEND EMAIL
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
