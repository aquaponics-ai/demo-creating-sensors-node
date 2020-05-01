const awsIot = require('aws-iot-device-sdk')

/**
 * The files referenced here are downloaded through the dashboard
 * when generating your sensor.  You will also find the host endpoint
 * in your dashboard as well.
 */
const client = awsIot.device({
  keyPath: './certs/XXXXXXXXXXX-private.key',
  certPath: './certs/XXXXXXXXXXX-cert.pem',
  caPath: './certs/root-ca.pem',
  clientId: 'sensor-XXXXXXXXXXXXX',
  host: 'XXXXXXXXXX-ats.iot.us-east-1.amazonaws.com'
})

/**
 * This is not required but shows you how you can add various listeners to the 
 * client and observe the different events.
 */
client.on('connect', () => console.log('Successfully connected to Aquaponics AI'))

/**
 * You can retrieve this topic from your dashboard under the selected sensor
 * This topic relates to a specific notebook. You can record metrics to separate
 * notebooks to keep everything organized.
 */
const topic = 'logs/at-i/5a3a1cae-8715-41a7-9ffe-9f2d04ba65d0/ad3d9bb0-a4a7-4246-92aa-257f871dc72a'

/**
 * This function is the only function you need to send data to Aquaponics AI.
 * By utilizing the AWS IoT Device SDK you can also tap into some fantastic
 * handling of intermittent connectivity, shadows, and more. You can check out
 * the full documentation on the AWS website.
 * 
 * When sending data to the IoT endpoint please include the following attributes
 * in your object:
 * 
 * {
 *   "dt": String,  # DateTime object in an ISO format.
 *   "v": Float     # Float value of the sensor reading.
 * }
 */
client.publish(topic, JSON.stringify({
    // The current date time by your actual location
    dt: new Date().toISOString(), 

    // Your sensor reading goes here
    v: 10.1238940
}))
