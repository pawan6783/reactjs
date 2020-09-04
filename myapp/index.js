import React from 'react';
import ReactDom from 'react-dom';

const template = React.createElement('h1',null,'Hello World!');
ReactDom.render(template,document.getElementById('root'));