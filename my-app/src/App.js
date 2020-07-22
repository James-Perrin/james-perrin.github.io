import React, { Component }from 'react';
import './App.css';
import Topbar from './Topbar';
import Main from './Main';
import Fab from '@material-ui/core/Fab';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';



class App extends Component {
  state = {
    genre: 'EDM',
    genres: [
      {ename: 'EDM', fname: 'le EDM', id: 1},
      {ename: 'Jazz', fname: 'le Jazz', id: 2},
      {ename: 'Classical', fname: 'Classique', id: 3}
    ],
    views: [
      {ename: 'Waves', fname: 'Vagues', id: 1},
      {ename: 'Notes', fname: 'Remarques', id: 2}
    ],
    view: 'Waves',
    controls: [
      {name: 'Backward', id: 1},
      {name: 'Play', id: 2},
      {name: 'Forward', id: 3}
    ],
    play: {name: 'Play', id: 2},
    pause: {name: 'Pause', id: 2},
    language: 'EN',
    languages: [
      'EN',
      'FR'
    ]
  }

  rate = (b) => {
    console.log(b);
  }

  back = () => {
    console.log('Backward');
  }
  pauseplay = () => {
    console.log('PausePlay');
  }
  forward = () => {
    console.log('Forward');
  }

  viewButtons = () => [(<div className="FabHeader">{this.state.language === 'EN' ? 'Views' : 'Vues'}</div>)].concat(this.state.views.map(v => {
    if (this.state.language === this.state.languages[0]) {
      return (
        <Fab onClick={ ()=>{ this.setState({view: v.ename}) } } className="singleFab" variant="extended" key={v.id}> 
            {v.ename}
        </Fab>
      );
    } else {
      return (
        <Fab onClick={ ()=>{ this.setState({view: v.ename}) } } className="singleFab" variant="extended" key={v.id}> 
            {v.fname}
        </Fab>
      );
    }
  }));


  rateButtons = () => [
  (<div className="FabRateHeader">{this.state.language === 'EN' ? 'Rate' : 'Taux'}</div>),
    (<Fab onClick={()=>{this.rate(false)}} className="singleRateFab red" key="1"> 
      <MdThumbDown />
    </Fab>),
    (<Fab onClick={()=>{this.rate(true)}} className="singleRateFab green" key="2"> 
        <MdThumbUp />
    </Fab>)
    ];

  controlUse = (c) => {
    console.log(c.name);
    if (c.name === 'Play') {
      console.log(this.state.controls[1]);
      this.setState({
        controls: this.state.controls.map(c => c.id === 2? this.state.pause : c)
      });
      console.log(this.state.controls[1]);
    } else if (c.name === 'Pause') {
      this.setState({
        controls: this.state.controls.map(c => c.id === 2? this.state.play : c)
      });
    }
  }

  setIcon = (c) => {
    if(c.name === 'Backward') {
      return (<FaBackward />)
    } else if(c.name === 'Pause') {
      return (<FaPlay />)
    } else if(c.name === 'Play') {
      return (<FaPause />)
    } else if(c.name === 'Forward') {
      return (<FaForward />)
    }
  }

  controlButtons = () => this.state.controls.map(c => {
    return (
        <Fab onClick={()=>{ this.controlUse(c) }} className="singleControlFab" key={c.id}> 
            {this.setIcon(c)}
        </Fab>
      );
  })

  changeLanguage = () => {
    if (this.state.language === this.state.languages[0]) {
      this.setState({language: 'FR'}) 
    } else {
      this.setState({language: 'EN'}) 
    }
  }

  render() {
    return (
      <div>
        <Topbar genres={this.state.genres} language={this.state.language}/>
        <div className="viewButton">  
            {this.viewButtons()}
        </div>
        <div className="rateButton">
            {this.rateButtons()}
        </div>
        <div className="wrap">
          <div className="controlButton">
            {this.controlButtons()}
          </div>
        </div>
        <div className="languageButton">
          <Fab onClick={()=>{this.changeLanguage()}} className="LanguageChangeFab" key="1"> 
            {this.state.language === 'EN' ? 'FR' : 'EN'}
          </Fab>
        </div>
        <Main view={this.state.view} />
      </div>
    );
  }
}

export default App;
