// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }

};

const isSamePoint = (p1, p2) => {
  return (p1.x,p1.y) === (p2.x,p2.y)
};

const totalWithTip = (bill, tipPercentage) => {
  let tip = bill.subtotal * (tipPercentage)
  let total = bill.subtotal + tip
  return {'subtotal':bill.subtotal, 'tip':tip,'total':total}
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {

};

const bigWinners = (players) => {
  let list = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].wins > 10){
      list.push(players[i].wins)
    }
  }
  return list
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
