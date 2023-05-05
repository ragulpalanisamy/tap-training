import {Form , Button } from "react-bootstrap";


 function SearchBar() {
  return (
    <Form>
        <Form.Control type="text" placeholder="Search the movies" />
        <Button variant="primary" className= 'mt-2 m-2' type="submit">
        Search
    </Button>
    <Button variant="danger" className= 'mt-2 m-2' type="submit">
    Delete
    </Button>
 </Form>
  );
}

export default SearchBar;