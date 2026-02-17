
import { useState } from 'react'
import './contact.css'
import theme_pattern from '../../../src/assets/theme_pattern.svg'
import mail_icon from '../../../src/assets/mail_icon.svg'
import location_icon from '../../../src/assets/location_icon.svg'
import call_icon from '../../../src/assets/call_icon.svg'

export function ContactIndex() {

  const [submittedData, setSubmittedData] = useState(null)
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setStatus("")

    const formData = new FormData(event.target)
    formData.append("access_key", "d94a8c03-eb79-4049-ab97-1d9d78a59210")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {
        setSubmittedData(object)
        setStatus("Message sent successfully! ✅")
        event.target.reset()
      } else {
        setStatus("Failed to send message ❌")
      }

    } catch (error) {
      setStatus("Something went wrong! Please try again.")
    }

    setLoading(false)
  }

  return (
    <div className='container-fluid'>
      <div id="contact">

        <div id="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="theme pattern" />
        </div>

        <div id="contact_section">

          <div id="contact-left">
            <h1>Let's talk</h1>

            <p>
              I am currently available to take on new projects.
              Feel free to send me a message.
            </p>

            <div id="contact-details">

              <div className="contact-item">
                <img src={mail_icon} alt="mail icon" />
                <p>anurag07122@gmail.com</p>
              </div>

              <div className="contact-item">
                <img src={call_icon} alt="call icon" />
                <p>+91 6389613662</p>
              </div>

              <div className="contact-item">
                <img src={location_icon} alt="location icon" />
                <p>Hyderabad,Telangana</p>
              </div>

            </div>
          </div>

          <form onSubmit={onSubmit} id="contact-right">

            <label>Your Name</label>
            <input
              type='text'
              name="name"
              placeholder='Enter your name'
              required
            />

            <label>Your Email</label>
            <input
              type='email'
              name="email"
              placeholder='Enter your email'
              required
            />

            <label>Write your message here</label>
            <textarea
              name='message'
              rows="8"
              placeholder='Enter your message'
              required
            />

            <button
              type='submit'
              id="contact-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit now"}
            </button>

          </form>
        </div>

        {/* STATUS MESSAGE */}
        {status && (
          <div className="mt-3 text-center fw-bold">
            {status}
          </div>
        )}

        {/* SHOW SUBMITTED DATA */}
        {submittedData && (
          <div className="mt-4">
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}

      </div>
    </div>
  )
}
