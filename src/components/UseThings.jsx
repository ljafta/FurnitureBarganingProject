import React from 'react';

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
        debugger;
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

  const rows = [
    createData('GP', 'General Practioner', '1', '011155'),
    createData('GS', 'General Surgen', '2', '0256223'),
    createData('GP', 'General Physcholigist', '3', '0215899'),
    createData('GD', 'General Dentist', '4', '031589'),
    createData('GO', 'General Optometrist', '5', '0458977'),
  ];

  const [state, dispatch] = React.useReducer(reducer, {
    things: [
      {
        name: 'GD',
        desc: 'General Practioner',
        sort: '4',
        contact: '011155',
      },
    ],
  });

  return {
    state,
    dispatch,
  };
};

export default useThings;
