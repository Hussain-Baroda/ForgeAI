import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { Resend } from 'resend';
/**
 * POST /api/contact
 *
 * Receives form data, validates it, and inserts a row into the
 * `leads` table in Supabase.
 *
 * Expected body (JSON):
 * {
 *   name:    string   — full name (required)
 *   email:   string   — work email (required)
 *   company: string   — company name (optional)
 *   role:    string   — job role (optional)
 *   message: string   — what they want to automate (required)
 *   budget:  string   — selected budget range (optional)
 * }
 *
 * Supabase table schema (run this SQL in your Supabase SQL editor):
 *
 *   create table leads (
 *     id         bigint generated always as identity primary key,
 *     created_at timestamptz default now(),
 *     name       text not null,
 *     email      text not null,
 *     company    text,
 *     role       text,
 *     message    text not null,
 *     budget     text,
 *     status     text default 'new'   -- new | contacted | closed
 *   );
 */
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, role, message, budget } = body;

    /* ── Validation ── */
    const errors = {};
    if (!name?.trim())    errors.name    = 'Name is required';
    if (!email?.trim())   errors.email   = 'Email is required';
    if (!message?.trim()) errors.message = 'Message is required';

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    /* ── Insert into Supabase ── */
    const { error } = await supabase.from('leads').insert([
      {
        name:    name.trim(),
        email:   email.trim().toLowerCase(),
        company: company?.trim() || null,
        role:    role?.trim()    || null,
        message: message.trim(),
        budget:  budget          || null,
        status:  'new',
      },
    ]);

    if (error) {
      console.error('[Supabase insert error]', error);
      return NextResponse.json(
        { success: false, message: 'Failed to save. Please try again.' },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.NOTIFY_EMAIL,
      subject: 'New ForgeAI Lead 🚀',
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Role:</strong> ${role || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('[Contact API error]', err);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
