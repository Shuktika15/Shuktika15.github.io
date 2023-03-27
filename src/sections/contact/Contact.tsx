import './Contact.scss'
import { type EmailRequest } from '../../type'
import AutorenewIcon from '../../components/icons/autorenew-icon'
import VerifiedIcon from '../../components/icons/verified-icon'
import { useEffect, useRef, useState } from 'preact/compat'
import { type JSX } from 'preact'

enum SendEmailState {
  INITIAL_STATE,
  SENDING_STATE,
  SENT_STATE,
  ERROR_STATE
}

export default function Contact (): JSX.Element {
  const emailForm = useRef<HTMLFormElement | null>(null)
  const [sendEmailState, setSendEmailState] = useState<SendEmailState>(SendEmailState.INITIAL_STATE)

  useEffect((): void => {
    if (emailForm.current === null) return
    emailForm.current.onsubmit = async (e: SubmitEvent) => {
      await sendEmail(e)
    }
  })

  async function sendEmail (event: SubmitEvent): Promise<void> {
    event.preventDefault()

    if (sendEmailState === SendEmailState.SENT_STATE) {
      return
    }

    const form = event.target as HTMLFormElement
    const name = form[0] as HTMLInputElement
    const email = form[1] as HTMLInputElement
    const subject = form[2] as HTMLInputElement
    const content = form[3] as HTMLTextAreaElement
    const sendEmailRequest: EmailRequest = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      content: content.value
    }

    setSendEmailState(SendEmailState.SENDING_STATE)

    try {
      const response = await fetch(
        'http://localhost:8080/api/sendMail',
        {
          method: 'POST',
          body: JSON.stringify(sendEmailRequest),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Accept: 'application/json'
          }
        }
      )
      const responseBody = await response.json()
      console.log(responseBody)
      setTimeout(() => {
        setSendEmailState(SendEmailState.SENT_STATE)
      }, 1000)
    } catch (err) {
      console.error('Something went wrong while sending email', err)
      setTimeout(() => {
        setSendEmailState(SendEmailState.ERROR_STATE)
      }, 1000)
    }
  }

  function disableInput (state: SendEmailState): boolean {
    switch (state) {
      case SendEmailState.INITIAL_STATE:
        return false
      case SendEmailState.SENDING_STATE:
        return true
      case SendEmailState.SENT_STATE:
        return true
      case SendEmailState.ERROR_STATE:
        return false
    }
  }

  function buttonIcon (state: SendEmailState): JSX.Element {
    switch (state) {
      case SendEmailState.INITIAL_STATE:
        return <></>
      case SendEmailState.SENDING_STATE:
        return <AutorenewIcon className="spin"/>
      case SendEmailState.SENT_STATE:
        return <VerifiedIcon/>
      case SendEmailState.ERROR_STATE:
        return <></>
    }
  }

  function sendBtnText (state: SendEmailState): string {
    switch (state) {
      case SendEmailState.INITIAL_STATE:
        return 'send'
      case SendEmailState.SENDING_STATE:
        return 'sending'
      case SendEmailState.SENT_STATE:
        return 'sent'
      case SendEmailState.ERROR_STATE:
        return 'try again'
    }
  }

  return (
    <section id="Contact">
      <h1>Contact</h1>
      <form autoComplete="on" ref={emailForm}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          spellCheck={false}
          autoComplete="on"
          disabled={disableInput(sendEmailState)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          spellCheck={false}
          autoComplete="on"
          disabled={disableInput(sendEmailState)}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          disabled={disableInput(sendEmailState)}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          disabled={disableInput(sendEmailState)}
          required
        ></textarea>
        <button
          type="submit"
          className="btn"
          disabled={disableInput(sendEmailState)}
        >
          <span>{sendBtnText(sendEmailState)}</span>
          {buttonIcon(sendEmailState)}
        </button>
      </form>
      {
        sendEmailState === SendEmailState.ERROR_STATE
          ? <p className="error-text">Something went wrong</p>
          : <></>
      }
    </section>
  )
}
