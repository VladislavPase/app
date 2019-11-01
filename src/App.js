import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Profile/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Sett from "./components/Sett/Sett";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div className="content-wrapper">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="content">
                <Route path="/profile" render={ () =>
                    <Content posts={props.state.profilePage.posts}/> }/>
                <Route path="/music" render={ () =>
                    <Music/> }/>
                <Route path="/dialogs" render={ () =>
                    <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/> }/>
                <Route path="/news" render={ () => <News/> }/>
                <Route path="/settings" render={ () => <Sett/> }/>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
