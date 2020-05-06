import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ImportComponent } from './import/import.component';

import { BookingCancellationComponent } from './reports/booking-cancellation/booking-cancellation.component';
import { CashFlowComponent } from './reports/cash-flow/cash-flow.component';
import { ExpenditureStreamComponent } from './reports/expenditure-stream/expenditure-stream.component';
import { FinancialPerformanceComponent } from './reports/financial-performance/financial-performance.component';
import { FinancialStatementComponent } from './reports/financial-statement/financial-statement.component';
import { FinancialStatementNoteComponent } from './reports/financial-statement-note/financial-statement-note.component';
import { InventoryPositionComponent } from './reports/inventory-position/inventory-position.component';
import { MarginStreamComponent } from './reports/margin-stream/margin-stream.component';
import { NegativeGroupsComponent } from './reports/negative-groups/negative-groups.component';
import { RatioAnalysisComponent } from './reports/ratio-analysis/ratio-analysis.component';
import { RevenueStreamComponent } from './reports/revenue-stream/revenue-stream.component';
import { RevenueStreamCorrelationComponent } from './reports/revenue-stream-correlation/revenue-stream-correlation.component';
import { RevenueStreamDailyComponent } from './reports/revenue-stream-daily/revenue-stream-daily.component';
import { WoringCapitalComponent } from './reports/woring-capital/woring-capital.component';

import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: 'import',
        component: ImportComponent,
      },
      {
        path: 'report',
        component: BookingCancellationComponent,
      },
      {
        path: 'report/booking-cancellation',
        component: BookingCancellationComponent
      },
      {
        path: 'report/cashflow',
        component: CashFlowComponent,
      },
      {
        path: 'report/expenditure-stream',
        component: ExpenditureStreamComponent,
      },
      {
        path: 'report/financial-performance',
        component: FinancialPerformanceComponent,
      },
      {
        path: 'report/financial-statement',
        component: FinancialStatementComponent,
      },
      {
        path: 'report/financial-statement-note',
        component: FinancialStatementNoteComponent,
      },
      {
        path: 'report/inventory-position',
        component: InventoryPositionComponent,
      },
      {
        path: 'report/margin-stream',
        component: MarginStreamComponent,
      },
      {
        path: 'report/negative-groups',
        component: NegativeGroupsComponent,
      },
      {
        path: 'report/ratio-analysis',
        component: RatioAnalysisComponent,
      },
      {
        path: 'report/revenue-stream',
        component: RevenueStreamComponent,
      },
      {
        path: 'report/revenue-stream-daily',
        component: RevenueStreamDailyComponent,
      },
      {
        path: 'report/revenue-stream-correlation',
        component: RevenueStreamCorrelationComponent,
      },
      {
        path: 'report/working-capital',
        component: WoringCapitalComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
