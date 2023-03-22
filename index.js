// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    

    // return drivers.filter(function (driver) {
    //   driver.toLowerCase() === name.toLowerCase()
    // })
  }
  
  

  function fuzzyMatch(drivers, query) {
    //startsWith() method determines whether a string begins with the characters of a specified string, returning true or false
    return drivers.filter(driver => driver.startsWith(query));

  }
  
  function matchName(drivers, name) {
    //check if there is a name same the one give 
    return drivers.filter(driver => driver.name === name);
  }
  