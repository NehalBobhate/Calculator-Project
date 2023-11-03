function removeLast(op)
{
  let c=op.split('');
  c.pop();
  let ans=c.join('');
  return ans;
}
function giveSin(op) {
	
 let radians = op * Math.PI/180;
 op=Math.sin(radians).toFixed(3);
  return op;

}
function giveCos(op) {
	
 let radians = op * Math.PI/180;
 op=Math.cos(radians).toFixed(3);
 return op;

}
function giveTan(op) {
	
 let radians = op * Math.PI/180;
 op=Math.tan(radians).toFixed(3);
 return op;

}