import React from 'react'
import './App.css';
import Form from './Components/Form'



function App() {
  return (
    <React.Fragment>
      <Form
        formData={
          {
            productId: "",
            sellingPrice: "",
            productName: "",
            category: ""
          }
        } />
    </React.Fragment>
  );
}

export default App;
