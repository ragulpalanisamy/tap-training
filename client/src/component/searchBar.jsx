import { Form, Button } from "react-bootstrap";

/**
 * child component 1
 * */
function SearchBar(props) {
  return (
    <Form>
      <Form.Control type="text" placeholder="Search the movies" />
      <Button variant="primary" className="mt-2 m-2" type="submit">
        Search
      </Button>
      <Button
        variant="success"
        className="mt-2 m-2"
        type="submit"
        onClick={props.OnClickRefresh}
      >
        Refresh
      </Button>
    </Form>
  );
}

export default SearchBar;
