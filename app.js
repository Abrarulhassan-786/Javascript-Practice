//-------Generate Table of 4
var table = +prompt("Enter Table You want to Print, ");
document.write("Table "+table+"<br>");
for(var i = 1;i <= 10; i++){
    document.write(table+"x"+i+"="+i*table+"<br>")
}

// *----------- Declare and initialize a multidimensional array   representing the following matrix:-----------*

var array=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]

]
for(var i=0;i<array.length;i++){
    document.write("<br>")
    for(var j=0;j<array[i].length;j++){
        document.write(array[i][j]+" ")
    }
}


// ------Generate Counting 1-15

for(var i=1;i<=15;i++){
    document.write(i+",")
}

// -----Generate Reverse Counting------
for(var i=10;i>=1;--i){
    document.write(i+" ")
}

// -----Generate Even NUMBER------
for(var i=0;i<=20;i++){
    var numCheck = i%2; 
    if(numCheck == 0){
        document.write(i," ");
    }
}

// -----Generate Even NUMBER------
var array = ["cake","apple pie", "Cookies" , "chips","Patties"]
var search = prompt("What do u want to Need : ")
for(var i=0;i<array.length;i++){
    if(array[i] == search){
        alert("Yes Avaible")
    }
}

var array = [24,53];
for(var i=0;i<array.length;i++){
    if(array[i] > array[i]+1){
        alert(array[i]+" is greater")
    }
}
