import { useEffect } from 'react';

export const Button = ({ name, isBeam = false, containerClass }) => {
    let contact;
    useEffect(() => {
        contact = document.getElementById('connect');
    })

    const scrollToBottom = () => {
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  return (
    <button className={`btn ${containerClass}`} onClick={scrollToBottom}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};