import React from 'react';
import HeaderLogin from './headerLogin';


const App = props => {
  return (
    <div>
      <HeaderLogin />
      {props.children}
    </div>
  )
}

export default App;