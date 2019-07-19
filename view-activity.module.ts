import { NgModule } from "@angular/core";
import { ViewActivityRoutingModule } from "./view-activity-routing.module";
import {
	TransactionsComponent,
	ScheduledDialog,
	PendingDialog,
	CheckDialog,
} from "./component/transactions/transactions.component";
import { SharedModule } from "@rbfcu/shared/shared.module";
import { AngularMaterialModule } from "@rbfcu/angular-material/angular-material.module";
import {
	AccountOverviewComponent,
	RewardsDialog,
	MinimumDollar,
	TransferMonth,
} from "./component/account-overview/account-overview.component";
import { AccountActivityComponent } from "@rbfcu/view-activity/component/account-activity/account-activity.component";
import { AccountBreadcrumbComponent } from "./component/account-breadcrumb/account-breadcrumb.component";
import {
	ActivitySearchComponent,
	PastChecksDialog,
} from "./component/activity-search/activity-search.component";
import { SearchTransactionSharedService } from "./search-transaction-shared.service";
import {
	TransactionsModule,
	DepositAccountDetailsModule,
	TransactionDetailsModule,
	ViewPastCheckModule,
	ProfileModule,
	MarketingModule,
	ExclusiveOfferModule,
	ChecksReOrderModule,
} from "olb-lib";
import { ReOrderChecksComponent } from "./component/re-order-checks/re-order-checks.component";
import { DatePipe } from "@angular/common";
import { ReOrderChecksFormComponent } from "./component/re-order-checks-form/re-order-checks-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ViewPastCheckService } from "projects/olb-lib/src/public_api";

@NgModule({
	declarations: [
		AccountActivityComponent,
		TransactionsComponent,
		ScheduledDialog,
		PendingDialog,
		CheckDialog,
		PastChecksDialog,
		AccountOverviewComponent,
		RewardsDialog,
		MinimumDollar,
		TransferMonth,
		AccountBreadcrumbComponent,
		ActivitySearchComponent,
		ReOrderChecksComponent,
		ReOrderChecksFormComponent,
	],
	providers: [SearchTransactionSharedService, DatePipe],
	imports: [
		SharedModule,
		ViewActivityRoutingModule,
		AngularMaterialModule,
		ProfileModule,
		MarketingModule,
		ExclusiveOfferModule,
		DepositAccountDetailsModule,
		TransactionsModule,
		TransactionDetailsModule,
		ChecksReOrderModule,
		ViewPastCheckModule,
		ReactiveFormsModule,
	],
	entryComponents: [
		TransactionsComponent,
		ScheduledDialog,
		PendingDialog,
		CheckDialog,
		PastChecksDialog,
		AccountOverviewComponent,
		RewardsDialog,
		MinimumDollar,
		TransferMonth,
	],
})
export class ViewActivityModule {}
