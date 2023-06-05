import React from "react";

import { ErrorMessage, Field, useFormikContext } from "formik";

import DatePicker from "react-datepicker";

import { Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import { useDisabledField } from "@/hooks";

export default function DateInput({
  label,
  placeholder,
  name,
  id,
  labelStyle,
  containerStyle,
  icon = "las la-calendar",
  noBorder,
  ...props
}) {
  const { setFieldValue: setFieldValueOuter, values: valuesOuter } =
    useFormikContext();

  const { isDisabled } = useDisabledField({
    setFieldValue: setFieldValueOuter,
    props: { ...props, name },
    values: valuesOuter,
  });

  return (
    <div className="date-input">
      {label && (
        <Form.Label
          htmlFor={id}
          className="date-input-label text-capitalize"
          style={labelStyle}
        >
          {label}
        </Form.Label>
      )}

      <Form.Group
        className={`${
          isDisabled ? "disabled" : ""
        } d-flex align-items-center border position-relative form-group input-withicon-group`}
        style={containerStyle}
      >
        <Form.Label htmlFor={id} className="m-0 ">
          <i className={icon}></i>
        </Form.Label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            const selValue = value ? new Date(value) : new Date();
            return (
              <DatePicker
                {...field}
                {...props}
                disabled={isDisabled}
                selected={selValue}
                id={id}
                onChange={(date) => setFieldValue(name, date)}
                placeholderText={placeholder}
                className={`form-control input-withicon ${
                  noBorder ? "border-0" : ""
                }`}
              />
            );
          }}
        </Field>
      </Form.Group>
      <ErrorMessage name={name} component="div" className="input-error-msg">
        {(msg) => <div className="input-error-msg">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
