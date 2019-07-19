import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
	AppState,
	GetProfileAction,
	ChecksReOrderAction,
	ChecksReOrder,
	selectChecksReOrder,
} from "olb-lib";
import { Store } from "@ngrx/store";
import { HeaderService } from "@rbfcu/shared/component/header/header.service";
import { AppService } from "@rbfcu/app.service";
import { TitleService } from "@rbfcu/shared/title.service";
import { Observable } from "rxjs";
@Component({
	selector: "re-order-checks",
	templateUrl: "./re-order-checks.component.html",
	styleUrls: ["./re-order-checks.component.scss"],
})
export class ReOrderChecksComponent implements OnInit {
	URLToClick: string;
	accountId: string;
	checkOrdersResponse$: Observable<ChecksReOrder>;
	constructor(
		private route: ActivatedRoute,
		private store: Store<AppState>,
		private headerService: HeaderService,
		private appService: AppService,
		private titleService: TitleService,
	) {}

	ngOnInit() {
		this.titleService.setTitle("Check Orders");
		this.store.dispatch(new GetProfileAction());
		this.headerService.changeHeaderLink(true);
		this.headerService.changeLinkTitle("CHECK ORDERS");
		this.appService.getMarketingOffers();
		this.route.paramMap.subscribe(data => {
			this.accountId = data.get("id");
			this.store.dispatch(new ChecksReOrderAction(this.accountId));
		});
		this.checkOrdersResponse$ = this.store.select(selectChecksReOrder);
	}
}
