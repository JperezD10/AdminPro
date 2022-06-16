import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  titulo: string = "";

  constructor(private router: Router) { 
    this.getRouteData();
  }

  getRouteData(){
    //con esto me suscribo a los eventos de la ruta, pero vienen 6 objetos y necesito solo ActivationEnd
    //con el pipe voy obteniendo solo lo que me interesa.
    //! esta "data" se setteo como un objeto en "pages.routing.ts"
    this.router.events
    .pipe(
      //este resultado me da 2 ActivationEnd, me interesa el que tiene firstChild
      filter((event: any) => event instanceof ActivationEnd),
      //aca busco de los 2 que quedaron arriba, el que tenga firstChild
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      //aca me quedo con la data, dentro de la cual viene "titulo"
      map((event: ActivationEnd) => event.snapshot.data)
    )
    .subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

}
