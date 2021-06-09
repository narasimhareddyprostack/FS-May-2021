class Address {
  constructor(house_No, area, city, pincode, landmark) {
    this.house_No = house_No;
    this.area = area;
    this.city = city;
    this.pincode = pincode;
    this.landmark = landmark;
  }
}
//new Address("14", "Marathahalli", "Bangalore", 560047, "Marathahalli Bridge");

// export default Address;  ES6

module.exports = Address;  //ES5 
