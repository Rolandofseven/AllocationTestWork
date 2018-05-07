import * as _ from "lodash";
import * as ko from "knockout" 
import './style.scss';
import Icon from './icon.png';
import Data from './data.xml';
import typedViewModel from './typedViewModel'

import 'file-loader?name=[name].[ext]!./index.html';



function component() {
  var element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Helddlo', 'webpack ive changed back rewind'], ' ');
  element.classList.add('hello');
  
  
  
   // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log("here");
  console.log(Data);


  return element;
}

window.onload = function(){
	ko.applyBindings(new typedViewModel("bob"));
}


document.body.appendChild(component());


