'use strict';
const properties = require('./config/properties');
const app = require('./app');

app.listen(properties.PORT, () => console.log(`Server running on port ${properties.PORT}`));
