const awsIot = require('aws-iot-device-sdk')

const client = awsIot.device({
  keyPath: './certs/XXXXXXXXXXX-private.key',
  certPath: './certs/XXXXXXXXXXX-cert.pem',
  caPath: './certs/root-ca.pem',
  clientId: 'sensor-XXXXXXXXXXXXX',
  host: 'XXXXXXXXXX-ats.iot.us-east-1.amazonaws.com'
})

client.on('connect', () => console.log('Successfully connected to Aquaponics AI'))

const topic = 'logs/at-i/5a3a1cae-8715-41a7-9ffe-9f2d04ba65d0/cd3d9bb0-a4a7-4236-92aa-257f871dc72a'
client.publish(topic, JSON.stringify({
    dt: new Date().toISOString(), // The current date time by your actual location
    v: 10 // Your sensor reading goes here
}))