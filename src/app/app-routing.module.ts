import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionListExampleComponent } from './action-list-example/action-list-example.component';
import { DrilldownListExampleComponent } from './drilldown-list-example/drilldown-list-example.component';
import { FabSpeedDialExampleComponent } from './fab-speed-dial-example/fab-speed-dial-example.component';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example/toggle-buttons-example.component';

const appRoutes: Routes = [
    { path: 'drilldown_list', component: DrilldownListExampleComponent },
    { path: 'action_list', component: ActionListExampleComponent },
    { path: 'toggle_buttons', component: ToggleButtonsExampleComponent },
    { path: 'fab_speed_dial', component: FabSpeedDialExampleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'drilldown_list' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
