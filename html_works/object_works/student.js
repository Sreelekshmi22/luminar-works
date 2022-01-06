class student{
  constructor(name,age,gender,marks){ // used to initialize instance variables
      this.name=name;
      this.age=age;
      this.gender=gender;
      this.marks=marks;
  }
  printStudent(){
      console.log(this.name,this.age,this.gender,this.marks);
  }
}
var obj=new student("anju",16,"female",85)
obj.printStudent()

var obj1=new student("rahul",17,"male",96)
obj1.printStudent()