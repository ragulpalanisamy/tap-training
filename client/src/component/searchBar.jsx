import { Form, Button } from "react-bootstrap";

/**
 * child component 1
 * */
function SearchBar({
  setSearchText,
  OnClickRefresh
}) {
      return (
        <Form className="container">
          <Form.Control type="text" className="form-control flex-grow-1 mt-4" placeholder="Search the movies" 
              onChange={(event) => setSearchText(event.target.value)}/>
          <Button variant="primary" className="mt-2 m-2" type="submit" onClick={OnClickRefresh}>
            Search
          </Button>
          <Button
            variant="success"
            className="mt-2 m-2"
            type="submit"
            onClick={OnClickRefresh}
          >
            Refresh
          </Button>
        </Form>
      );
}

export default SearchBar;
