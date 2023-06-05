import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Quicksearchgrid from './Quicksearchgrids';
import '../Styles/Quicksearches.css'

const Quicksearch =(props)=>{
    const [Restaurants,setRestaurants] =useState([]);
    const [RestaurantList , setRestaurantList] = useState([]);
    const [ Mealtypes , setMealtypes] = useState([]);
    // Render Wallpaper.js and Quicksearch.js
    useEffect(() => {
        //Fetch Locations and Restaurant Datas
        const fetchData = async () => {
            sessionStorage.clear();
          try {
            const restaurantsResponse = await axios.get('http://localhost:6003/restaurants');
            setRestaurants(restaurantsResponse.data);
    
            const locationsResponse = await axios.get('http://localhost:6003/locations');
            setRestaurantList(locationsResponse.data);

            const Mealtypes = await axios.get('http://localhost:6003/mealtypes');
            setMealtypes(Mealtypes.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    // Render Multiple Quicksearches mealtypes as grid
  
    return(
        
        <div>
            <div className='container'>
                <h1 className='Searchhead'>Quick Searches</h1>
                <p className='quicksearchpara'>Discover restaurants by type of meal</p>
                <div className='container_search'>
                    <Quicksearchgrid quicksearch={Mealtypes}/>
                    {/* <Quicksearchgrid/>
                    <Quicksearchgrid/>
                    <Quicksearchgrid/>
                    <Quicksearchgrid/>
                    <Quicksearchgrid/> */}
                </div>
            </div>
        </div>
    )
}
export default Quicksearch;