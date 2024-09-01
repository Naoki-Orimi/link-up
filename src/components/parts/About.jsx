import React from 'react';
import { Button } from '@mui/material';
import { Container, Row, Col, Navbar, Nav, Form, Modal } from 'react-bootstrap';

function About({ onClose }) {
  return (
    <div>
      {/* 以下のクラス名はTailwindクラス */}
      <h2 className="bg-blue-500 text-red p-2">About</h2>
      <p>This is the about content.</p>
      <Button variant="contained" onClick={onClose}>Close</Button>
    </div>
  );
}

export default About;
