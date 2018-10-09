import React from 'react';
const { AltItem } = require('./altItem.js')
const { PinnedElement } = require('./PinnedElement.js')
const { NotSure, SubmitOrError } = require('./unknownLogic.js')

const ListItem = ({name}) => (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement repo="ERRORSCREAM" user="MichaelDimmitt" description="stdout to error" starCount={1}/>
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
    /* classes used, externally, 
      "js-pinned-repos-reorder-container"
      "js-pinned-repos-reorder-form"
      "js-pinned-repos-reorder-list"
    */
    console.log('next', this.state.showy)
    return (
      <div className="mainy" >
        <div style={{padding: '10px 0px 0px 10px', flex:'12', justifyContent:'space-evenly'}}>
          <div >
            <div className="js-pinned-repos-reorder-container">
            {/*above element needed for error message*/}
              <SubmitOrError/>
                <form className="js-pinned-repos-reorder-form" id="user-11463275-pinned-repos-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_repositories"
                  acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
                  name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" />
                {/*above element needed for error message*/}
                
                <ol className="thing try js-pinned-repos-reorder-list" >
                  <ListItem/>
                  <ListItem/>
                  <AltItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>
                  <ListItem/>

                  <ListItem/>
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

