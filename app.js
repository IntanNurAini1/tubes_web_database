const express = require('express');
require('dotenv').config();

const meetingRoutes = require('./routes/meetingRoutes');

const app = express();
app.use(express.json());

app.use('/meetings', meetingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  app.use('/api', require('./routes/productRoutes'));
  app.use('/api', require('./routes/maintenanceRoutes'));
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  })
});
