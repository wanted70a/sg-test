//requrie npm modules
var test =  require('./modules/moduleTest.js');
//for local modules
setTimeout(()=>{
    console.log('es6 - enabled!');
}, 3000)
window.app = {}
test();
