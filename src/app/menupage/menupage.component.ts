import { Component } from '@angular/core';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  searchText!: string;

  constructor() { }

  onSearch() {
    // Implement search functionality here
    console.log('Search query:', this.searchText);
  }
}
  