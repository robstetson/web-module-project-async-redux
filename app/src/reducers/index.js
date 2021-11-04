import {FETCH_START, FETCH_ERROR, FETCH_SUCCESS} from '../actions';

const initialState ={
    dog:{
    message:'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3124.jpg'
    },
    isFetching: false,
    error: ''

}
export const reducer =(state =initialState, action) =>{
    switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            dog: {},
            isFetching:true,
            error:''
          });
        case(FETCH_SUCCESS):
          return({
            ...state,
            dog: action.payload,
            isFetching: false,
            error: ''
          });
        case(FETCH_ERROR):
          return({
            ...state,
            dog:{},
            isFetching: false,
            error: action.payload
          })
        default:
          return state;
      }
    };