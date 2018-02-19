import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
        <CommentsListContainer />
        <CommentFormContainer />
        <DevTools />
    </div>
  )
}

export default App;