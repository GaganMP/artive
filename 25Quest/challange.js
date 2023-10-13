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

    var y=arr.map((x)=> 2*x);
    return y;
}

 //21)Hero vs Dragon it takes two bullets to kill a dragon based on given number of bullets and dragons
 //predict weather the hero dies or wins
 function predict(bullets,dragons)
 {
    if(bullets>=2*dragons)
    {return true;}
    else
    return false;
 }

 // write a program to add two array(adding corresponding elements of two array)
 function add(arr1,arr2)
 { let s=[];
  var i;
  var small=((arr1.length<arr2.length)?arr1:arr2);
   for(i in small)
   { s.push(arr1[i]+arr2[i]);
       
   }
    
   var ext=(arr1.length > arr2.length) ? arr1.splice(arr2.length,arr1.length):arr2.splice(arr1.length,arr2.length);
  console.log(ext);
   
   return s.concat(ext);
  
 }

 //22)you are given 2 array add the two array and return the total 
//obtained by adding all the elements of the array

function totalsum(arr1,arr2)
{let sum=0;
  for(var i in arr1)
  {sum=sum+arr1[i]+arr2[i];

  }
  return sum;
}


//23)determine the century of the year 1 -100 corresponds to 1st century
//101-200 determined as 2nd century
function century(year)
{ c=year/100;
  console.log(c);
  year%100!=0?c=c+1:c;
  return c;

}

//24convert humanyear -> catyear dogyear 
function humanyeattoCatDogYear(humanyear)
{
  if (humanyear==1) return [1,15,15];
  if (humanyear==2) return [2,15+9,15+9];
  if (humanyear>2) return [humanyear,15+9+(humanyear-2)*4,15+9+(humanyear-2)*5];
} 
//25) Football championship

function championship(arr)
{ let a=0;
  let b=0;
  for(var x of arr)
  { var z=x.split(":")
    console.log(z);
    if(z[0]>z[2])
    {a+=3;}

    if(z[0]<z[2])
    {b+=3;}

    if(z[0]=z[2])
    {a+=1;
    b+=1;}
}

 if(a>b) return "a won the match";
 else if(a<b) return "b won the match";
 else return "Match draw";
   
}