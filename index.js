// Code your solution here
const findMatching = (drivers, inputDriver) =>{
    console.log(drivers)
    return drivers.filter((name)=>
         name === inputDriver || name === inputDriver.toLowerCase() || name === inputDriver.toUpperCase());
        
       
    
}

const fuzzyMatch = (drivers, inputDriver2) => {
    return drivers.filter((name)=>
        name.slice(0,3).includes(inputDriver2))
}

const matchName = (drivers, inputDriver3) => {
    return drivers.filter((driver)=>
    driver.name === inputDriver3)
}

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
