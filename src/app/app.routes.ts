import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { DepotsComponent } from './components/depots/depots.component';
import { ContactComponent } from './components/contact/contact.component';
import { FamillesComponent } from './components/familles/familles.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormulaireFamilleComponent } from './components/formulaires/formulaire-famille/formulaire-famille.component';
import { FormulaireArticleComponent } from './components/formulaires/formulaire-article/formulaire-article.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjoutClientComponent } from './components/ajout-client/ajout-client.component';
import { DepotSidebarComponent } from './main-layout-component/sidebar-component/depot-sidebar/depot-sidebar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { EditFournisseurComponent } from './components/edit-fournisseur/edit-fournisseur.component';
import { TestComponent } from './components/test/test.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';

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
  {path:'clients',component:ClientsComponent},
  {path:'ajout-clients', component:AjoutClientComponent},
  {path:'fournisseurs', component:FournisseursComponent},
  {path:'ajouter-fournisseurs', component:AjouterFournisseurComponent},
  {path:'edit-fournisseurs/:id', component:EditFournisseurComponent},
  {path:'edit-client/:id', component:EditClientComponent}

];
