import React from 'react';
import './App.css';
//components
import Card from "./Components/Card/card";
import Details from "./dummyData/list";
import Datas from './dummyData/datas';

function App(){
const url='localhost:3000';
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
                 {Details.map((respond)=>(
                     <Card className={respond.background}>
                         <Datas
                             iconimage={respond.iconimage}
                             title={respond.title}
                             description={respond.description}
                             btnstyle={respond.btnstyle}/>
                     </Card>
                 ))}
          </div>

          <div className="center">
              <div className="pagination">
                  <a href={url} className="active">1</a>
                  <a href={url}>2</a>
                  <a href={url}>3</a>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
