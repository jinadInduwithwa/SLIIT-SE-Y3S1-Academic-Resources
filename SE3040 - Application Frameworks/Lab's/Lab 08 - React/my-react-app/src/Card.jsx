function Card({ image, title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '250px' }}>
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
