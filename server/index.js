'use strict'
const propierties = require('./config/properties');
const app =  require("./app");
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));