import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountActivityComponent } from "@rbfcu/view-activity/component/account-activity/account-activity.component";
import { ReOrderChecksComponent } from "@rbfcu/view-activity/component/re-order-checks/re-order-checks.component";
import { RouteGuardService } from "@rbfcu/route-guard.service";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { ActivitySearchComponent } from "./component/activity-search/activity-search.component";
import { ReOrderChecksFormComponent } from "./component/re-order-checks-form/re-order-checks-form.component";

const viewActivityRoutes: Routes = [
	{
		path: ":id",
		component: AccountActivityComponent,
	},
	{
		path: "reorder/:id",
		component: ReOrderChecksComponent,
		canActivate: [RouteGuardService],
		data: { routeFlag: "reorder-checks" },
	},
	{
		path: "reorder/checkReorder/redirect",
		component: ReOrderChecksFormComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(viewActivityRoutes)],
	exports: [RouterModule],
})
export class ViewActivityRoutingModule {}
