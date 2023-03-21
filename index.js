// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  