import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, FormFile } from 'react-bootstrap';
import getProductAnswers from '../api/getProductAnswers';

const AnswerFormModInputs = ({ onHide, question, setAnswers }) => {
<<<<<<< Updated upstream
=======
  const [validated, setValidated] = useState(false);
>>>>>>> Stashed changes
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
    photos: [],
  });

  function submitForm(event) {
    event.preventDefault();
<<<<<<< Updated upstream
=======
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
>>>>>>> Stashed changes
    axios({
      method: 'post',
      url: `http://52.26.193.201:3000/qa/${question.question_id}/answers`,
      data: {
        body: state.body,
        name: state.name,
        email: state.email,
        photos: state.photos,
      },
    })
      .then(() => {
        onHide();
        getProductAnswers(question.question_id)
          .then((res) => {
            let sellerFirst = [];
            let filtered = res.data.results.filter((answer) => answer.answerer_name === 'Seller');
            if (filtered.length > 0) {
              filtered.map((answer) => sellerFirst.push(answer));
              for (let i = 0; i < res.data.results.length; i += 1) {
                if (res.data.results[i].answerer_name !== 'Seller') {
                  sellerFirst.push(res.data.results[i]);
                }
              }
              setAnswers(sellerFirst);
            } else {
              setAnswers(res.data.results);
            }
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (

    <div>
<<<<<<< Updated upstream
      <Form onSubmit={submitForm}>

        <Form.Group controlId="body">
          <Form.Label>Your Answer*</Form.Label>
          <Form.Control as="textarea" rows="3" name="body" value={state.body} maxlength="1000" onChange={handleChange} />
=======
      <Form noValidate validated={validated} onSubmit={submitForm}>

        <Form.Group controlId="body">
          <Form.Label>Your Answer*</Form.Label>
          <Form.Control required as="textarea" rows="3" name="body" value={state.body} maxlength="1000" onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide an answer.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
>>>>>>> Stashed changes
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>What is your nickname?*</Form.Label>
          <Form.Text className="jgd-faded">
            For privacy reasons, do not use your full name or email address
          </Form.Text>
<<<<<<< Updated upstream
          <Form.Control as="textarea" rows="1" name="name" maxlength="60" placeholder="Example: jack543!" value={state.name} onChange={handleChange} />
=======
          <Form.Control required as="textarea" rows="1" name="name" maxlength="60" placeholder="Example: jack543!" value={state.name} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please choose a nickname.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
>>>>>>> Stashed changes
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address*</Form.Label>
          <Form.Text className="jgd-faded">
            For authentication reasons, you will not be emailed
          </Form.Text>
<<<<<<< Updated upstream
          <Form.Control type="email" placeholder="Example: jack@email.com" maxlength="60" name="email" value={state.email} onChange={handleChange} />
=======
          <Form.Control required type="email" placeholder="Example: jack@email.com" maxlength="60" name="email" value={state.email} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
>>>>>>> Stashed changes
        </Form.Group>

        <Form.Group>
          <Form.File
            id="Reviewfile added"
            name="file"
            label="Upload photos"
            as="div"
          >
            <FormFile.Input multiple />
          </Form.File>
        </Form.Group>

        <Button variant="primary" type="submit" size="lg" className="float-right">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AnswerFormModInputs;
