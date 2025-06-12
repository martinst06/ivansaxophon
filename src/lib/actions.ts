'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const contactData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    address: formData.get('address') as string,
    eventType: formData.get('eventType') as string,
    performanceType: formData.get('performanceType') as string,
    guests: formData.get('guests') as string,
    place: formData.get('place') as string,
    eventAddress: formData.get('eventAddress') as string,
    eventDate: formData.get('eventDate') as string,
    durationType: formData.get('durationType') as string,
    message: formData.get('message') as string,
  }

  // Validate required fields
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'eventType', 'performanceType', 'guests', 'place', 'eventAddress', 'eventDate', 'durationType']
  
  for (const field of requiredFields) {
    if (!contactData[field as keyof typeof contactData]) {
      throw new Error(`${field} is required`)
    }
  }

  // Create email HTML content
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #cd7f32; text-align: center; margin-bottom: 30px; font-size: 28px;">
          🎷 New Contact Form Submission
        </h1>
        
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #cd7f32; padding-bottom: 10px;">
            👤 Personal Information
          </h2>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
          <p><strong>Address:</strong> ${contactData.address}</p>
        </div>

        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #cd7f32; padding-bottom: 10px;">
            🎉 Event Details
          </h2>
          <p><strong>Event Type:</strong> ${contactData.eventType}</p>
          <p><strong>Performance Type:</strong> ${contactData.performanceType}</p>
          <p><strong>Number of Guests:</strong> ${contactData.guests}</p>
          <p><strong>Venue:</strong> ${contactData.place}</p>
          <p><strong>Event Address:</strong> ${contactData.eventAddress}</p>
          <p><strong>Event Date:</strong> ${new Date(contactData.eventDate).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p><strong>Duration:</strong> ${contactData.durationType}</p>
        </div>

        ${contactData.message ? `
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #cd7f32; padding-bottom: 10px;">
            💬 Additional Message
          </h2>
          <p style="font-style: italic; line-height: 1.6;">"${contactData.message}"</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px;">
            This inquiry was submitted through the Ivan Saxophon contact form.<br>
            Please respond promptly to provide excellent customer service.
          </p>
        </div>
      </div>
    </div>
  `

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'contact@ivansaxophon.ch',
      to: [process.env.EMAIL_TO || 'info@ivansaxophon.ch'],
      subject: `🎷 New Booking Inquiry from ${contactData.firstName} ${contactData.lastName}`,
      html: emailHtml,
      replyTo: contactData.email,
    })

    if (error) {
      console.error('Error sending email:', error)
      throw new Error('Failed to send email')
    }

    console.log('Email sent successfully:', data)
    
    // Optionally send a confirmation email to the customer
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'contact@ivansaxophon.ch',
      to: [contactData.email],
      subject: '🎷 Thank you for your inquiry - Ivan Saxophon',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #cd7f32; text-align: center; margin-bottom: 30px;">
              🎷 Thank You for Your Inquiry!
            </h1>
            
            <p>Dear ${contactData.firstName} ${contactData.lastName},</p>
            
            <p>Thank you for your interest in Ivan Saxophon's musical services! I have received your inquiry for your <strong>${contactData.eventType}</strong> event on <strong>${new Date(contactData.eventDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</strong>.</p>
            
            <p>I will review your request and get back to you within 24 hours with more information about availability and pricing.</p>
            
            <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #cd7f32; margin-top: 0;">Your Event Summary:</h3>
              <ul style="line-height: 1.6;">
                <li><strong>Event:</strong> ${contactData.eventType}</li>
                <li><strong>Performance:</strong> ${contactData.performanceType}</li>
                <li><strong>Date:</strong> ${new Date(contactData.eventDate).toLocaleDateString()}</li>
                <li><strong>Guests:</strong> ${contactData.guests}</li>
                <li><strong>Duration:</strong> ${contactData.durationType}</li>
                <li><strong>Venue:</strong> ${contactData.place}</li>
              </ul>
            </div>
            
            <p>If you have any immediate questions, feel free to reply to this email or call me directly.</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #cd7f32;">Ivan Saxophon</strong><br>
              <a href="mailto:info@ivansaxophon.ch">info@ivansaxophon.ch</a>
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                🎷 Creating unforgettable musical experiences for your special events
              </p>
            </div>
          </div>
        </div>
      `,
    })

  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email. Please try again.')
  }
} 