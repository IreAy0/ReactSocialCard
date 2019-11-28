import React from 'react';


 const Title = (props)  => {
  return (
    <div className="headerArea">
<h6>{props.name}  <span>@{props.handle}</span> </h6>
  <p>{props.description}</p>
{<p>author: <span>{props.author}</span></p>}
    </div>
  );
}

export default Title;