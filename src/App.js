import face from './face.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-top">
          <img src={face} className="App-logo" alt="logo" />
          <div className="container-top-text"><div>Data Analyst & Software developer</div>
          <h1>Stephane Caron</h1>
          </div>
          </div>


          <div className="textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Duis ultricies lacus sed turpis tincidunt. Volutpat blandit aliquam etiam erat velit. Vitae nunc sed velit dignissim sodales ut. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Orci a scelerisque purus semper eget duis at tellus. Elit sed vulputate mi sit amet mauris. Mi proin sed libero enim sed. Dui id ornare arcu odio ut sem nulla pharetra. Turpis cursus in hac habitasse platea dictumst quisque. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Sociis natoque penatibus et magnis dis parturient montes. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Enim facilisis gravida neque convallis a.

Viverra ipsum nunc aliquet bibendum enim. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Sed tempus urna et pharetra pharetra massa massa ultricies. Pulvinar neque laoreet suspendisse interdum. Porta nibh venenatis cras sed. Dolor purus non enim praesent elementum facilisis. Orci phasellus egestas tellus rutrum tellus. Sodales ut eu sem integer. Enim ut sem viverra aliquet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Eu augue ut lectus arcu bibendum at varius vel. Enim tortor at auctor urna nunc id cursus metus. Ipsum a arcu cursus vitae congue mauris. Posuere ac ut consequat semper viverra nam libero.
</div>
          <div className="buttons">
            <a href="https://github.com/stephanecaron">
              <button className="btn btn-primary" href="https://github.com/stephanecaron">Github</button>
            </a>
            <a href="https://twitter.com/stephane_caron">
              <button className="btn btn-primary">Twitter</button>
            </a>
            <a href="https://www.linkedin.com/in/stephane-caron-a574333a/">
            <button className="btn btn-primary">Linkedin</button>
            </a>
            <a href="mailto:stephane@kupo.gg">
            <button className="btn btn-primary">Email</button>
            </a>
          </div>
</div>
    </div>
  );
}

export default App;
