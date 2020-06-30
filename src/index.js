import React from "react";
import ReactDOM from "react-dom";
import  Card from "./Card.jsx"
import "./index.css";
import Sdata from "./Sdata.jsx";
//import Sdata from "./Sdata";

function ncard(val){
  console.log(val);
  return (
    <Card
     imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.links}
     />
  );
}
ReactDOM.render(
<>
<h1 className="Heading">List of Top 3 Netflix Series in 2020</h1>
{/*<Card
sname= {Sdata[0].sname}
imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
link={Sdata[0].link}/>*/}
{Sdata.map(ncard)};

</>
  , document.getElementById("root")
)