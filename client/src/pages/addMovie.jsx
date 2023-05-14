import { Outlet } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

function AddMovie() {
  const AddMovieForm = () => {
    const [formValues, setFormValues] = useState({});

    const onChangeFormField = (event) => {
      const { value, name, type } = event.target;

      setFormValues({
        ...formValues,
        [name]: type === "number" ? Number(value) : value,
      });
    };

    const onClickSubmit = () => {
      console.log(formValues);
    };

    return (
      <Card className="mt-5 mx-5">
        <Card.Header className="text-center">
          <h4>ADD MOVIES</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" name="title" onChange={onChangeFormField} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Movie Rating</Form.Label>
            <Form.Control type="number" name="rating" onChange={onChangeFormField} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Movie Poster</Form.Label>
            <Form.Control type="text" name="poster" onChange={onChangeFormField} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={onClickSubmit}>
            Add Movie
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <Outlet />
      <AddMovieForm />
    </div>
  );
}

export default AddMovie;
