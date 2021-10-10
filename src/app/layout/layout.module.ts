import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import en from "@angular/common/locales/en";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {IconsProviderModule} from "../icons-provider.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],

})
export class LayoutModule { }
