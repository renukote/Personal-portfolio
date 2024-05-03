export async function sendEmail(name: string, email: string, message: string) {
  try {
    const emailData = {
      service_id: process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID,
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
      },
    };

    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (emailJsResponse.status === 200) {
      return "SUCCESS";
    } else {
      throw new Error(JSON.stringify(emailJsResponse));
    }
  } catch (error) {
    console.error("error in sending the email", error);
    return "FAILED";
  }
}
