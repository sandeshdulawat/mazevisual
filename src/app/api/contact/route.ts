import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, discipline, currency, budget, customBudget, message } = body;

    const finalBudget =
      budget === "Custom"
        ? (customBudget || "Custom")
        : (budget && currency && budget.includes(currency) ? budget : `${currency || ""}${budget || ""}`);

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const isTestingDomain = fromEmail.includes('resend.dev');

    // Resend's onboarding@resend.dev test domain only allows sending to the account owner's email.
    // If a custom verified domain is used in RESEND_FROM_EMAIL, multiple recipients are allowed.
    const toEmails = isTestingDomain
      ? ['sdulawat.work@gmail.com']
      : ['sdulawat.work@gmail.com', 'sdulawat9174799616@gmail.com'];

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmails,
        reply_to: email,
        subject: `New Commission Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #000; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Commission Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Discipline:</strong> ${discipline}</p>
            <p><strong>Budget:</strong> ${finalBudget}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin-top: 0;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json(data);
    } else {
      console.error("Resend API error:", data);
      return NextResponse.json({ error: data.message || 'Failed to send email' }, { status: res.status || 400 });
    }
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: error?.message || 'Failed to send email' }, { status: 500 });
  }
}
