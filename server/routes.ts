// import type { Express } from "express";
// import { createServer, type Server } from "http";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();


// export async function registerRoutes(app: Express): Promise<Server> {
//   // Contact form submission route
//   app.post('/api/contact', async (req, res) => {
//     try {
//       const { name, email, phone, service, message } = req.body;

//       // Validate required fields
//       if (!name || !email || !phone || !service || !message) {
//         return res.status(400).json({ message: "All fields are required" });
//       }

//       // Configure nodemailer transporter
//       // IMPORTANT: Use environment variables for sensitive data in production
//       console.log('SMTP config:', {
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: process.env.SMTP_SECURE,
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS ? '***' : undefined,
//         from: process.env.EMAIL_FROM,
//         to: process.env.EMAIL_TO
//       });

//       template: ` 
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="UTF-8">
//           <title>Thank You for Contacting Us</title>
//         </head>
//         <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
//           <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
//             <tr>
//               <td align="center">
//                 <table width="600" border="0" cellspacing="0" cellpadding="40" style="background-color: #ffffff; margin: 40px 0; border-radius: 10px;">
//                   <tr>
//                     <td align="center" style="background-color: #0d6efd; color: #ffffff; padding: 20px 0; border-radius: 10px 10px 0 0;">
//                       <h1 style="margin: 0; font-size: 24px;">AG Security Solutions</h1>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style="color: #333333;">
//                       <h2 style="margin-top: 0;">Thank You for Reaching Out!</h2>
//                       <p>Dear {{name}},</p>
//                       <p>We have received your message and one of our team members will be in touch with you shortly.</p>
//                       <p>Here's a copy of your submission:</p>
//                       <ul style="padding-left: 20px;">
//                         <li><strong>Email:</strong> {{email}}</li>
//                         <li><strong>Phone:</strong> {{phone}}</li>
//                         <li><strong>Service Interested In:</strong> {{service}}</li>
//                         <li><strong>Message:</strong> {{message}}</li>
//                       </ul>
//                       <p>If this wasn't you, please ignore this email.</p>
//                       <p>Thanks again for contacting us!</p>
//                       <p style="margin-bottom: 0;">Best Regards,</p>
//                       <p style="margin-top: 5px;">AG Security Team</p>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td align="center" style="background-color: #f1f1f1; font-size: 12px; color: #777777; padding: 20px; border-radius: 0 0 10px 10px;">
//                       © 2025 AG Security Solutions. All rights reserved.<br>
//                       123 Business Road, Your City, Country
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//         </body>
//         </html>
//       `

//       const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST, // e.g., 'smtp.example.com'
//         port: parseInt(process.env.SMTP_PORT || '587', 10), // e.g., 587 or 465
//         secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
//         auth: {
//           user: process.env.SMTP_USER, // Your SMTP username
//           pass: process.env.SMTP_PASS, // Your SMTP password
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_FROM, // Sender address (e.g., '"Your Website" <noreply@example.com>')
//         to: process.env.EMAIL_TO, // List of receivers (your email address)
//         subject: 'New Contact Form Submission', // Subject line
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`, // Plain text body
//         html: `<p><strong>Name:</strong> ${name}</p>
//                <p><strong>Email:</strong> ${email}</p>
//                <p><strong>Phone:</strong> ${phone}</p>
//                <p><strong>Service:</strong> ${service}</p>
//                <p><strong>Message:</strong> ${message}</p>`, // HTML body
//       };

//       // Send mail
//       await transporter.sendMail(mailOptions);
//       console.log('Contact form email sent successfully');
//       return res.status(200).json({ message: "Message sent successfully" });

//     } catch (error) {
//       console.error("Error processing contact form:", error);
//       return res.status(500).json({ message: "An error occurred while processing your request" });
//     }
//   });

//   const httpServer = createServer(app);

//   return httpServer;
// }



import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Get the base URL for the server
      const baseUrl = `${req.protocol}://${req.get('host')}`;
      const logoUrl = `${baseUrl}/static/logo.png`;

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
                      <p style="margin-top: 5px;">AG Security Team</p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="background-color: #f1f1f1; font-size: 12px; color: #777777; padding: 20px; border-radius: 0 0 10px 10px;">
                      © 2025 AG Security Solutions. All rights reserved.<br>
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

      // Send mail to site owner
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Service:</strong> ${service}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      };
      await transporter.sendMail(mailOptions);

      // Send confirmation email to user
      const userReplyMail = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "We've received your message!",
        html: htmlTemplate,
      };
      await transporter.sendMail(userReplyMail);

      return res.status(200).json({ message: "Message sent successfully" });

    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
