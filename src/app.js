const { getAge, getUUID } = require('./plugins');
const {buildLogger} = require('./plugins')

const logger = buildLogger('app.js')

logger.log('¡Hola Mundo!'); 
logger.error('Se ha producido un error... '); 


