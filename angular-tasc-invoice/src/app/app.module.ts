import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatSidenavModule,
  MatChipsModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatTreeModule
 } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './components/print-layout/print-layout.component';
import { PrintService } from './service/print.service';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './service/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCarouselModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatTreeModule
  ],
  providers: [
    PrintService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
