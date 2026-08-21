import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, discipline, currency, budget, customBudget, message } = body;

    const finalBudget = budget === "Custom" ? customBudget : `${currency}${budget}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['sdulawat.work@gmail.com', 'sdulawat9174799616@gmail.com'],
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
      return NextResponse.json({ error: data.message }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
