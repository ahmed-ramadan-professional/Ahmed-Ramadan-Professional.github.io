import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle2, Loader2, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../SectionHeading/SectionHeading';

// Uses Formspree when profile.formspreeId is set; otherwise falls back to
// opening the visitor's mail client with a prefilled message.
export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const usingFormspree = Boolean(profile.formspreeId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if (!usingFormspree) {
      // mailto fallback
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      form.reset();
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Have a role, a project or a question? Send me a message."
      />

      <div className="grid gap-8 md:grid-cols-5">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col justify-between gap-6 p-6 md:col-span-2"
        >
          <div>
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Whether it's a role, a project or a question — reach out and I'll get back to you.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-slate-600 transition-colors hover:text-accent dark:text-slate-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={16} />
              </span>
              <span className="break-all">{profile.email}</span>
            </a>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin size={16} />
              </span>
              {profile.location}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-300"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass grid gap-4 p-6 md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-slate-600 dark:text-slate-300">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role or project…"
              className="resize-none rounded-xl border border-slate-200 bg-white/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            ) : status === 'sent' ? (
              <>
                <CheckCircle2 size={16} /> Message sent
              </>
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </button>

          {status === 'sent' && (
            <p className="text-center text-sm text-emerald-500">
              Thanks! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-rose-500">
              Something went wrong — email me directly at {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-600 dark:text-slate-300">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 bg-white/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </label>
  );
}
