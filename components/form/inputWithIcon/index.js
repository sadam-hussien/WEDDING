import React, { useState } from "react";

import { Field, ErrorMessage, useFormikContext } from "formik";

import { Form } from "react-bootstrap";
import { useDisabledField } from "@/hooks";

export default function InputWithIcon({
  type,
  name,
  label,
  labelStyle,
  id,
  placeholder,
  icon,
  containerStyle,
  style = {},
  noBorder,
  basic,
  ...props
}) {
  const { values, setFieldValue } = useFormikContext();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [inputType, setInputType] = useState(type);
  const togglePassword = () => {
    setPasswordIsVisible(!passwordIsVisible);
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const { isDisabled } = useDisabledField({
    setFieldValue,
    props: { ...props, name: name },
    values,
  });

  return (
    <>
      {label && (
        <Form.Label
          htmlFor={id}
          className="input-with-icon-label text-capitalize"
          style={labelStyle}
        >
          {label}
        </Form.Label>
      )}
      <Form.Group
        className={`d-flex align-items-center border position-relative form-group input-withicon-group ${
          isDisabled ? "disabled" : ""
        }`}
        style={containerStyle}
        disabled={isDisabled}
      >
        <Form.Label htmlFor={id} className="m-0 ">
          <i className={icon}></i>
        </Form.Label>
        {basic ? (
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            style={style}
            className={`form-control input-withicon ${
              noBorder ? "border-0" : ""
            }`}
            id={id}
            onChange={(e) => basic.onChange(e.target.value)}
            disabled={isDisabled}
            // {...props}
          />
        ) : (
          <Field
            type={inputType}
            name={name}
            placeholder={placeholder}
            style={style}
            className={`form-control input-withicon ${
              noBorder ? "border-0" : ""
            }`}
            id={id}
            disabled={isDisabled}

            // {...props}
          />
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="show-passowrd bg-transparent border-0 p-0"
          >
            {passwordIsVisible ? (
              <i className="lar la-eye"></i>
            ) : (
              <i className="las la-eye-slash"></i>
            )}
          </button>
        )}
      </Form.Group>
      {!basic && (
        <ErrorMessage name={name} component="div" className="input-error-msg">
          {(msg) => <div className="input-error-msg">{msg}</div>}
        </ErrorMessage>
      )}
    </>
  );
}
