// netlify/functions/contact.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, phone, service, message } = JSON.parse(event.body);

        // Input validation (add more robust validation as needed)
        if (!name || !email || !message) {
            return { statusCode: 400, body: 'Missing required fields' };
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email to the admin/owner
        const adminMailOptions = {
            from: process.env.EMAIL_FROM, // sender address
            to: process.env.EMAIL_TO, // list of receivers
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService Interest: ${service || 'N/A'}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || 'N/A'}</p><p><strong>Service Interest:</strong> ${service || 'N/A'}</p><p><strong>Message:</strong></p><p>${message}</p>`, // HTML body
        };


        const htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Thank You for Contacting Us</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
                <tr>
                    <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="40" style="background-color: #ffffff; margin: 40px 0; border-radius: 10px;">
                        <tr>
                        <td align="left" style="background-color: #0d6efd; color: #ffffff; padding: 20px; border-radius: 10px 10px 0 0;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                            <td valign="middle" style="padding-left: 15px;">
                                <h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: bold;">AG MANPOWER SERVICE</h1>
                            </td>
                            </tr>
                        </table>
                        </td>
                        </tr>
                        <tr>
                        <td style="color: #333333;">
                            <h2 style="margin-top: 0;">Thank You for Reaching Out!</h2>
                            <p>Dear ${name},</p>
                            <p>We have received your message and one of our team members will be in touch with you shortly.</p>
                            <p>Here's a copy of your submission:</p>
                            <ul style="padding-left: 20px;">
                            <li><strong>Email:</strong> ${email}</li>
                            <li><strong>Phone:</strong> ${phone}</li>
                            <li><strong>Service Interested In:</strong> ${service}</li>
                            <li><strong>Message:</strong> ${message}</li>
                            </ul>
                            <p>If this wasn't you, please ignore this email.</p>
                            <p>Thanks again for contacting us!</p>
                            <p style="margin-bottom: 0;">Best Regards,</p>
                            <p style="margin-top: 5px;">AG MANPOWER Team</p>
                        </td>
                        </tr>
                        <tr>
                        <td align="center" style="background-color: #f1f1f1; font-size: 12px; color: #777777; padding: 20px; border-radius: 0 0 10px 10px;">
                            © 2025 AG MANPOWER Service. All rights reserved.<br>
                            Rz-44/271, Hans Park, West Sagarpur, New Delhi-110046, India
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </body>
            </html>
            `;


        // Auto-response email to the user
        const userMailOptions = {
            from: process.env.EMAIL_FROM, // sender address
            to: email, // user's email address
            subject: `Thank you for contacting AG MANPOWER Service`,
            text: `Dear ${name},\n\nThank you for contacting AG MANPOWER Service. We have received your inquiry and will get back to you as soon as possible.\n\nHere's a summary of your message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService Interest: ${service || 'N/A'}\nMessage: ${message}\n\nWe appreciate your interest in our services and will respond to your inquiry within 24-48 hours.\n\nBest Regards,\nAG MANPOWER Service Team`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h2 style="color: #4CAF50;">Thank You for Contacting Us</h2>
                    </div>
                    <p>Dear ${name},</p>
                    <p>Thank you for contacting AG MANPOWER Service. We have received your inquiry and will get back to you as soon as possible.</p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                        <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                    <p>We appreciate your interest in our services and will respond to your inquiry within 24-48 hours.</p>
                    <p>Best Regards,<br>AG MANPOWER Service Team</p>
                </div>
            `
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.' }),
        };
    }
};