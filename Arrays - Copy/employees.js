var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// print all employee name
//for(let employee of employees){
  //  console.log(employee[1]);
// }

// print developers details

//for(let employee of employees){
// if(employee[]=="developer"){
 //    console.log(employee);
// }

// }


// print experience of each employee

// for(let employee of employees){
//     console.log(employee[5]-employee[4]);
// }

// print employee detailswho is having exp>10
// for(let emp of employees){
 //   if((emp[5]-emp[4])>10){
 //   console.log(emp);
// }
// }

// print highest salary
// let max_sal=0;
// for(let employee of employees){
 //   if(employee[2]>max_sal){
 //    max_sal=employee[2];
 //   }
// }
  //      console.log(max_sal);
    
        // print min sal
     //   let min_sal=15000;
      //  for(let employee of employees){
     //       if(employee[2]<min_sal){
      //       min_sal=employee[2];
        //    }
     //   }
      //          console.log(min_sal);

      // print highest second salary
      employees.sort((e1,e2)=>e2[2]-e1[2])
      console.log(employees[1][2]);

      // print no of employees
      console.log(employees.length);

// print highest salary among developers
var developer_details=[]
for(let employee of employees){
   if(employee[3]=="developer"){
       developer_details.push(employee)
   }
}
developer_details.sort((d1,d2)=>d2[2]-d1[2])
console.log(developer_details[0[2]]);

// print details of employees whose namestart with A
for(let employee of employees){
    if(employee[1][0]=="A"|| employee[1][0]=="a"){
        console.log(employee);
    }
}


