import { Routes } from '@angular/router';
import { RechercheComponent } from './recherche/recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutarticlComponent } from './ajoutarticl/ajoutarticl.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
  { path: 'ajoutarticl', component: AjoutarticlComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: '**', component: AccueilComponent, pathMatch: 'full'},
];
