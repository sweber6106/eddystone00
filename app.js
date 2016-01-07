eddystoneBeacon = require('eddystone-beacon');

var options = {
  txPowerLevel: -22,  // override TX Power Level, default value is -21, 
  tlmCount: 2,       // 2 TLM frames 
  tlmPeriod: 10      // every 10 advertisements 
};

var url = 'http://www.splarf.com';
 
eddystoneBeacon.advertiseUrl(url, [options]);
