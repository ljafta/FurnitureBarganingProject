import axios from 'axios';
import React, {useEffect, useReducer} from 'react';

const useThings = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_THING': {
        return {...state, things: [...state.things, action.data]};
      }
      case 'DELETE_THING': {
        return {
          ...state,
          things: [
            ...state.things.slice(0, action.index),
            ...state.things.slice(action.index + 1),
          ],
        };
      }
      case 'EDIT_THING': {
        return {
          ...state,
          things: [
            ...state.things.slice(0, action.index),
            action.data,
            ...state.things.slice(action.index + 1),
          ],
        };
      }
      default: {
        return state;
      }
    }
  };
  function createData(name, desc, sort, contact) {
    return {name, desc, sort, contact};
  }

  const endpointget = 'http://dummy.restapiexample.com/api/v1/employees';
  const url =
    'https://3zpjzh9s97.execute-api.eu-west-1.amazonaws.com/dev/doctortype';

  async function getData() {
    await axios.get(url).then((response) => {
      dispatch(response.data);
    });
  }

  async function getData() {
    const response = await axios.get(url);

    console.log('test test', response.data);
  }

  const [state, dispatch] = React.useReducer(reducer, {
    things: [],
  });

  return {
    state,
    dispatch,
    //Doctref
  };
};

export default useThings;
