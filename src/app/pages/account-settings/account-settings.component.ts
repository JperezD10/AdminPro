import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    linkTheme?.setAttribute('href', url);
    
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    const linkTheme = document.querySelector('#theme');
    links.forEach(elemento =>{
      elemento.classList.remove('working');
      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elemento.classList.add('working');
      }
    })

  }
}
