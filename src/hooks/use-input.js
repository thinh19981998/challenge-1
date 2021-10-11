import { useState } from 'react';

function useInput(initialValue, validateValue) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  let valueIsEmpty = false;
  if (enteredValue.trim() === '') {
    valueIsEmpty = true;
  }
  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  return {
    value: enteredValue,
    valueIsEmpty,
    valueIsValid,
    isValid: valueIsValid && !valueIsEmpty,
    valueChangeHandler,
  };
}

export default useInput;
