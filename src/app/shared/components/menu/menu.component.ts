import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-wrench',
            routerLink: 'custom',
          },
        ],
      },
    ];
  }
}
