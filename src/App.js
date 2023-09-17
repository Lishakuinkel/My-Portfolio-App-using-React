import React from "react";
import Layout from '../src/components/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Layout />
      <ToastContainer />
    </div>
  );
}

export default App;
