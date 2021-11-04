import { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchError, getDog} from './../actions';

const Doggo =({ dog, isFetching, error, dispatch})=>{
    useEffect(()=> {
        dispatch(getDog());
      }, []);
    
      if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching a Doggo for ya!</h2>;
      }
    
    const handleClick =()=>{
        dispatch(getDog());
    }
    return(
        <>
        <div>
          <h2>Say Hi to this Doggo!</h2>
          <img width='70%' height='70%' src={dog.message}/>
        </div>
        <button onClick={handleClick}>Get new Doggo</button>
      </>
    )
}

const mapStateToProps = state =>{
    return{
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
}
}



export default connect(mapStateToProps)(Doggo);