function Testimonial({ quote, name, photo }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', maxWidth: '300px', borderRadius: '8px' }}>
      <img src={photo} alt={name} style={{ borderRadius: '50%', width: '60px' }} />
      <blockquote>"{quote}"</blockquote>
      <p>- {name}</p>
    </div>
  );
}

export default Testimonial;