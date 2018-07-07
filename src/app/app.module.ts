import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DraggableDirective} from './d3/directives/draggable.directives';
import {ZoomableDirective} from './d3/directives/zoomable.directive';
import {GraphComponent} from './visuals/graph.component';
import {NodeVisualComponent} from './visuals/shared/node-visual.component';
import {LinkVisualComponent} from './visuals/shared/link-visual.component';
import {D3Service} from './d3/d3.service';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    ZoomableDirective,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
