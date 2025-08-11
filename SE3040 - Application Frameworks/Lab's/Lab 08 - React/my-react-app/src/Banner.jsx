
function Banner({ message, backgroundColor = '#f5f5f5' }) {
  return (
    <div style={{ padding: '20px', backgroundColor, textAlign: 'center' }}>
      <h2>{message}</h2>
    </div>
  );
}

export default Banner;
