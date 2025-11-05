// // create an element
// const div = document.getElementById('root');
// // const h1= document.createElement('h1');
// // h1.innerText = "hello";
// // h1.style.color = "black";
// // div.append(h1);

// // const h2 = document.createElement('h2');
// // h2.innerText = "How are you";
// // h2.style.color = "red";
// // div.append(h2);  

// // creating react

// const React = {
//     createElement : function(tag, styles, values) {
//         const element = document.createElement(tag);
//         element.innerText = values;
//         for(key in styles){
//             element.style[key] = styles[key];
//         }
//         return element;
//     }
// }

// const h1 = React.createElement('h1',{color:"red",fontSize:"20px",backgroundColor:"black"},"hello");
// const h2 = React.createElement('h2',{color:"white",fontSize:"15px",backgroundColor:"pink"},"how are you");
// div.append(h1);
// div.append(h2);

const element = React.createElement("h1",{},"hello");
// ReactDOM.rendor(element,document.getElementById('root'));
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(element);