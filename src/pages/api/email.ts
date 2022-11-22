import sgMail from '@sendgrid/mail'

import type { NextApiRequest, NextApiResponse } from 'next'

const sendgridApiKey = process.env.SENDGRID_API_KEY

// using sendgrid mail service, up to 100 emails per day for free
sgMail.setApiKey(sendgridApiKey ? sendgridApiKey : '')

type Email = {
  email: string;
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message }: Email = req.body

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' })
  }

  try {
    const emailConfig = {
      to: 'datsfilipe.dev@gmail.com',
      from: 'datsfilipe.dev@gmail.com',
      subject: 'New message from your portfolio',
      text: message,
      html: `<p>${message}</p><br /><p>Reply to: ${email}</p>`,
    }

    await sgMail.send(emailConfig)

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}
