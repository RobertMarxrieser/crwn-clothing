import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input
      type="text"
      onChange={handleChange}
      className="form-input"
      {...props}
    />
    {label ? (
      <label
        className={`${props.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
