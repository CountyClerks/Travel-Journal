export default function Card(props) {
    return (
        <section className="card">
            <img src={`./images/${props.data.image}`} alt="card image" className="card--image"/>
            <div className="card--content">
                <div className="card--header">
                    <h1 className="card--location">{props.data.location}</h1>
                    <a href={props.data.mapsLink} target="_blank"className="card--link">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.data.title}</h1>
                <h1 className="card--date">{props.data.date}</h1>
                <p className="card--description">{props.data.description}</p>
            </div>
        </section>
    )
}
