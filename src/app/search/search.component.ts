import { Component } from '@angular/core';

interface Category {
  title: string;
  items: string[];
  showViewAll?: boolean;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 categories = [
    {
      title: 'Home',
      color: '#e8f5e9',
      items: [
        { name: 'Buy/Sell', image: 'https://img.icons8.com/color/48/home-page.png' },
        { name: 'Rent', image: 'https://img.icons8.com/color/48/for-rent.png' },
        { name: 'Relocate', image: 'https://img.icons8.com/color/48/moving-truck.png' },
        { name: 'Interiors', image: 'https://img.icons8.com/color/48/interior.png' }
      ]
    },
    {
      title: 'Education',
      color: '#fff3e0',
      items: [
        { name: 'Playschools', image: 'https://img.icons8.com/color/48/kids-play-area.png' },
        { name: 'Schools', image: 'https://img.icons8.com/color/48/school.png' },
        { name: 'School Tuitions', image: 'https://img.icons8.com/color/48/student-center.png' },
        { name: 'Colleges', image: 'https://img.icons8.com/color/48/university.png' }
      ]
    },
    {
      title: 'Services',
      color: '#fff8e1',
      items: [
        { name: 'Cleaning', image: 'https://img.icons8.com/color/48/broom.png' },
        { name: 'Loans', image: 'https://img.icons8.com/color/48/money.png' },
        { name: 'Security', image: 'https://img.icons8.com/color/48/security-checked.png' },
        { name: 'Pest Control', image: 'https://img.icons8.com/color/48/insecticide.png' }
      ]
    }
  ];
}
