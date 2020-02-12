class Sensor {
    constructor() {
        console.log('Sensor');
        let gyroscope = new Gyroscope({frequency: 60});

        gyroscope.addEventListener('reading', (e: Event) => {
            console.log("Angular velocity along the X-axis " + gyroscope.x);
            console.log("Angular velocity along the Y-axis " + gyroscope.y);
            console.log("Angular velocity along the Z-axis " + gyroscope.z);
        });

        gyroscope.start();
    }
}

export default Sensor;
