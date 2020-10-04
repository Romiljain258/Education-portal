import React from 'react';
import FirstSec from './FirstSec';
import SecondSec from './SecondSec';
import ThirdSec from './ThirdSec';


const AllSection=()=>{
    return(
    <div className="parent">
       <FirstSec className="section"/>
       <SecondSec className="section"/>
       <ThirdSec className="section"/>
    </div>)
}
export default AllSection;