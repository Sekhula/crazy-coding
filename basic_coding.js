var sum_even = 0;
var sum_odd = 0;

for(let x = 0; x < 100; x++)
{
    if(x % 2 === 0)
    {
        sum_even += x;
    }
    if(x % 2 === 1)
    {
        sum_odd += x;
    }
}

console.log("The sum of all even number from 0 to 100 is: " + sum_even);
console.log("The sum of all odd number from 0 to 100 is: " + sum_odd);