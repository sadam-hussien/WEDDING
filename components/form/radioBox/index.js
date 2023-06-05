import { ErrorMessage, Field, useFormikContext } from "formik";

import { Form } from "react-bootstrap";

import { useDisabledField } from "@/hooks";

export default function RadioBox({ label, labelStyle, ...props }) {
  const { values, setFieldValue } = useFormikContext();

  const { isDisabled } = useDisabledField({ setFieldValue, props, values });

  return (
    <>
      <div className="radio-input">
        {label && (
          <Form.Label className="radio-input-label" style={labelStyle}>
            {label}
          </Form.Label>
        )}
        <div className="d-flex align-items-center flex-wrap gap-4">
          {props.options.map((item, index) => (
            <div key={index + props.id} className="radio-input-box">
              <Field
                id={props.id + "option" + index}
                name={props.name}
                className="d-none"
                value={item?.value || item}
                type="radio"
                disabled={isDisabled}
                {...props.inputProps}
              />
              <label
                {...props.labelProps}
                htmlFor={props.id + "option" + index}
              >
                <span className="radio-input-circle"></span>
                <span className="radio-input-text">{item?.label || item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <ErrorMessage
        name={props.name}
        component="div"
        className="input-error-msg"
      >
        {(msg) => <div className="input-error-msg">{msg}</div>}
      </ErrorMessage>
    </>
  );
}
