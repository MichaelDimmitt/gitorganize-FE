import React from 'react';
const { AltItem } = require('./altItem.js')
const { PinnedElement } = require('./PinnedElement.js')
const { NotSure, SubmitOrError } = require('./unknownLogic.js')

const ListItem = ({name}) => (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement/>
    </li>
);

class PinnedScrollbar extends React.Component {
  constructor() {
    super();
    this.state = {showy: false};
    
    this.myFunction = this.myFunction.bind(this)
  };

  myFunction() {
    console.log('prev',this.state.showy)
    this.setState({showy: !this.state.showy})
    
  };

  render() {
    console.log('next', this.state.showy)
    return (
      <div style={{ display:'flex'}}>
        <div style={{padding: '10px 0px 0px 10px', flex:'12', justifyContent:'space-evenly'}}>
          <link crossOrigin="anonymous" media="all" integrity="sha512-mjQPRAh2Y9A0sPdZzipNfPO7PT4g06mk0uZs15DbL/vsNCRGx1uRzWVzls9MJCoy2yRNjaMmEVFKJDpCui00mA=="
            rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-df973073d880f28fbbae0263fb1ef62b.css" />
          <link crossOrigin="anonymous" media="all" integrity="sha512-sFylaerRMF2QvD7BxrJw3uWMZbqMvqlbTqActs2xcnXpypTqYf80W6OJdQHsx2GJrcmQhxU1paT9sUNjcsm/3g=="
            rel="stylesheet" href="https://assets-cdn.github.com/assets/github-c8b7f8ba21d8ea4aac7a0e4f3db4a01c.css" />
          <script crossOrigin="anonymous" integrity="sha512-j7P2Pw3104HznNqyNm7WuCF8Lstcf/sPX5meP6e5RFF177kmi6SAbkZ52A3ttKj0cRHLRrUbk7C1w1xtwh52zA=="
            type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-c163002918ede72971a36e0025f67a4a.js"></script>
          <script crossOrigin="anonymous" async="async" integrity="sha512-mKirltAYIDdLyjM6JXq3/pDWd9Hq8ZxXzbioLqfaYCw+za8uLbbYxQ/hD1+/i4zlZo0E9Cm9A6qRyU665FfQnA=="
            type="application/javascript" src="https://assets-cdn.github.com/assets/github-648fd55067472ce5fae41cdf92f72074.js"></script>

        

          <div className="col-12 float-left">

              <div className="js-pinned-repos-reorder-container">
              <SubmitOrError/>
              <form className="js-pinned-repos-reorder-form" id="user-11463275-pinned-repos-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_repositories"
                acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
                name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" />
              <ol style={{display:'flex', justifyContent:'space-evenly' }} className="pinned-repos-list  mb-4 js-pinned-repos-reorder-list" >

                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <AltItem/>
                  {/*}
                  */}
                </ol>
              </form>
            </div>
          </div>
          <NotSure/>
        </div>
        <div className="dropdown" style={{flex:'1', paddingTop: '15px', paddingRight: '10px'}}> 
          <button onClick={this.myFunction} className="dropbtn">Dropdown</button>
          <div id="myDropdown" style={{right:'10px'}} className={"dropdown-content"+ ( (this.state.showy===true) ? " show" : "")}>
            <input type="text" placeholder="Search.." id="myInput" />
            <a href="#about">About</a>
            <a href="#base">Base</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#custom">Custom</a>
            <a href="#support">Support</a>
            <a href="#tools">Tools</a>
          </div>
        </div>
      </div>
    );
  }
}
export default PinnedScrollbar;

