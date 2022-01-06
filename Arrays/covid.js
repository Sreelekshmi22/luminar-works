var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]  
]

// q1 higest test + ve case district
//var high_positive=coivd_data.reduce((pos1,pos2)=>pos1[2]>pos2[2]?pos1:pos2)
// console.log(high_positive);

// q2 district with higest 1 dose vaccination rate
// var high_dis=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
// console.log(high_dis);


// q3 district with lowest death cases
//var low_dis=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
//console.log(low_dis);

// q4 sort district with +ve cases
// var dis=coivd_data.sort((dc1,dc2)=>dc2[4]-dc1[4])
// console.log(dis);

// q5 sort the districts based on 1st dose
//var dist_first=coivd_data.sort((dc1,dc2)=>dc2[4]-dc1[4])
//console.log(dist_first);

// q6 is there any states with +ve cases > 60000

// q7 print trissur detail
var thri_detail=coivd_data.reduce((cd=>cd[1]=="thrissur"))
console.log(thri_detail);

// q8 total number of +ve cases
//var total_positive=coivd_data.reduce((cd1,cd2)=>cd1[4]+cd2[4])
//console.log(total_positive);

// q9 total number of cured cases
// var total_cured=coivd_data.filter(cd=>cd[1]=="iduky").map(cd=>cd[4])
 //console.log(total_cured);
// q10 cured numbers of iduky
 // var iduky_case=coivd_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2[3])
 /// console.log(iduky_case);
// q11 total number of death cases
var death_cases=coivd_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
 console.log(death_cases);
