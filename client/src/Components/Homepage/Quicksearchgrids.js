import React,{useState} from 'react';
// import {withRouter} from'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../Styles/Quicksearches.css'
// import Breakfast from '../Assets/Idly.jpeg'

const Quicksearchgrid =(props)=>{
    //Destructuring the quicksearch value from props declared in quicksearch render component
    const {quicksearch}=props;
    const history = useHistory();


    //handling the functions when click on mealtype or locations dropdown or both
   const handleClick = (id,name)=>{
        //get location value from session storage
        const location_id = sessionStorage.getItem('location_id');
        //if user clicks dropdown and mealtype send both value in query string
        if(location_id){
            history.push(`/filter?mealtype=${id}&mealtype_name=${name}&location=${location_id}`);
        }else{
            history.push(`/filter?mealtype=${id}&mealtype_name=${name}`);
        }
    }




// Mealtypes Grid content to be render in homepage
//iterate mealtype data for display
    return(
        <div>
                {quicksearch.map((item)=>{
                    return(
            <div className='col-sm-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 ' id='quickgrids' onClick={()=>handleClick(item.mealtype, item.name)}>
                <div className='gridimage'>
                    <img src={item.image} alt='breakfast' height='130px'width='130px'/>
                </div>
                <h1 className='gridboxheading'>{item.name}</h1>
                <p className='gridboxpara'>{item.content}</p>
            </div>
                    );
                })}
        </div>

        
    )
    
    
}
export default Quicksearchgrid;