import { Carousel } from "react-responsive-carousel";
import {useState,useEffect} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tabs,Tab,TabList,TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"
import image from "../Assets/kebabimage.png"
import image1 from "../Assets/nightlife.jpg"
import image2 from "../Assets/black theme food.jpg"
import  "../Assets/kebabimage.png"
import "../Styles/Detailspage.css"
// import Header from "../FilterPage/Header";


const Details =(props)=>{
    // set restaurants states to get the value of restaurants
    const [restaurants, setRestaurants]=useState([]);
    useEffect(() => {
        // use query string to get the endpoint value and set it in restaurantId
      const  qs =queryString.parse(props.location.search);
      const restaurantId =qs.restaurant;
      
    //   Fetch Restaurants Data from API
        const fetchData = async () => {
          try {
            const restaurantsResponse = await axios.get(`http://localhost:6003/restaurants/${restaurantId}`);
            setRestaurants(restaurantsResponse.data, restaurantId );
        } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
  
    return(
        <>
        {/*Use Carousel to show images fro the details page and images associated with the restaurants */}
        <Carousel showThumbs={false}>
                <div className="carouselimages">
                    <img src={image} alt="notfound" />
                </div>
                <div className="carouselimages">
                    <img src={image1} alt="notfound" />
                </div>
                <div className="carouselimages">
                    <img src={image2} alt="notfound" />
                </div>
            </Carousel><div className="orderheadbutton">
                    <h3>{restaurants.name}</h3>
                    <button>Place Online Order</button>
                </div>
                {/* Here Tabs are used for accesible and easy tab component */}
                <Tabs>
                    <TabList>
                        <Tab><b>Overview</b></Tab>
                        <Tab><b>Contact</b></Tab>
                    </TabList>
                    <TabPanel>
                        <img src={restaurants.thumb} alt="" style={{height:'50px',width:'50px'}}/>
                        <h3>Cuisine:{restaurants.cuisine_id ? restaurants.cuisine_id.map(item=>`${item.name}`):null}</h3>
                        <h4>Price:{restaurants.cost}</h4>
                        <h5>Venue:{restaurants.address}</h5>
                    </TabPanel>
                    <TabPanel>
                        <h3>PhoneNumber:</h3>
                        <h6>{restaurants.number}</h6>
                    </TabPanel>
                </Tabs>
        </>
    )
}
export default Details;