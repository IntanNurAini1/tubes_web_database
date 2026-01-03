const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const meetingRoutes = require('./routes/meetingRoutes');
const productRoutes = require('./routes/productRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const logistikRoutes = require('./routes/logistikRoutes');
const akunRoutes = require('./routes/akunRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Register Routes
app.use('/meetings', meetingRoutes);
app.use('/api', productRoutes);
app.use('/api', maintenanceRoutes);
app.use('/api', employeeRoutes);
app.use('/api', logistikRoutes);
app.use('/akun', akunRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


