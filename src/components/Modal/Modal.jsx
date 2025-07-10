import { useEffect } from "react";

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(e) {
    if (e.current.target === e.target) {
      onClose();
    }
  }

  return (
    <div onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>
  );
};
