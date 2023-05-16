import { Spinner } from "react-bootstrap";

function loader() {
  return (
    
      <Spinner animation="border" style = {{flex:1, 
        marginTop:240,
        justifyContent: 'center',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'center'
      }}/>

  )
};

export default loader;