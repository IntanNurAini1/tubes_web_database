const express = require('express');
const app = express();

app.use(express.json());

// ROUTE PRODUCTS (punya temanmu)
app.use('/api', require('./routes/productRoutes'));

// ROUTE MAINTENANCE ALAT (punya kamu)
app.use('/api', require('./routes/maintenanceRoutes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
