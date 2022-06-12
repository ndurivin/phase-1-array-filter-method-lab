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

function findMatching(drivers, string){
            return drivers.filter((result) => result.toLowerCase() === string.toLowerCase());
    }

const fuzzyMatch = (drivers, string) =>{
    return drivers.filter(result => result[0] === string[0]);
}

const matchName = function(drivers, string){
    return drivers.filter(record => record.name === string);
}

