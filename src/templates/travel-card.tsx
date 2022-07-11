
interface Props {
  picture: string
  // location can be a state or another country
  location: string
  googleMapsLink: string
  // attraction is the place or thing you visited in that location
  attraction: string
  date: string
  description: string
}

export default function TravelCard(props: Props) {
  const {picture, location, googleMapsLink, attraction, date, description} = props;

  return (
    <div className='travel-card'>
      {/*
      //@ts-ignore*/}
      <img src={require(`../images/${picture}`)} alt={`$(country)`} className="travel-card--picture"></img>
      <div className="travel-card--content">
        <div className="travel-card--location-and-link">
          <i className="fa-solid fa-location-dot travel-card--location-icon fa-xl"></i>
          <div>
            <span className="travel-card--location">{location.toUpperCase()} </span>
            <a href={googleMapsLink} className="travel-card--link">View on Google Maps</a>
          </div>
        </div>

        <h1 className="travel-card--attraction">{attraction}</h1>
        
        <h3 className="travel-card--date">{date}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
} 