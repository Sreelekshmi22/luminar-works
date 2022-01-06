var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]

// print course of akhil
console.log(students[0][2]);
// mark ok akhil
console.log(students[0][3]);
for(let student of students){
    console.log(students[1]);
}
// q1 print all student names
for(let student of students){
    console.log(student[1]);
}
for(let student of students){
    if(student[2]=="mearnstack"){
        console.log(student);
    }
}   

// print details ofstudentswhose marks above > 160
for(let data of students){
    if(data[3]>160){
        console.log(data);
    }
}

// print name of django batch whose marks>168
for(let student of students){
    if(student[2]=="django" && student[3]>168){
        console.log(student[1]);
    }
}

//print highest total

var max_total=0;
for(let student of students){// 165>145
    if(student[3]>max_total){ // max_total=165
        max_total=student[3]
 }

}
console.log(max_total);