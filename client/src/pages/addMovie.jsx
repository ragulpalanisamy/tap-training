import { Outlet } from "react-router-dom";

function AddMovie() {
    const buildAddMovieForm = () => {
      return <h1>Add movie to the list</h1>;
    };
  
    return (
      <div>
        <Outlet />
        {buildAddMovieForm()}
      </div>
    );
  }

  export default AddMovie;