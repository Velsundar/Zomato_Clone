import React from 'react';
import '../Styles/Filter.css'
import Idly from '../Assets/Idly.jpeg'

const Filter =()=>{
    return(
        <>
        {/* Filter Section */}
    <div className='container'>
        <div className='row'>
        <div className='col-md-4 filtersection'>
            <h5 className='filterhead1'><b>Filters</b></h5>
            <p className='filterlocationname'><b>Select Location:</b></p>
            {/* Location Dropdown */}
            <select className='locationbox'>
                <option selected disabled>Select</option>
                <option value="Del">Delhi</option>
                <option value="Mum">Mumbai</option>
                <option value="Chn">Chennai</option>
                <option value="Ban">Bangalore</option>
                <option value="Kol">Kolkata</option>
            </select><br/><br/>
            {/* filter Using Checkbox and radio buttons  by Cuisine,Price and sort*/}
            <p className='Checkselect'><b>Cuisine</b></p>
            <div className='Checkoptions'>
                <input type='checkbox' name="cuisine" className='align'/>North Indian<br/>
                <input type='checkbox' name="cuisine" className='align'/>South Indian<br/>
                <input type='checkbox' name="cuisine" className='align'/>Chinese<br/>
                <input type='checkbox' name="cuisine" className='align'/>Fast Food<br/>
                <input type='checkbox' name="cuisine" className='align'/>Street Food<br/><br/>
            <p className='radioselect'><b>Cost for Two</b></p>
                <input type='radio'name='cost'className='align'/>Less Than &#8377;500<br/>
                <input type='radio'name='cost'className='align'/> &#8377;500 -  &#8377;1000<br/>
                <input type='radio'name='cost'className='align'/> &#8377;1000 - &#8377;1500<br/>
                <input type='radio'name='cost'className='align'/> &#8377;1500 - &#8377;2000<br/>
                <input type='radio'name='cost'className='align'/> &#8377;2000+<br/>
            <p className='sortselect'><b>Sort</b></p> 
            <input type='radio'name='sort'className='align'/>Price Low To High<br/>
            <input type='radio'name='sort'className='align'/>Price High To low<br/>
            </div>
        </div>
        {/* Product section displayed When filter action  is done */}
        <div className='col-md-8 Productsection'>
            <img src={Idly} alt='Not found'/>
            <h3>KFC</h3>
            <p className='productlocation'>Vihar Colony</p>
            <p className='Productlocation1'>Vihar Colony, Delhi</p><br/>
            <hr/>
           
        </div>
        </div>
    </div>
    </>
    )
}
export default Filter;