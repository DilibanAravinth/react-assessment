import React from "react";

const Input = ({ type, placeholder, label, required, styles, name, values }) => {
  switch(type){
    case "radio":
      return <span className={`flex mt-6 gap-1 ${styles}`}>
        {values.map(val =>{
        return (<span key={val.name} className="contents">
            <input className="ml-3 indeterminate:border-r_border" name={name} type={type} id={val.value} value={val.value}  required={required}/>
            <label className="text-sm leading-5 text-t_grey" htmlFor={val.value}>{val.name}</label>
          </span>
          );})}
      </span>
    
    default:
      return (
      <span className={`flex flex-col mt-6 ${styles}`}>
        <label className="text-t_dark text-sm leading-5">{label}{required?<span className="text-t_error">*</span>:null}</label>
        <input name={name} type={type} placeholder={placeholder} className="text-sm	p-3 border border-c_border placeholder:text-t_grey mt-1 rounded-[5px] h-9" required={required}/>
      </span>)
  }
};

Input.defaultProps = {
  label: "Label",
  type:"text",
  placeholder:"ex. UX UI Designer",
  required:true,
  styles:"",
  name:"",
  values:[]
};

export default Input;
