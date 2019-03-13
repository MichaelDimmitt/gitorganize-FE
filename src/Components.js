import React from 'react';
export { Header, Dropdown }

const Header = () => {
  return <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
    <div style={{width: '100%', borderStyle: 'solid', textAlign:'center', marginLeft:'10px', marginRight:'10px'}}>
      <h2 style={{width:'100%'}}  className="" >Add a new remote/repository</h2>
      {/*"custom f4 mb-2 text-normal"*/}
    </div>
    <div style={{width: '100%', borderStyle: 'solid', textAlign:'center', marginLeft:'10px', marginRight:'10px'}}>
      <h2 style={{width:'100%'}} className="" aria-haspopup="dialog">Customize/Add Theme</h2>
      {/*"btn-link muted-link float-right mt-1 pinned-repos-setting-link"*/}
    </div>
  </div>
}

export default class Dropdown extends React.Component {
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
      <div className="dropdown" style={{flex:'1', paddingTop: '15px', paddingRight: '10px'}}>
        <button onClick={this.myFunction} style={{width:"100%"}} className="dropbtn">Themes</button>
        <div id="myDropdown" style={{right:'10px'}} className={"dropdown-content"+ ( (this.state.showy===true) ? " show" : "")}>
          <input type="text" placeholder="Search.." id="myInput" />
          <a href="#about">Pinned Repositories</a>
          <a href="#base">Business Related</a>
          <a href="#blog">Coding Related</a>
          <a href="#contact">WorkBench Current</a>
          <a href="#custom">WorkBench Finance</a>
          <a href="#support">WorkBench Support</a>
          <a href="#tools">WorkBench Social</a>
        </div>
      </div>
    )
  }
}