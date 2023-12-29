let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shlookup';
let robin = 'Robin Banks';
let erin = 'Erin D Tyres';
let manisha = 'Manisha Gupta';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'teal',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, erin), /*#__PURE__*/React.createElement("li", null, manisha));
ReactDOM.render(element, document.getElementById('content'));