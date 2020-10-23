import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: String[] = ['Miguel','Yenka', 'Shelby', 'Vega', 'Cruzado'];

  name: String = 'Miguel';
  age: number;
  address: {
    street: String,
    city: String
  };
  hobbies: String[];

  constructor() {
    this.age = 27;
    this.address = {
      street: 'Su casa',
      city: 'Lima'
    };
    this.hobbies = ['swimming', 'reading', 'dancing'];

  }

  deleteUser(choice) {
    this.users.forEach((user, index) => {
      if(choice==user) this.users.splice(index,1);
    });
  }

  deleteHobby(hobby) {
    this.hobbies.forEach((el, index) => {
      if(hobby==this.hobbies[index]) this.hobbies.splice(index,1);
    });
  }

  handleChange(e) {
    console.log(e);

  }

  addUser(){
    return false;
    // this.users.push(newUser);
  }

}
