import { Component } from '@angular/core';
import { TopNavbarComponentComponent } from "./top-navbar-component/top-navbar-component.component";
import { SidebarComponentComponent } from "./sidebar-component/sidebar-component.component";

@Component({
    selector: 'app-main-layout-component',
    standalone: true,
    templateUrl: './main-layout-component.component.html',
    styleUrl: './main-layout-component.component.scss',
    imports: [TopNavbarComponentComponent, SidebarComponentComponent]
})
export class MainLayoutComponentComponent {

}
