import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { DepotsComponent } from './components/depots/depots.component';
import { ContactComponent } from './components/contact/contact.component';
import { FamillesComponent } from './components/familles/familles.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormulaireFamilleComponent } from './components/formulaires/formulaire-famille/formulaire-famille.component';
import { FormulaireArticleComponent } from './components/formulaires/formulaire-article/formulaire-article.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjoutClientComponent } from './components/ajout-client/ajout-client.component';
import { AjoutFournisseurComponent } from './components/ajout-fournisseur/ajout-fournisseur.component';
import { DepotSidebarComponent } from './main-layout-component/sidebar-component/depot-sidebar/depot-sidebar.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:DashboardComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'depot',component:DepotsComponent},
  {path:'contact',component:ContactComponent},
  {path:'depot-side', component:DepotSidebarComponent},
  {path:'familles', component: FamillesComponent},
  {path:'articles', component:ArticlesComponent},
  {path:'formulaire-famille', component:FormulaireFamilleComponent},
  {path:'formulaire-article',component:FormulaireArticleComponent},
  {path: 'clients', component:ClientsComponent},
  {path:'fournisseurs', component:FournisseursComponent},
  {path:'ajout-fournisseurs', component:AjoutFournisseurComponent},
  {path:'ajout-clients', component:AjoutClientComponent}
];
