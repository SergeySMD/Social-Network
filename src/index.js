import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let Dialogs = [
    {id: 1, name: "Sergey"},
    {id: 2, name: "Mihail"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Victor"},
    {id: 5, name: "Yuriy"},
    {id: 6, name: "Ivan"},
    {id: 7, name: "Anton"},
    {id: 8, name: "Vitaliy"},
    {id: 9, name: "Dmitriy"}

];
let Messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "What are you doing"},
    {id: 4, message: "Website, bro"},
    {id: 5, message: "Wow, cool"}
];
let Posts = [
    {id: 1, message: "Hi, World", likeCounter: 3},
    {id: 2, message: "Welcome", likeCounter: 0},
    {id: 3, message: "Hi, how are you today?", likeCounter: 4324},
    {id: 4, message: "Khabib, you are next", likeCounter: 2}
];

ReactDOM.render(
  <React.StrictMode>
    <App Dialogs={Dialogs} Messages={Messages} Posts={Posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
