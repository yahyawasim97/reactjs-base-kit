/*
 * @file: TextInput.js
 * @description: Common text input field
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { func, string } from 'prop-types';

const TextInput = ({
  name, placeholder, type, value, onChangeHandler,
}) => (
  <input className="input" name={name} placeholder={placeholder} type={type} value={value} onChange={onChangeHandler} />
);

TextInput.propTypes = {
  name: string.isRequired,
  onChangeHandler: func.isRequired,
  placeholder: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
};

export default TextInput;
