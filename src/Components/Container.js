import React from 'react';
import Data from './Data'
import Title from './Title';
import  CardArea from './CardArea';
import Avatar from './Avatars';

 const  Container = () => (
    <div>
    {
  Data.map((props) => {
        return <div className="test" key={props.id}>
         
            <Avatar dp={props.photo} />
            <div className="main" >
            <Title name={props.author} handle={props.author} description={props.bio} author={props.user}/>
            <CardArea img={props.src} >
               
            </CardArea>
            </div>
        </div>
        
    })
}
  </div>

)

export default Container;
