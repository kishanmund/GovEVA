import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  lastActive = 0;
  currentRoute =""

  constructor(private router: Router) { 
    setTimeout(() => {
      this.currentRoute = router.url.replace(/^./, "")
      console.log(this.currentRoute)
      for(let i=0;i<this.headerMenu.length;i++){        
        if(this.headerMenu[i].route == this.currentRoute){
          this.headerMenu[i].active = true
          this.lastActive = i
        }
      }
    }, 100);
    
    
  }

  ngOnInit() {
  }

  headerMenu = [
    {
      name: "Home",
      active: false,
      route:"home"    },
    {
      name: "Product",
      active: false,
      route:"product"
    },
    {
      name: "Our Team",
      active: false,
      route:"team"
    },
    {
      name: "Insights",
      active: false,
      route:"insights"
    },
    {
      name: "Careers",
      active: false,
      route:"careers"
    },
    {
      name: "Contact",
      active: false,
      route:"contact"
    }
  ];

  changeRoute(item, index) {
    this.headerMenu[this.lastActive].active = false;
    this.lastActive = index;
    this.headerMenu[index].active = true;
  }


}
