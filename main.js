const createChassis = () => {
	const newChassisObject = {}
	return newChassisObject
}
const addBody = (chassisObject) => {
	chassisObject.body = "Fever"
	return chassisObject
}
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
	return chassisObject
} 
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
	return chassisObject
}
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
	return chassisObject
}
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two Wheel Drive"
	return chassisObject
}


let myCar = createChassis();
myCar = addBody(myCar);
myCar = addWheels(myCar);
myCar = addEngine(myCar);
myCar = addSteeringWheel(myCar);
myCar = addDriveTrain(myCar);
console.log(myCar);