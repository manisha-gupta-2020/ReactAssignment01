let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shlookup'
let robin = 'Robin Banks'
let erin = 'Erin D Tyres'
let manisha = 'Manisha Gupta'
const element = (
    <ul style={{'color':'teal', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{robin}</li>
        <li>{erin}</li>
        <li>{manisha}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))