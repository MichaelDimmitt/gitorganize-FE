import React from 'react';
const { AltItem } = require('./altItem.js')
const { PinnedElement } = require('./PinnedElement.js')
const { NotSure, SubmitOrError } = require('./unknownLogic.js')
const { Header, Dropdown } = require('./Components.js')



const ListItem = ({repo, user, description, starCount, majorityLanguage, languageColor}) => {

  return (
    <li className="pinned-item-list-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-item-list-item public source reorderable sortable-button-item">
      <PinnedElement info={{ repo, user, description, starCount, majorityLanguage, languageColor }} />
    </li>
  );
}

const NewItem = ({ info:{repo, user, description, starCount, majorityLanguage, languageColor}}) => {

  return (
    <li className="pinned-item-list-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-item-list-item public source reorderable sortable-button-item">
      <PinnedElement info={{ repo, user, description, starCount, majorityLanguage, languageColor }} />
    </li>
);
}

class PinnedScrollbar extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [3,2,1,0,-1,-2],
      orderList:[],
      listOfAllRepos: [
        { // list of repos:
          repo: "De-Nest",
          user: "MichaelDimmitt",
          starCount: 1,
          majorityLanguage: "Javascript",
          languageColor: "#f1e05a",
          description: "flatten_a_deeply_nested_object-or-array, just print out all the keys, just print out all the values. format the stuff do the things."
        },
        {
          repo:"the_willywanka_gitfactory",
          user:"MichaelDimmitt",
          starCount:3,
          majorityLanguage:"Shell",
          languageColor:"#89e051",
          description:"Want me to build you something in git? open an issue or direct message me on slack. 😁 "
        },
        {
          repo:"emoji-terminal",
          user:"MichaelDimmitt",
          starCount:4,
          majorityLanguage:"Shell",
          languageColor:"#89e051",
          description:" 😂 🤖 🤓 😲 🤑 😎 🤔 👌 😍 🔥 🔥 🔥 🤗 - supports all terminal shells"
        },
        {
          repo:"ERRORSCREAM",
          user:"MichaelDimmitt",
          starCount:1,
          majorityLanguage:"Shell",
          languageColor:"#89e051",
          description:"stdout to error"
        }
      ]
    }
    this.state.orderList = this.state.arr.filter(x => Math.sign(x) > -1 );
    this.onSortEnd = this.onSortEnd.bind(this)
  };

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      arr: arrayMove(this.state.arr, oldIndex, newIndex)
    });
  };

  makeNegative({index, arr, orderList}) {
    console.log(orderList)
    const arrIndex = arr.indexOf(orderList[index])
    if( Math.sign(arr[arrIndex] !== -1)) {
      arr[arrIndex] *= -1
      this.setState({
        arr:arr
      })
    }
  }

  componentDidUpdate() {
    console.log('hi',this.state.arr,'hi')
  }


  render() { /* classes used, externally, "js-pinned-repos-reorder-container" "js-pinned-repos-reorder-form" "js-pinned-repos-reorder-list" */
  console.log('hi',this.state.arr,'hi')
    const ListRepos = ({orderList}) =>{
     return this.state.orderList.map((repoOrderValue) => (
        <NewItem info={this.state.listOfAllRepos[repoOrderValue]} />
      ));
    }

    return (
      <div className="mainy" >
        <div className="js-pinned-items-reorder-container" style={{padding: '10px 0px 0px 10px', flex:'12', justifyContent:'space-evenly'}}> {/*element needed for error message*/}
          <Header/>
          <br/>
          <button type="submit" onClick={() => this.makeNegative({index:1, arr: this.state.arr, orderList:this.state.orderList})}></button>
          <form className="js-pinned-items-reorder-form" id="user-11463275-pinned-items-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_items" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" /> {/*element needed for error message*/}
            <ol className="thing try js-pinned-items-reorder-list" >
              <ListRepos orderList={this.state.orderArray}/>
            </ol>
          </form>
        </div>
        <Dropdown/>
      </div>
    );
  }
}
export default PinnedScrollbar;

