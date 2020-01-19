import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarUsuarioComponent } from './components/editar/editar.component';
import { ListarComponent } from './components/listar/listar.component';
import { DemoMaterialModule } from '../material-module';
import { MatNativeDateModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
let UsuarioModule = class UsuarioModule {
};
UsuarioModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ListarComponent,
            EditarUsuarioComponent,
            NgContentComponetComponent
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            UsuarioRoutingModule,
            SharedModule,
            MatNativeDateModule,
            DemoMaterialModule,
            CommonModule
        ],
        entryComponents: [NgContentComponetComponent],
        bootstrap: [NgContentComponetComponent],
        providers: []
    })
], UsuarioModule);
export { UsuarioModule };
//# sourceMappingURL=usuario.module.js.map