import React from 'react';
import './seasonDisplay.css'
const getSeason=(lat,month)=>{
if(month > 2 && month <9) return lat>0?'summer':'winter';
else return lat>0?'winter':'summer';
}
const SeasonDisplay = (props,month) => {
  
  const season= getSeason(props.lat,new Date().getMonth())
  const text = season==='winter'?"Burr its cold out there really":"Let's hit the beach yeah!!"
  const icon = season==='winter'?"snowflake":"sun"

  return <div className={`${season} seasonDisplay`}>
         <i className={`icon-left massive ${icon}  icon`}/> 
         <h1 className='text'>{text}</h1>
         <i className={`icon-right massive ${icon} icon`}/> 
  </div>
};

export default SeasonDisplay;
