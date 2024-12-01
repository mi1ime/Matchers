export default function hpSort(players) {
  return players.sort((a, b) => b.health - a.health);
}
