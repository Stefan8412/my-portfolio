import React from "react"
import classes from "../../styles/form.module.css"

const Form = () => {
  const submitHandler = () => {
    e.preventDefault()
  }
  return (
    <form
      className={`${classes.form}`}
      onSubmit={submitHandler}
      name="hancarform"
      method="post"
      data-netlify="true"
      hidden
    >
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" name="email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          name="message"
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  )
}

export default Form
