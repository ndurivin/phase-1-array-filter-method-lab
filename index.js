// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = drivers.filter((name) => {
  if (driver.name === "Bobby"){
    return true
  }else {
    return false
  }
})
console.log(findMatching)
