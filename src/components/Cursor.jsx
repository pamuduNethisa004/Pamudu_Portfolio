// ============================================================
//  Cursor.jsx — Custom animated cursor
// ============================================================

import { useEffect } from 'react';
import './Cursor.css';

function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    const onMove = e => {
      dot.style.left  = e.clientX - 5  + 'px';
      dot.style.top   = e.clientY - 5  + 'px';
      ring.style.left = e.clientX - 18 + 'px';
      ring.style.top  = e.clientY - 18 + 'px';
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}

export default Cursor;
