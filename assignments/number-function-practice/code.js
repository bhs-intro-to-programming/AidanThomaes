const sum = (a,b) => (a+b);
const difference= (a,b) => (a-b);
const product = (a,b) => (a*b);
const ratio = (a,b) => (a/b);
const remainder = (a,b) => (a%b);
const average = (a,b) => (a+b)/2;
const averageOf3 = (a,b,c) => (a+b+c)/3;
const generalAverage = (total,count) => (total/count);
const distance = (a,b) => (Math.abs(a-b));
const manhattan = (x1,y1,x2,y2) => (Math.abs(x1-x2)+Math.abs(y1-y2));
const twoDDistance = (x1,y1,x2,y2) => (Math.sqrt(Math.abs(x1-x2)**2+Math.abs(y1-y2)**2))

const perimeterOfSquare = (sideLength) => (4*sideLength)
const perimeterOfRect = (width,height) => (2*(width+height))