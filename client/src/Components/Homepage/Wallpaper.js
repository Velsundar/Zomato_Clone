import React from 'react';
import kebabimage from '../Assets/black theme food.jpg';
import axios from 'axios';
import '../Styles/Home.css';
// import {Search} from 'react-bootstrap-icons'
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Home1 =()=>{
    const [restaurantlist, setRestaurantList]=useState([]); //store Restaurants Locations
    const [restaurants, setRestaurants]=useState([]);   //Store restaurant Details
    const [suggestions, setSuggestions]=useState([]);    //Store Restaurant Details with respect to the Location Clicked
    const [text, setText]=useState('');   //Store The text entered in  input search box
    const [selectedLocation, setSelectedLocation] = useState('');   //Store the Location That is selected from the Dopdown
    

    useEffect(() => {
      //Fetch Locations and Restaurant Datas
      const fetchData = async () => {
        try {
          const restaurantsResponse = await axios.get('http://localhost:6003/restaurants');
          setRestaurants(restaurantsResponse.data);
  
          const locationsResponse = await axios.get('http://localhost:6003/locations');
          setRestaurantList(locationsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


    const handleLocationChange = async (event) => {
      const newLocationId = event.target.value;
      setSelectedLocation(newLocationId);
      sessionStorage.setItem("location_id", newLocationId);
      try {
        const response = await axios.get(`http://localhost:6003/locations/${newLocationId}`);
        setSuggestions(response.data);
      } catch (err) {
        console.error('Error fetching restaurant data', err);
      }
    };
  
    const handleSearch = (event) => {
      const searchText = event.target.value;
      setText(searchText);
  
      if (selectedLocation.length === 0) {
        const result = searchText.length > 0
          ? restaurants.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
          : [];
        setSuggestions(result);
      } else {
        const filteredRestaurants = searchText.length > 0
          ? restaurantlist.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
          : [];
        setSuggestions(filteredRestaurants);
      }
    };
  const history = useHistory();

  //Navigate to Details Page with details of selected restaurants
  const handleNavigate = (id) => {
    history.push(`/details?restaurant=${id}`);
  }

  return(
        <div>
            <img src={kebabimage} alt="food" width="100%" height="450" className='mainimage' />
            <div>
                {/* Adding Logo */}
                <div className='logo'>
                    <p>e!</p>
                </div>
                {/* Add Heading */}
                <div className='headings'>
                    Find The best restaurans, cafes, bars
                </div>
                {/* Add Dropdown and searchbar */}
                <div className='locationSelector'>
                    <select className='locationDropdown' defaultValue={'DEFAULT'} onChange={handleLocationChange}>
                        <option value='DEFAULT'  disabled>Select Location</option>
                        {restaurantlist.map(u=>(
                            <option value={u.location_id} key={u.location_id}>{u.name}, {u.city}</option>
                        ))}
                    </select>
                </div>
                    <div className='searchbox' style={{verticalAlign:'top' }}>
                      <span className="glyphicon glyphicon-search search"></span>
                        {/* <Search id='Searchicon'/> */}
                        <input id='searchbox1' className='restaurantsinput' type='text' placeholder='Please Enter restaurant Name' onChange={handleSearch}/>
                        {/* Restaurant suggestion section when user click location */}
                    {suggestions.length > 0 ? suggestions.map((item) => {
                  return <div className="search-result-restaurant-block" onClick={() => handleNavigate(item._id)}>
                    <div className="search-result-image-block">
                      <img src={item.thumb} height="43" width="43" style={{ borderRadius: '50%' }} alt=''></img>
                    </div>
                    <div className="search-result-restaurant-details">
                      <div className="search-result-restaurant-name"> {item.name}</div>
                      <div className="search-result-restaurant-address">{item.address}</div>
                    </div>
                    <div style={{ border: '1px solid #e9e9f2' }}></div>
                  </div>
                }) : text.length > 0 ? <div className="no-result-block">
                  <div className="no-result-message">No results found</div>
                </div> : null}
                </div>
              </div>
            </div>
        );
    }

    // exporting this component to homepage component 
export default withRouter(Home1);
