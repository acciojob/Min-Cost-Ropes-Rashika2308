function mincost(arr)
{ 
if (arr.length === 0) return 0;
  const heap = [...arr];
  let cost = 0;
  heap.sort((a, b) => a - b);

  while (heap.length > 1) {
    let first = heap.shift();
    let second = heap.shift();

    let newRope = first + second;
    cost += newRope;
    let index = heap.findIndex(val => val > newRope);
    if (index === -1) {
      heap.push(newRope);
    } else {
      heap.splice(index, 0, newRope);
    }
  }

  return cost;
  
}

module.exports=mincost;
