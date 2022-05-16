import React from 'react';
import './App.css';
//icons
import webdesign from './assets/icons/icon1.png';
import photography from './assets/icons/icon2.png';
import menagement from './assets/icons/icon3.png';
import analystic from './assets/icons/icon4.png';
import video from './assets/icons/icon5.png';
import videocamera from './assets/icons/icon6.png';
//components
import Card from "./Components/Card/card";
import Button from "./Components/Button/button";
import Details from "./dummyData/list";
import Datas from './dummyData/datas';

function App(){

const handleClick=()=>{
    alert('Check Course Clicked');
}
const url='localhost:3000';
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <Card className="card1">
                  <img src={webdesign} alt="webdesign"></img>
                  <Datas title={Details[0].title}
                         description={Details[0].description}/>
                  <Button onClick={handleClick}
                          styleClass='btn bcard1'
                  ></Button>
              </Card>
              <Card className="card2">
                  <img src={photography} alt="photography"></img>
                  <Datas
                      title={Details[1].title}
                      description={Details[1].description}/>
                  <Button onClick={handleClick}
                          styleClass='btn bcard2'
                  ></Button>
              </Card>
              <Card className="card3">
                  <img src={menagement} alt="menagement"></img>
                  <Datas
                      title={Details[2].title}
                      description={Details[2].description}/>
                  <Button onClick={handleClick}
                          styleClass='btn bcard3'
                  ></Button>
              </Card>
              <div className="break"></div>
              <Card className="card4">
                  <img src={analystic} alt="analystic"></img>
                  <Datas
                      title={Details[3].title}
                      description={Details[3].description}/>
                  <Button onClick={handleClick}
                          styleClass='btn bcard4'
                  ></Button>
              </Card>
              <Card className="card3">
                  <img src={video} alt="video"></img>
                  <Datas
                      title={Details[4].title}
                      description={Details[4].description}/>

                  <Button onClick={handleClick}
                          styleClass='btn bcard5'
                  ></Button>
              </Card>
              <Card className="card1">
                  <img src={videocamera} alt="videocamera"></img>
                  <Datas
                      title={Details[5].title}
                      description={Details[5].description}/>
                  <Button onClick={handleClick}
                          styleClass='btn bcard6'
                  ></Button>
              </Card>
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
