function Button({ label, size = 'medium', styleType = 'primary' }) {
  const styles = {
    small: { padding: '5px 10px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '12px 24px', fontSize: '16px' },
    primary: { backgroundColor: '#007bff', color: '#fff', border: 'none' },
    secondary: { backgroundColor: '#6c757d', color: '#fff', border: 'none' }
  };

  return (
    <button style={{ ...styles[size], ...styles[styleType], borderRadius: '4px' }}>
      {label}
    </button>
  );
}

export default Button;
