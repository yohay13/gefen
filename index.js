//q3
function printTwistShout(){
  for(var i = 1; i <= 100; i ++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("Twist & Shout");
    }else if(i % 3 == 0){
      console.log("Twist");
    }else if(i % 5 == 0){
      console.log("Shout");
    }else{
      console.log(i);
    }
  }
}

//q1
//given [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]
function printNormal(arr){
  for (var i = 0; i < arr.length; i ++){
    for(var j = 0; j < arr[i].length; j ++){
      console.log(arr[i][j]);
    }
  } 
}

//q2
//given [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]
function printNormalOdds(arr){
  for (var i = 0; i < arr.length; i ++){
    for(var j = arr[i].length - 1; j >= 0 ; j --){
      if(arr[i][j] % 2 == 0){
        arr[i].splice(j, 1);
      }
    }
  } 
  printNormal(arr); 
}

//q4
function countSpaces(str){
  return countSpacesHelper(0, str);
}
// Helper function , could also be declared from countSpaces inner scope, but exposing it can make it reuseable
function countSpacesHelper(index, str){
  if(index  === str.length){
    return 0;
  }

  if(str.charAt(index) == " "){
    return countSpacesHelper(index + 1, str) + 1;
  }
  return countSpacesHelper(index + 1, str) + 0;
}

//q5
/*question 5:
a) employee with highest salary:
name: Tokuyash Pesch
birthday: 1953-11-14
department: Sales
managers: 
  early dates: Przemyslewa Kaelbling
  now: Hauke Zhang

b) employee with lowest salary:
name: Olivera Baek
birthday: 1953-09-23
department: Production
managers: 
  earlier dates: Krassimir Wegerle, Rosine Cools, Shem Kieras
  now: Oscar Ghazalie
*/
