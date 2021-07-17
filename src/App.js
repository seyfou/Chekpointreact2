import './App.css';
import Img from './rangerover.jpg';
import "./style.css";

function App() {
  return (
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
    <h1 className="titlered">Seifeddine KADHI</h1>
    <br/>
    <img src={Img} alt='rangerover'/> 
    <br/>
    <img src="/logo192.png" alt='img'/>
    <br/>
   <video style={{width:320 , height:240 }} controls src="myVideo.mp4" type="video/mp4">
     </video>
   </div>
  );
}

export default App;
