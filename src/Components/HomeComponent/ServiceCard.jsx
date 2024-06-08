const ServiceCard = ({ service }) => {
  return (
    <div className="col ">
      <div className="card p-4 border-rounded ">
        <img
          style={{ height: "200px", width: "300px", margin: "auto" }}
          src={service?.img}
          alt={service?.title}
        />
        <h3 className="mt-3 salmon">{service?.title}</h3>
        <p>{service?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
