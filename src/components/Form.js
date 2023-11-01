import React from "react";
import "../components-css/Form.css";
import { useState } from "react";
import Success from "./Success";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [showSuccess, setshowSuccess] = useState(false);

  return (
    <div>
      {!showSuccess ? (<form
        type="submit"
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();

          setshowSuccess(true);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="E-mail addrees"
          required
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>) : <Success />}
    </div>
  );
}

export default Form;
