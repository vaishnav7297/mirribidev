import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { ImportComponent } from './import/import.component';
import { RevenueStreamComponent } from './reports/revenue-stream/revenue-stream.component';
import { MarginStreamComponent } from './reports/margin-stream/margin-stream.component';
import { ExpenditureStreamComponent } from './reports/expenditure-stream/expenditure-stream.component';
import { FinancialPerformanceComponent } from './reports/financial-performance/financial-performance.component';
import { WoringCapitalComponent } from './reports/woring-capital/woring-capital.component';
import { InventoryPositionComponent } from './reports/inventory-position/inventory-position.component';
import { BookingCancellationComponent } from './reports/booking-cancellation/booking-cancellation.component';
import { RevenueStreamDailyComponent } from './reports/revenue-stream-daily/revenue-stream-daily.component';
import { RevenueStreamCorrelationComponent } from './reports/revenue-stream-correlation/revenue-stream-correlation.component';
import { FinancialStatementComponent } from './reports/financial-statement/financial-statement.component';
import { FinancialStatementNoteComponent } from './reports/financial-statement-note/financial-statement-note.component';
import { RatioAnalysisComponent } from './reports/ratio-analysis/ratio-analysis.component';
import { CashFlowComponent } from './reports/cash-flow/cash-flow.component';
import { NegativeGroupsComponent } from './reports/negative-groups/negative-groups.component';
import { TeamComponent } from './account/team/team.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    ImportComponent,
    RevenueStreamComponent,
    MarginStreamComponent,
    ExpenditureStreamComponent,
    FinancialPerformanceComponent,
    WoringCapitalComponent,
    InventoryPositionComponent,
    BookingCancellationComponent,
    RevenueStreamDailyComponent,
    RevenueStreamCorrelationComponent,
    FinancialStatementComponent,
    FinancialStatementNoteComponent,
    RatioAnalysisComponent,
    CashFlowComponent,
    NegativeGroupsComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
