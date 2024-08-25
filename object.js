function Student(name,age,cgpa,languages)
{
  this.name=name;
  this.age=age;
  this.cgpa=cgpa;
  this.languages=languages;
  this.display= function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log("Languages : ",this.languages.join(' || '));
  }
}
const student1= new Student("dhrubo",27,2.82,["bengali","hindi","english"]);
const student2= new Student("ava",25,3.24,["bengali","hindi","arabic"]);
const student3= new Student("dhoni",9,3.45,["bengali","urdu","english"]);

student1.display();
student2.display();
student3.display();