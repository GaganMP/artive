//1) function to multply

function multiply(a, b){
    return a * b;
  }
  
 // 2)function for correct mapping
  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }
  
  //3)

  function solution(str){
    let str2="";
    let item;
    for(item of str)
      {str2=item+str2}
    return str2;
  }
  
  //4)
  function greet(name){
     if(name === "Johnny")
      return "Hello, my love!";
    else
      return "Hello, " + name + "!";
   }
  
  
   //5)
   function isDivisible(n, x, y) {
    if(n%x==0 && n%y==0)
      return true;
    else
      return false;
  }
  
  //6)
  function greet(name){
    //your code here
    return "Hello, "+name+" how are you doing today?";
  }
  
  //7)
  function weatherInfo (temp) {
    var c =convert(temp)
    if (c < 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convert (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius;
  }
  
  //8)
  var findAverage = function (nums) {
    // Code here
    
    var item;
    var sums=0;
    var count=0;
    
    for(item of nums)
      {sums=sums+item;
      count++;}
    return sums/count;
  }
  
  //9)
  function basicOp(operation, value1, value2)
  { var x;
    switch(operation)
      {
          case "+":
             x=value1+value2;
            break;
          case "-":
          x=value1-value2;
            break;
          case "*":
          x=value1*value2;
            break;
          case "/":
          x=value1/value2;
            break;
          
      }
   return x;
  }

  //10) find the smallest number

  console.log("Hello");
    ar=[1,2,43,-1,-2];
  console.log(smallestInteger(ar));
  function smallestInteger(arr)
  {
     let small=arr[1];
     
     for(items of arr)
     {if(small>items)
    {
        small=items;
    }
     }
     return small;

  }

  //11)summation of n numbers


  function summation(n)
  { var sum=0;
    for(i=1;i<=n;i++)
    { sum+=i;}
   return sum;

  }
//12)Even or odd


function evenodd(n)
{
    if(n%2==0)
     {return "even";}
    else{
        return "odd";
    }
}
//13)rock paper scissor

const rockpaperscissor=function(player1,player2)
{
  if(player1=='rock')
  { if(player2=='rock')
       {return "draw";}
       if(player2=='paper')
       {return "player2 won!";}

       if(player2=='scissor')
       {return "player1 won!";}


  }

  if(player1=='paper')
  { if(player2=='rock')
       {return "player1 won!";}
       if(player2=='paper')
       {return "draw";}

       if(player2=='scissor')
       {return "player2 won!";}


  }

  if(player1=='scissor')
  { if(player2=='rock')
       {return "player2 won!";}
       if(player2=='paper')
       {return "player1 won!";}

       if(player2=='scissor')
       {return "Draw";}


  }



}
//14)vowels count

function vowelcount(str)
{ var str2=str.toLowerCase()
   var y=str2.split("");
   var count=0;
   for(i=0;i<y.length;i++)
   {if (y[i]==='a' || y[i]==='e'||y[i]==='i'||y[i]==='u'||y[i]==='o' )
       count++;

   }
   return count;

}
//15)remove first and last character of the string

function remove(str)
{
    
    return str.substr(1,str.length-2);




}
//16)sum of positive numbers 
function sums(arr)
{let sum=0;
    for(var i of arr)
     {
        if(i>0)
         sum+=i;
     }
     return sum;
}
//17) Return negative number of a given number if the number is positive


function marknegative(num)
{
    return -Math.abs(num);
}

//18) write a function to repeat the given string given number of times
function repeats(cha,num)
{ var x='';
    for(var i=0;i<num;i++)
    {x+=cha;}
    return x;

}

//19)split the given string sentance into words*/
function SplitSentences(str)
{
    return str.split(" ");
}

//20)given an array return an array that containdouble the value of each element of the array
function doubles(arr)
{
    var x;

    var y=arr.map((x)=>return 2*x)
     return y;
}