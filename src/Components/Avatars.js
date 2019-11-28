import React from 'react';

 const Avatars = (props) => {
  return (
    <div>
      <img src={props.dp} alt="avatar" width="70" height="70" className="profile-img"/>
    </div>
  );
}

export default Avatars;