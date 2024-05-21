import logo from './logo.svg';
import './App.css';
import Top from './Top';
import Content from './Content';
import Footer from './Footer';
import './Top.css'
import './Item.css'
import './Content.css'
import './Footer.css';

function App() {
  return (
    <div className="App">
      <Top/>
      <hr/>
      <div>
        <div id="Discover"><h1>Discover Our product</h1></div>
        <div id="intro">  
          <p>Lorem ipsum dolor sit amet oluptatibus animi voluptatum amet ut eum nam distinctio. Tenetur neque facere, voluptates minus quibusdam accusamus quidem numquam molestias enim?</p>
        </div>
        <hr/>
        <div id="filterbar">
           <div>3425 items</div>
          <div>&lt;Hidden filters</div>
          <div id="filters">
                <select>
                    <option value="RECOMENDED">RECOMENDED</option>
                    <option value="NEWESTFIRST">NEWESTFIRST</option>
                     <option value="POPULAR">POPULAR</option> 
                     <option value="Price:LOW TO HIGH">Price:LOW TO HIGH</option>
                     <option value="HIGH TO LOW">HIGH TO LOW</option>
                </select>
          </div>
        </div>
        <hr/>
      </div>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
