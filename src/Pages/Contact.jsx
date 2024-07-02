const Contact = () => {
  return (
    <div className="mt-10 mb-10">
        <div style={styles.container}>
        <h2 style={styles.header}>Informasi Kontak</h2>
        <div style={styles.contactInfo}>
            <p style={styles.infoItem}><strong>Nama:</strong> Anwar Juniansyah Harahap</p>
            <p style={styles.infoItem}><strong>TTL:</strong> 09 Juni 2002</p>
            <p style={styles.infoItem}><strong>Pelatihan:</strong> React</p>
            <p style={styles.infoItem}><strong>Instruktur:</strong> Riri Triana</p>
        </div>
        </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '15px',
  },
  contactInfo: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
  infoItem: {
    margin: '10px 0',
  },
};

export default Contact;
