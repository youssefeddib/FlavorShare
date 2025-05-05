import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isopen :boolean = false; 
toggleMenu() {
  if (this.isopen) {
    this.isopen = false; 

    document.getElementById("menu")?.classList.add("md:hidden");
  }
  else {
    this.isopen = true; 
    document.getElementById("menu")?.classList.remove("md:hidden");

  }

}

}
