import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
	selector: "re-order-checks-form-checks",
	templateUrl: "./re-order-checks-form.component.html",
	styleUrls: ["./re-order-checks-form.component.scss"],
})
export class ReOrderChecksFormComponent implements OnInit {
	postUrl: string;
	encryptedId: string;
	constructor(
		private route: ActivatedRoute,
		@Inject(DOCUMENT) private document: Document,
	) {}

	ngOnInit() {
		this.postUrl = "";
		this.route.queryParams.subscribe(data => {
			this.postUrl = `https://india.dev.rbfcu.org${data.postUrl}`;
			this.encryptedId = data.id;
			const form: any = this.document.getElementById("chkOrderRedirect");
		});
	}
}
