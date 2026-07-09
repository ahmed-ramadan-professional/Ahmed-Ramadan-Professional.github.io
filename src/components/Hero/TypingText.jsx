import { useEffect, useRef, useState } from 'react';

// Typewriter that cycles through `phrases` — type, hold, delete, next.
export default function TypingText({ phrases, typeSpeed = 70, deleteSpeed = 40, hold = 1400 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef();

  useEffect(() => {
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      timeout.current = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout.current = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout.current);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, hold]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: '1em' }} aria-hidden="true" />
    </span>
  );
}
