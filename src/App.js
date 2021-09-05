import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

export default function App() {

  const [mode, setMode] = useState('light');
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark', document.body.style.backgroundColor = "#042743")
      setBtnText("Enable light Mode")
      showAlert("Dark mode has been enabled", "success")
      document.title = ("TextUtils - Dark Mode")
    } else {
      setMode('light', document.body.style.backgroundColor = "white")
      setBtnText("Enable dark Mode")
      showAlert("Light mode has been enabled", "success")
      document.title = ("TextUtils - Light Mode")
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
      <Alert alert={alert} />
      <div className="container my-2">
        <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />
      </div>
    </>
  );
};
