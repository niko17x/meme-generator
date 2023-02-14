import React from "react";

// When you are dealing with multiple form inputs, one option is to have multiple states keep track of each input element and have a function that can change the state of each input as well. This approach would be okay for smaller forms (i.e. 2-4 inputs) however, for larger forms, it is more efficient to place each state inside an object like the following :

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    checkbox: "",
  });

  console.log(formData); // Log input state changes.

  function handleChange(event) {
    // Note => 'type and checked' are used for 'checkbox' elements :
    const { name, value, type, checked } = event.target; // Object destructuring (best practice).

    setFormData((prevFormData) => ({
      ...prevFormData,

      // Ternary that returns the 'checked' data (true/false boolean) if checkbox or just value if not :
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // If doing a password confirmation check, inside this function is where it belongs :
  function handleSubmit(event) {
    event.preventDefault()(
      // Ternary that logs message if checkbox 'checked' value is true :
      formData.checkbox ? console.log("Thanks for joining the newsletter!") : ""
    );
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName" // Note: 'name' is a property that exactly matches key in state object.
          value={formData.firstName} // Set value of input to correct state => 'firstName' in this case.
          onChange={handleChange} // Run event 'onChange' on input element.
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName" // 'lastName' matches state object key => 'lastName'.
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="First Name"
          name="email" // 'email' matches state object key => 'email'.
          value={formData.email}
          onChange={handleChange}
        />
        <div className="form-marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </div>
        <button className="form-submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Form;
