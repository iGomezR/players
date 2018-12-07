import { calculateAge } from "./index";

export const filter = (players, filters) => {

  const { name, position, age } = filters;
  let playerFilter = [];
  
  if(!name && !position && !age){
    return players;
  }

  if(name){
    playerFilter = players.filter( player => {
      return (name && player.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    });
  }

  if ( playerFilter.length && position ) {
    playerFilter = playerFilter.filter( player => {
      return (position && position === player.position);
    });
  } else if (position){
    playerFilter = players.filter( player => {
      return position && position === player.position;
    });
  }

  if (playerFilter.length && age ) {
    playerFilter = playerFilter.filter( player => {
      return age && parseInt(age) === calculateAge(player.dateOfBirth);
    });
  } else if (age){
    playerFilter = players.filter( player => {
      return age && parseInt(age) === calculateAge(player.dateOfBirth);
    });
  }

  return playerFilter;
};
