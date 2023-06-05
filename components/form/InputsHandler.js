import React from "react";

import InputWithIcon from "./inputWithIcon";

import SelectBox from "./selectBox";

import DateInput from "./dateInput";

import Textarea from "./textarea";

import RadioBox from "./radioBox";

import CheckBox from "./checkBox";

export default function InputsHandler({ item }) {
  if (item.type === "select") {
    return (
      <SelectBox
        item={item}
        placeholder={item.placeholder}
        label={item.label}
      />
    );
  }

  if (item.type === "date") {
    return (
      <DateInput {...item} placeholder={item.placeholder} label={item.label} />
    );
  }

  if (item.type === "textarea") {
    return (
      <Textarea {...item} placeholder={item.placeholder} label={item.label} />
    );
  }

  if (item.type === "radiobox") {
    return <RadioBox {...item} />;
  }

  if (item.type === "checkbox") {
    return <CheckBox {...item} />;
  }

  return (
    <InputWithIcon
      {...item}
      placeholder={item.placeholder}
      label={item.label && item.label}
    />
  );
}
