import React from 'react';

class myComponent extends React.Component {
  state = {
    persons: [],
  };

  sendGetRequest = () => {
    return axios({
      url: 'http://dummy.restapiexample.com/api/v1/employees',
      method: 'get',
    }).then((response) => {
      console.log(response);
      return response.data;
    });
  };
}
export default myComponent;
