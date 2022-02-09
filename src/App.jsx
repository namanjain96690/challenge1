import React from 'react';
function App(){
    let date= new Date().getHours();
let head={
  color: "blue",
  margin:'100px auto',
  textAlign : "center",
  alignItems: "center",
  width: "400px",
  height:"30px",
  backgroundColor:"pink",
  borderRadius:"10px",
  padding: "10px 0 0 0"
};
let greet='';
let heading={
};
function f(){
  if(date>=1 & date<12){
  heading.color='green';
  greet='Good Morning';
  }
  else if(date<20){
  heading.color='orange';
  greet='Good Afternoon';
  }
  else{
  heading["color"]='black';
  greet="Good Night";
  }
}
f();
return(
    <>
  <h3 style={head }>Hello sir, <span style={heading}>{greet}</span></h3>
  </>
);
}

export default App;