import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquiries, setEnquiries] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setEnquiries([...enquiries, { ...formData, id: enquiries.length + 1 }]);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };


  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.input}
          ></textarea>
          <button type="submit" style={styles.button}>
            Save
          </button>
        </form>
      </div>
      <div style={styles.tableContainer}>
        <h2>User Enquiry</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.thTd, ...styles.th }}>SR NO</th>
              <th style={{ ...styles.thTd, ...styles.th }}>NAME</th>
              <th style={{ ...styles.thTd, ...styles.th }}>EMAIL</th>
              <th style={{ ...styles.thTd, ...styles.th }}>PHONE</th>
              <th style={{ ...styles.thTd, ...styles.th }}>MESSAGE</th>
              <th style={{ ...styles.thTd, ...styles.th }}>DELETE</th>
              <th style={{ ...styles.thTd, ...styles.th }}>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={index}>
                <td style={styles.thTd}>{index + 1}</td>
                <td style={styles.thTd}>{enquiry.name}</td>
                <td style={styles.thTd}>{enquiry.email}</td>
                <td style={styles.thTd}>{enquiry.phone}</td>
                <td style={styles.thTd}>{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryForm;







  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    formContainer: {
      width: "40%",
      background: "#e0e0e0",
      padding: "20px",
      borderRadius: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      background: "teal",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    tableContainer: {
      width: "55%",
      background: "#e0e0e0",
      padding: "20px",
      borderRadius: "5px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thTd: {
      border: "1px solid #ccc",
      padding: "10px",
      textAlign: "left",
    },
    th: {
      background: "#ddd",
    },
  };
