/* Angular */
import {BrowserModule,} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
/* D3 */
import {DraggableDirective} from './d3/directives/draggable.directives';
import {ZoomableDirective} from './d3/directives/zoomable.directive';
import {D3Service} from './d3/d3.service';
/* Grafico */
import {GraphComponent} from './visuals/graph.component';
import {NodeVisualComponent} from './visuals/shared/node-visual.component';
import {LinkVisualComponent} from './visuals/shared/link-visual.component';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {TeamBuilderComponent} from './team-builder/team-builder.component';


const appRoutes: Routes = [
    {path: 'network', component: GraphComponent},
    {path: 'team-builder', component: TeamBuilderComponent},
    {
        path: '', redirectTo: '/network', pathMatch: 'full'
    }];

@NgModule({
    declarations: [
        AppComponent,
        DraggableDirective,
        ZoomableDirective,
        GraphComponent,
        NodeVisualComponent,
        LinkVisualComponent,
        MenuComponent,
        TeamBuilderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [D3Service],
    bootstrap: [AppComponent]
})
export class AppModule {
}
