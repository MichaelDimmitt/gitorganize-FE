import React from 'react';
const { AltItem } = require('./altItem.js')
const { PinnedElement } = require('./PinnedElement.js')
const { NotSure, SubmitOrError } = require('./unknownLogic.js')

const ListItem = ({repo, user, description, starCount, majorityLanguage, languageColor}) => {
console.log('hi', {repo})
  return (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement info={{ repo, user, description, starCount, majorityLanguage, languageColor }} />
    </li>
);
}

const NewItem = ({ info:{repo, user, description, starCount, majorityLanguage, languageColor}}) => {
console.log('hi', {repo})
  return (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement info={{ repo, user, description, starCount, majorityLanguage, languageColor }} />
    </li>
);
}

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
    let listOfAllRepos = [{ // list of repos:
      repo: "De-Nest",
      user: "MichaelDimmitt",
      starCount: 1,
      majorityLanguage: "Javascript",
      languageColor: "#f1e05a",
      description: "flatten_a_deeply_nested_object-or-array, just print out all the keys, just print out all the values. format the stuff do the things."
    }]
    let orderArray = [4,3,2,1,6,5]

    return (
      <div className="mainy" >
        <div style={{padding: '10px 0px 0px 10px', flex:'12', justifyContent:'space-evenly'}}>
          <div >
            <div className="js-pinned-repos-reorder-container">
            {/*above element needed for error message*/}
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
              <div style={{width: '100%', borderStyle: 'solid', textAlign:'center', marginLeft:'10px', marginRight:'10px'}}>
                <h2 style={{width:'100%'}}  className="" >Add a new remote/repository</h2>
                {/*"custom f4 mb-2 text-normal"*/}
              </div>
              <div style={{width: '100%', borderStyle: 'solid', textAlign:'center', marginLeft:'10px', marginRight:'10px'}}>
                <h2 style={{width:'100%'}} className="" aria-haspopup="dialog">Customize/Add Theme</h2>
                {/*"btn-link muted-link float-right mt-1 pinned-repos-setting-link"*/}
              </div>
            </div>
            <br/>

                <form className="js-pinned-repos-reorder-form" id="user-11463275-pinned-repos-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_repositories"
                  acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
                  name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" />
                {/*above element needed for error message*/}

                <ol className="thing try js-pinned-repos-reorder-list" >
                  <NewItem info={listOfAllRepos[0]} />
                  <ListItem
                    repo="the_willywanka_gitfactory" user="MichaelDimmitt"
                    starCount={3} majorityLanguage="Shell" languageColor="#89e051"
                    description="Want me to build you something in git? open an issue or direct message me on slack. 😁 "
                  />
                  <ListItem
                    repo="emoji-terminal" user="MichaelDimmitt"
                    starCount={4} majorityLanguage="Shell" languageColor="#89e051"
                    description=" 😂 🤖 🤓 😲 🤑 😎 🤔 👌 😍 🔥 🔥 🔥 🤗 - supports all terminal shells"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  {/*}
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  <ListItem
                    repo="ERRORSCREAM" user="MichaelDimmitt"
                    starCount={1} majorityLanguage="Shell" languageColor="#89e051"
                    description="stdout to error"
                  />
                  */}
                </ol>
              </form>
            </div>
          </div>
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

