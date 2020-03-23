import React from 'react';
import './App.css';
import $ from 'jquery';



export default class App extends React.Component{
  componentDidMount(){
    $('.mobile-nav').on('click', ()=>{  
      $('.sidebar-menu').toggleClass('toggle');
    
    }); 
    
    $('.sidebar-menu a').on('click', ()=>{
      $('.sidebar-menu').removeClass('toggle');
    });
  }
  

  render(){
    return(
      <body>
  <div className='mobile-nav'><a href='#'>Menu</a></div>
  <section className='sidebar-menu'>
    <div>
      <h1>CSS Transform</h1>
    </div>
    
    <div>
      <nav>
        <ul>
          <li><a href='#rotate'>Rotate</a></li>
          <li><a href='#rotateX'>RotateX</a></li>
          <li><a href='#rotateY'>RotateY</a></li>
        </ul>
        <ul>
          <li><a href='#scale'>Scale</a></li>
          <li><a href='#scaleX'>ScaleX</a></li>
          <li><a href='#scaleY'>ScaleY</a></li>
        </ul>
        <ul>
          <li><a href='#skew'>Skew</a></li>
          <li><a href='#skewX'>SkewX</a></li>
          <li><a href='#skewY'>SkewY</a></li>
        </ul>
      </nav>
    </div>
    
  </section>
  
  <section class='content-body'>
    <div><div>No effect</div></div>
    <div id='rotate'>
      <div className='rotate'>340deg rotate</div>
     </div>
    <pre>
    
    transform: rotate(340deg);
    </pre>
    <div id='rotateX'>
      <div className='rotateX'>Rotate X 180deg</div>
    </div>
    <pre>
    transform: rotateX(180deg);
    </pre>
    <div id='rotateY'>
      <div className='rotateY'>Rotate Y 180deg</div>
    </div>
    <pre>
    
    transform: rotateY(180deg);
    </pre>
    <div id='scale'>
      <div className='scale'>Scale 1.3</div>
     </div>
    <pre>
    
    transform: scale(1.3);
    </pre>
    <div id='scaleX'>
      <div className='scaleX'>Scale X 1.3</div>
    </div>
    <pre>
    
    transform: scaleX(1.3);
    </pre>
    <div id='scaleY'>
      <div className='scaleY'>Scale Y 1.3</div>
    </div>
    <pre>
    
    transform: scaleY(1.3);
    </pre>
    <div id='skew'>
      <div className='skew'>Skew 340deg</div>
    </div>
    <pre>
    
    transform: skew(340deg);
    </pre>
    <div id='skewX'>
      <div className='skewX'>Skew X 340deg</div>
    </div>
    <pre>
    
    transform: skewX(340deg);
    </pre>
    <div id='skewY'>
      <div className='skewY'>Skew Y 340deg</div>
    </div>
    <pre>
    
    transform: skewY(340deg);
    </pre>
    
  </section> 
  
</body>
    )
  }
}