//do everything in app component

import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: null
  }

  async componentDidMount() {
    //1. make get req to api http://localhost:5000/lasagne(fetch)
    const response = await fetch (process.env.REACT_APP_BACKEND_URL + "/lasagne")
    //2. put result from api call into state
   const data = await response.json()
   console.log(data)
   this.setState({
     data: data
   })
    //3. this will make render run again and dom can be updated
    //but remember render runs first, then comp did mount, then render again! 


  }
  render () {
    const {data} = this.state
    return (
    <div>
      <h1>lasagne app</h1>
      <h3>all lasagnes</h3>
      {data ? data.map((lasagne, index) => {
        return (
          <div key={index}>
            <h4>{lasagne.name}</h4>
          </div>
        )
      }) : null}
    </div>)
  };
}

export default App;
