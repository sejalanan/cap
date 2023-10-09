What is React?
React is a javascript library which makes UI of the app more preicsely it improves coders experience and make functioning of app faster.
Who made React?
React was developed by an engineer wroking in facebook named Jordan Walke to improve the UI of facebook ad later it was published to normal people in 2013.
What is Babel?
Babel is an open source javascript complier which converts the modern javascript(ES6) into the older javascript which is understood by all the browsers. In other words it acts like a translater which enables the deveopers to work in modern java script and ensures that the code is understtod by every browser.
How does Babel convert html code in React into valid code?
The developers write a code in JSX which is html like code but not html within the javascript . Babel then  converts this html like code into the react code which in understood by every browser.
What is ReactDOM used for? Write an example?
ReactDOM is like a messenger which takes all the react code and pass it to tha desired part in html where we want to show it. ReactDOM is the worker who takes the cake from the kitchen to the table .Here kitchen is the react code and table is the web page.
//  ex.const BirthdayCard = () => {
  return (
    <div>
      <h1>Happy Birthday!</h1>
      <p>Wishing you a fantastic year ahead!</p>
    </div>
  );
};

ReactDOM.render(<BirthdayCard />, document.getElementById('root')); //
What are the packages that you need to import for react to work with?
react,reactdom,babel
How do you add react to a web application?
step 1. name ur app
step 2. cd app name
step 3. npm start
step 4.npm install react react-dom
step 5 .create a command
step 6.import react and reactdom
step 7 . write ur code and render
What is React.createElement?
its is an function which help tomake a new element in js . its not dom but its like a virtual dom is kight weight.
What are the three properties that createElement accept?
its takes type like div,h1 etc
properties of type like style,classname etc
chidren means the code inside the type
What is the meaning of render and root?
render means to take ur react code to html element
root means defining your react code to DOM
