import { useEffect, useMemo } from "react";

export default function useDisabledField({ setFieldValue, props, values }) {
  const getTheValueOfDependant = values[props.dependant];

  const isDisabled = useMemo(() => {
    if (Array.isArray(props.dependantValue)) {
      return props.dependant
        ? !props.dependantValue.includes(getTheValueOfDependant)
        : false;
    }
    return props.dependant
      ? getTheValueOfDependant !== props.dependantValue
      : false;
  }, [getTheValueOfDependant, props.dependantValue, props.dependant]);

  const valueOfDependant = useMemo(
    () => getTheValueOfDependant,
    [getTheValueOfDependant]
  );

  useEffect(() => {
    if (valueOfDependant !== props.dependantValue) {
      setFieldValue(props.name, "");
    }
  }, [valueOfDependant, props.dependantValue, setFieldValue, props.name]);

  return { isDisabled };
}
