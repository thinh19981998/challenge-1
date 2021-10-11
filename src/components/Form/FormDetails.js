import React, { useState } from 'react';
import useInput from '../../hooks/use-input';

function FormDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const {
    value: enteredName,
    isValid: nameInputIsValid,
    valueChangeHandler: nameChangeHandler,
  } = useInput('John Wick', value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    valueIsEmpty: emailInputIsEmpty,
    valueIsValid: emailInputValueIsValid,
    valueChangeHandler: emailChangeHandler,
  } = useInput('donottake@mydog.com', value => {
    var emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  });

  const {
    value: enteredPhone,
    isValid: phoneInputIsValid,
    valueIsEmpty: phoneInputIsEmpty,
    valueIsValid: phoneInputValueIsValid,
    valueChangeHandler: phoneChangeHandler,
  } = useInput('0123456789', value => {
    var contactRegex = /^\d{8,12}$/;
    return contactRegex.test(value);
  });

  const {
    value: enteredGender,
    isValid: genderInputIsValid,
    valueIsEmpty: genderInputIsEmpty,
    valueChangeHandler: genderChangeHandler,
  } = useInput('Male', value => value.trim() !== '');

  const initialNotes =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit';

  const {
    value: enteredNotes,
    isValid: notesInputIsValid,
    valueIsEmpty: notesInputIsEmpty,
    valueChangeHandler: notesChangeHandler,
  } = useInput(initialNotes, value => value.trim() !== '');

  let formIsValid = false;

  if (
    nameInputIsValid &&
    emailInputIsValid &&
    phoneInputIsValid &&
    genderInputIsValid &&
    notesInputIsValid
  ) {
    formIsValid = true;
  }

  const onEdit = () => {
    setIsEditing(prevState => setIsEditing(!prevState));
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='grid'>
        <div className='grid__block'>
          <label>
            <div className='field-label'>Name*</div>
            <div
              className='field-value'
              style={{ display: `${isEditing ? 'none' : ''}` }}
            >
              {enteredName}
            </div>

            <input
              type='text'
              className='field'
              name='name'
              value={enteredName}
              id='name'
              style={{ display: `${isEditing ? '' : 'none'}` }}
              onChange={nameChangeHandler}
            />

            {!nameInputIsValid && (
              <div className='field-error' id='nameRequired'>
                Name is required.
              </div>
            )}
          </label>
        </div>

        <div className='grid__block'>
          <label>
            <div className='field-label'>E-mail Address*</div>

            <div
              className='field-value'
              style={{ display: `${isEditing ? 'none' : ''}` }}
            >
              {enteredEmail}
            </div>

            <input
              type='email'
              className='field'
              name='email'
              value={enteredEmail}
              style={{ display: `${isEditing ? '' : 'none'}` }}
              id='email'
              onChange={emailChangeHandler}
            />

            {emailInputIsEmpty && (
              <div className='field-error' id='emailRequired'>
                E-mail Address is required.
              </div>
            )}

            {!emailInputValueIsValid && !emailInputIsEmpty && (
              <div className='field-error' id='emailInvalid'>
                E-mail Address is invalid.
              </div>
            )}
          </label>
        </div>

        <div className='grid__block'>
          <label>
            <div className='field-label'>Contact Number*</div>

            <div
              className='field-value'
              style={{ display: `${isEditing ? 'none' : ''}` }}
            >
              {enteredPhone}
            </div>

            <input
              type='tel'
              className='field'
              name='contact'
              value={enteredPhone}
              style={{ display: `${isEditing ? '' : 'none'}` }}
              id='contact'
              onChange={phoneChangeHandler}
            />

            {phoneInputIsEmpty && (
              <div className='field-error' id='contactRequired'>
                Contact Number is required.
              </div>
            )}

            {!phoneInputIsEmpty && !phoneInputValueIsValid && (
              <div className='field-error' id='contactInvalid'>
                Contact Number should consist of 8 to 12 digits only.
              </div>
            )}
          </label>
        </div>

        <div className='grid__block'>
          <label>
            <div className='field-label'>Gender*</div>

            <div
              className='field-value'
              style={{ display: `${isEditing ? 'none' : ''}` }}
            >
              {enteredGender}
            </div>

            <select
              className='field'
              name='gender'
              style={{ display: `${isEditing ? '' : 'none'}` }}
              id='gender'
              onChange={genderChangeHandler}
              defaultValue='Male'
            >
              <option value=''>- Select -</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
              <option value='I do not wish to say'>I do not wish to say</option>
            </select>

            {genderInputIsEmpty && (
              <div className='field-error' id='genderRequired'>
                Gender is required.
              </div>
            )}
          </label>
        </div>

        <div className='grid__block full--'>
          <label>
            <div className='field-label'>Notes*</div>

            <div
              className='field-value'
              style={{ display: `${isEditing ? 'none' : ''}` }}
            >
              {enteredNotes}
            </div>

            <textarea
              name='notes'
              className='field'
              style={{ display: `${isEditing ? '' : 'none'}` }}
              id='notes'
              onChange={notesChangeHandler}
              defaultValue={enteredNotes}
            ></textarea>

            {notesInputIsEmpty && (
              <div className='field-error' id='notesRequired'>
                Notes is required.
              </div>
            )}
          </label>
        </div>

        <div className='grid__block full--   ta-c'>
          {isEditing ? (
            <button
              type='button'
              className='button'
              id='submit'
              onClick={onEdit}
              disabled={!formIsValid}
            >
              SAVE
            </button>
          ) : (
            <button
              type='button'
              className='button secondary--'
              id='edit'
              onClick={onEdit}
            >
              EDIT
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default FormDetails;