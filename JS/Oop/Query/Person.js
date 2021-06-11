let person = {
  first_Name: "Kavitha",
  last_Name: "Kumari",
  fullName: function () {
    return this.first_Name + "" + this.last_Name;
  },
  get_FirstName: () => {
    return this.first_Name;
  },
};

console.log(person.fullName(), ".....");
console.log(person.get_FirstName());

// inside Obj - this keyword. Ref Current Obj

//this - ref current Obj
//fat Arrow - this keyword return {}