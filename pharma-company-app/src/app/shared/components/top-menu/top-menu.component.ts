import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
},
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

    
    

    constructor(private router: Router,private elementRef: ElementRef) {  
  }

  ngOnInit() {
  }

  //for getting the click event
  //outside the component to close the open dropdown
  //complete code is for reference this.toggleLogin = false if clicked outside is required
  //https://stackoverflow.com/questions/35712379/how-can-i-close-a-dropdown-on-click-outside
  handleClick(event){
    if (!this.elementRef.nativeElement.contains(event.target)) {
        this.toggleLogin =false;
      this.toggleMenu=false;
    }
}

    logOut(): void {        
        //this.loginService.logOut();        
        this.router.navigate(['/login-form']);
    }

    toggleMenu:boolean=false;
    onToggleMenu():void{
      //for small screen size button toggle
      this.toggleMenu = !this.toggleMenu;
        
    }


    toggleLogin:boolean=false;
    onToggleLogin():void{
      //for logged in user profile/login toggle
      this.toggleLogin = !this.toggleLogin;     
    }
    
}


  //http://4dev.tech/2016/03/angular2-tutorial-detecting-clicks-outside-the-component/
    // var clickedComponent = event.target;
    // var inside = false;
    // do {
    //     if (clickedComponent === this.elementRef.nativeElement) {
    //         inside = true;
    //     }
    //     clickedComponent = clickedComponent.parentNode;
    // } while (clickedComponent);
    // if(inside){
    //     // console.log('inside');
    // }else{
    //   this.toggleLogin =false;
    //   this.toggleMenu=false;
    //     // console.log('outside');
    // }
