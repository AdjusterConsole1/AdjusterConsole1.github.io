function newTracker() {
	return {
		PNLCBTN: {
			description: "rf_inbound_pnlc",
			type: "simple",
			data: {}
		},
		TOTALBTN: {
			description: "rf_inbound_totals",
			type: "simple",
			data: {}
		},
		RFAUTHBTN: {
			description: "rf_inbound_auth",
			type: "simple",
			data: {}
		},
		RFIBND: {
			description: "rf_inbound_dh_diag",
			type: "simple",
			data: {}
		},
		RFIBNE: {
			description: "rf_inbound_dh_est",
			type: "simple",
			data: {}
		},
		RFIBNF: {
			description: "rf_inbound_dh_fail",
			type: "simple",
			data: {}
		},
		RFIBNV: {
			description: "rf_inbound_dh_car",
			type: "simple",
			data: {}
		},
		TGAFOABTN: {
			description: "chob_oopc_authed",
			type: "simple",
			data: {}
		},
		TGAFODBTN: {
			description: "chob_oopc_declined",
			type: "simple",
			data: {}
		},
		TGAFOCBTN: {
			description: "chob_oopc_callback",
			type: "simple",
			data: {}
		},
		TGAFSABTN: {
			description: "chob_ship_authed",
			type: "simple",
			data: {}
		},
		TGAFSDBTN: {
			description: "chob_ship_declined",
			type: "simple",
			data: {}
		},
		TGAFSCBTN: {
			description: "chob_ship_callback",
			type: "simple",
			data: {}
		},
		TGAFOSABTN: {
			description: "chob_both_authed",
			type: "simple",
			data: {}
		},
		TGAFOSDSBTN: {
			description: "chob_both_declineship",
			type: "simple",
			data: {}
		},
		TGAFOSDBBTN: {
			description: "chob_both_declineall",
			type: "simple",
			data: {}
		},
		TGAFOSCBTN: {
			description: "chob_both_callback",
			type: "simple",
			data: {}
		},
		NALVM: {
			description: "chob_noans_lvm",
			type: "simple",
			data: {}
		},
		NANVM: {
			description: "chob_noans_novm",
			type: "simple",
			data: {}
		},
		authEmail: {
			description: "auth_disclaim_email",
			type: "simple",
			data: {}
		},
		toGen: {
			description: "xfer_togen",
			type: "simple",
			data: {}
		},
		newClaim: {
			description: "xfer_newclaim",
			type: "simple",
			data: {}
		},
		result1: {
			description: "ch_understood",
			type: "simple",
			data: {}
		},
		result2: {
			description: "no_ans_end",
			type: "simple",
			data: {}
		},
		T81: {
			description: "record_request_pt",
			type: "simple",
			remap: "recR",
			data: {}
		},
		T91: {
			description: "record_request_noans_pt",
			type: "simple",
			remap: "noansR",
			data: {}
		},
		T71: {
			description: "picture_request_pt",
			type: "simple",
			remap: "picR",
			data: {}
		},
		picR: {
			description: "picture_request",
			type: "simple",
			data: {}
		},
		recR: {
			description: "record_request",
			type: "simple",
			data: {}
		},
		noansR: {
			description: "record_request_noans",
			type: "simple",
			data: {}
		},
		T3: {
			description: "review_note",
			type: "simple",
			data: {}
		},
		T4: {
			description: "inspection_template",
			type: "simple",
			data: {}
		},
		R2: {
			description: "copy_textarea2",
			type: "function",
			data: {}
		},
		R8: {
			description: "ta2_oem_part",
			type: "simple",
			data: {}
		},
		R9: {
			description: "ta2_am_part",
			type: "simple",
			data: {}
		},
		R10: {
			description: "ta2_over250_part",
			type: "simple",
			data: {}
		},
		R11: {
			description: "ta2_bulk_part",
			type: "simple",
			data: {}
		},
		R12: {
			description: "ta2_evac_labor",
			type: "simple",
			data: {}
		},
		R13: {
			description: "ta2_align_labor",
			type: "simple",
			data: {}
		},
		R16: {
			description: "ta2_labor",
			type: "simple",
			data: {}
		},
		R17: {
			description: "ta2_diag",
			type: "simple",
			data: {}
		},
		SENDPART: {
			description: "sent_part_intake",
			type: "simple",
			data: {}
		},
		SENDLABOR: {
			description: "sent_labor_intake",
			type: "simple",
			data: {}
		},
		SENDDIAG: {
			description: "sent_diag_intake",
			type: "simple",
			data: {}
		},
		clearIntake: {
			description: "clear_intake",
			type: "function",
			data: {}
		},
		DJKahlid: {
			description: "add_box_intake",
			type: "function",
			data: {}
		},
		MTVsNEXT: {
			description: "next_intake",
			type: "function",
			data: {}
		},
		statusNote: {
			description: "status_note_main",
			type: "complex",
			core: true,
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		submitStat: {
			description: "submit_stat",
			type: "finish",
			finish: "statusNote",
			data: {}
		},
		cancelStat: {
			description: "cancel_stat",
			type: "cancel",
			target: "statusNote",
			data: {}
		},
		newAuthstarter: {
			description: "auth_note_main",
			type: "complex",
			core: true,
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		finish_auth: {
			description: "finish_auth",
			type: "finish",
			finish: "newAuthstarter",
			data: {}
		},
		cancel_auth: {
			description: "cancel_auth",
			type: "cancel",
			target: "newAuthstarter",
			data: {}
		},
		T101: {
			description: "ch_statement_pt",
			type: "altcomplex",
			remap: "T2",
			data: {}
		},
		cancelState: {
			description: "cancel_statement",
			type: "cancel",
			target: "T2",
			data: {}
		},
		PAPriceBtn: {
			description: "price_tool_main",
			type: "tool",
			isTimed: true,
			core: true,
			timeStarted: null,
			data: {}
		},
		DiagDivBtn: {
			description: "diag_tool_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		exitRcrce2: {
			description: "diag_tool_exit",
			type: "finish",
			finish: "DiagDivBtn",
			timeStarted: null,
			data: {}
		},
		T1: {
			description: "pt_transfer_main",
			type: "complex",
			isTimed: true,
			core: true,
			timeStarted: null,
			data: {}
		},
		cancelPT: {
			description: "pt_transfer_cancel",
			type: "cancel",
			target: "T1",
			timeStarted: null,
			data: {}
		},
		T2: {
			description: "ch_statement_main",
			type: "complex",
			isTimed: true,
			core: true,
			timeStarted: null,
			data: {}
		},
		transAuthBtn: {
			description: "trans_auth_main",
			type: "complex",
			isTimed: true,
			core: true,
			timeStarted: null,
			data: {}
		},
		transAuthRoutine: {
			description: "trans_auth_finish",
			type: "finish",
			finish: "transAuthBtn",
			data: {}
		},
		transCancelBtn: {
			description: "trans_auth_cancel",
			type: "cancel",
			target: "transAuthBtn",
			data: {}
		},
		QuickAnsBtn: {
			description: "quick_ans_main",
			type: "info",
			core: true,
			data: {}
		},
		MileDiscrepBtn: {
			description: "mile_discrep_main",
			type: "tool",
			core: true,
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		mileagebtn: {
			description: "mile_discrep_finish",
			type: "finish",
			finish: "MileDiscrepBtn",
			data: {}
		},
		exitRec: {
			description: "exit_tool_policy",
			type: "function",
			data: {}
		},
		trackerToolBtn: {
			description: "tracker_tool_main",
			type: "tool",
			core: true,
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		checkIt: {
			description: "tracker_generate",
			type: "function",
			data: {}
		},
		displayItem: {
			description: "display_edit",
			type: "customization",
			data: {}
		},
		contentItem: {
			description: "content_edit",
			type: "customization",
			data: {}
		},
		sizeItem: {
			description: "size_edit",
			type: "customization",
			data: {}
		},
		positionItem: {
			description: "position_edit",
			type: "customization",
			data: {}
		},
		newButtonItem: {
			description: "new_button_edit",
			type: "customization",
			data: {}
		},
		deleteCustomItem: {
			description: "delete_custom_edit",
			type: "customization",
			data: {}
		},
		toggleListItem: {
			description: "toggle_list_edit",
			type: "customization",
			data: {}
		},
		masterResetItem: {
			description: "master_reset",
			type: "customization",
			data: {}
		},
		LOCK1: {
			description: "menu_settings",
			type: "menu",
			data: {}
		},
		appearance: {
			description: "menu_appearance",
			type: "menu",
			data: {}
		},
		BtnBuilder: {
			description: "menu_toggle",
			type: "menu",
			data: {}
		},
		fluid: {
			description: "ta2_fluid_price",
			type: "info",
			data: {}
		},
		otherFPS: {
			description: "fluid_price",
			type: "info",
			data: {}
		},
		resetRep: {
			description: "tracker_reset",
			type: "function",
			data: {}
		},
		MBIClaimsBtn: {
			description: "mbi_policy",
			type: "info",
			data: {}
		},
		xfer2790Btn: {
			description: "xfer_policy",
			type: "info",
			data: {}
		},
		TeslaBtn: {
			description: "tesla_policy",
			type: "info",
			data: {}
		},
		DoNotUseBtn: {
			description: "donotuse_policy",
			type: "info",
			data: {}
		},
		IsItPTBtn: {
			description: "isitpt_policy",
			type: "info",
			data: {}
		},
		partsResBtn: {
			description: "parts_res_policy",
			type: "info",
			data: {}
		},
		DiagnosticBtn: {
			description: "diagnostic_policy",
			type: "info",
			data: {}
		},
		PANoOrderBtn: {
			description: "noorder_policy",
			type: "info",
			data: {}
		},
		tutorials: {
			description: "menu_Help",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		closebtn: {
			description: "close_help",
			type: "finish",
			finish: "tutorials",
			data: {}
		},
		coolingBtn: {
			description: "Cooling",
			type: "info",
			data: {}
		},
		turboBtn: {
			description: "Turbo",
			type: "info",
			data: {}
		},
		timingBtn: {
			description: "Timing",
			type: "info",
			data: {}
		},
		steeringBtn: {
			description: "Steering",
			type: "info",
			data: {}
		},
		suspensionBtn: {
			description: "Suspension",
			type: "info",
			data: {}
		},
		acBtn: {
			description: "AC",
			type: "info",
			data: {}
		},
		electricalBtn: {
			description: "Electrical",
			type: "info",
			data: {}
		},
		fuelBtn: {
			description: "Fuel",
			type: "info",
			data: {}
		},
		InspReviewsidenav: {
			description: "inspreview_side_nav",
			type: "simple",
			data: {}
		},
		InspectionTemplatesidenav: {
			description: "inspectiontemplate_side_nav",
			type: "simple",
			data: {}
		},
		Authorizationsidenav: {
			description: "authorization_side_nav",
			type: "nav",
			remap: "newAuthstarter",
			data: {}
		},
		Statussidenav: {
			description: "status_side_nav",
			type: "nav",
			remap: "statusNote",
			data: {}
		},
		Toolssidenav: {
			description: "tools_side_nav",
			type: "menu",
			remap: "tools",
			data: {}
		},
		TrackerToolsidenav: {
			description: "trackertool_side_nav",
			type: "nav",
			remap: "trackerToolBtn",
			data: {}
		},
		PricingGuidesidenav: {
			description: "pricingguide_side_nav",
			type: "nav",
			remap: "PAPriceBtn",
			data: {}
		},
		MileageIssuessidenav: {
			description: "mileageissues_side_nav",
			type: "nav",
			remap: "MileDiscrepBtn",
			data: {}
		},
		QuickAnswerssidenav: {
			description: "quickanswers_side_nav",
			type: "nav",
			remap: "QuickAnsBtn",
			data: {}
		},
		Templatessidenav: {
			description: "templates_side_nav",
			type: "nav",
			data: {}
		},
		PTTransfersidenav: {
			description: "pttransfer_side_nav",
			type: "nav",
			remap: "T1",
			data: {}
		},
		CHStatementsidenav: {
			id: "CHStatementsidenav",
			description: "chstatement_side_nav",
			type: "nav",
			remap: "T2",
			data: {}
		},
		DiagnosticAssistancesidenav: {
			description: "diagnostic_assistance_side_nav",
			type: "nav",
			remap: "DiagDivBtn",
			data: {}
		},
		Coolingsidenav: {
			description: "cooling_side_nav",
			type: "nav",
			data: {}
		},
		Turbosidenav: {
			description: "turbo_side_nav",
			type: "nav",
			data: {}
		},
		Timingsidenav: {
			description: "timing_side_nav",
			type: "nav",
			data: {}
		},
		Steeringsidenav: {
			description: "steering_side_nav",
			type: "nav",
			data: {}
		},
		Suspensionsidenav: {
			description: "suspension_side_nav",
			type: "nav",
			data: {}
		},
		ACsidenav: {
			description: "ac_side_nav",
			type: "nav",
			data: {}
		},
		Electricalsidenav: {
			description: "electrical_side_nav",
			type: "nav",
			data: {}
		},
		Fuelsidenav: {
			description: "fuel_side_nav",
			type: "nav",
			data: {}
		},
		Policysidenav: {
			description: "policy_side_nav",
			type: "nav",
			data: {}
		},
		GL6sidenav: {
			description: "gl6_side_nav",
			type: "nav",
			data: {}
		},
		Xfer2024sidenav: {
			description: "xfer_side_nav",
			type: "nav",
			data: {}
		},
		Teslasidenav: {
			description: "tesla_side_nav",
			type: "nav",
			data: {}
		},
		DoNotUsesidenav: {
			description: "donotuse_side_nav",
			type: "nav",
			data: {}
		},
		IsItPT: {
			description: "isitpt_side_nav",
			type: "nav",
			data: {}
		},
		PartsReturnssidenav: {
			description: "partsreturns_side_nav",
			type: "nav",
			data: {}
		},
		Diagnosticsidenav: {
			description: "diagnostic_side_nav",
			type: "nav",
			data: {}
		},
		DoNotOrdersidenav: {
			description: "donotorder_side_nav",
			type: "nav",
			data: {}
		},
		T0: {
			description: "template_menu",
			type: "menu",
			data: {}
		},
		SOPs: {
			description: "policy_center",
			type: "menu",
			data: {}
		},
		tools: {
			description: "tool_center",
			type: "menu",
			data: {}
		},
		swap1: {
			description: "side_nav_access",
			type: "menu",
			data: {}
		},
		navtag: {
			description: "sop_access",
			type: "menu",
			data: {}
		},
		pdfClose: {
			description: "pdf_close",
			type: "finish",
			hook: "endPDF",
			data: {}
		},
		pdf0001: {
			description: "pdf0001",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0002: {
			description: "pdf0002",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0003: {
			description: "pdf0003",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0004: {
			description: "pdf0004",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0005: {
			description: "pdf0005",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0006: {
			description: "pdf0006",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0007: {
			description: "pdf0007",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0008: {
			description: "pdf0008",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0009: {
			description: "pdf0009",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0010: {
			description: "pdf0010",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0011: {
			description: "pdf0011",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0012: {
			description: "pdf0012",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0013: {
			description: "pdf0013",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0014: {
			description: "pdf0014",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0015: {
			description: "pdf0015",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0016: {
			description: "pdf0016",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0017: {
			description: "pdf0017",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0018: {
			description: "pdf0018",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0019: {
			description: "pdf0019",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0020: {
			description: "pdf0020",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0021: {
			description: "pdf0021",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0022: {
			description: "pdf0022",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0023: {
			description: "pdf0023",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0024: {
			description: "pdf0024",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0025: {
			description: "pdf0025",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0026: {
			description: "pdf0026",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0027: {
			description: "pdf0027",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0028: {
			description: "pdf0028",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0029: {
			description: "pdf0029",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0030: {
			description: "pdf0030",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0031: {
			description: "pdf0031",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0032: {
			description: "pdf0032",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0033: {
			description: "pdf0033",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0034: {
			description: "pdf0034",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0035: {
			description: "pdf0035",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0036: {
			description: "pdf0036",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0037: {
			description: "pdf0037",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0038: {
			description: "pdf0038",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0039: {
			description: "pdf0039",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0040: {
			description: "pdf0040",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0041: {
			description: "pdf0041",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0042: {
			description: "pdf0042",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0043: {
			description: "pdf0043",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0044: {
			description: "pdf0044",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0045: {
			description: "pdf0045",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0046: {
			description: "pdf0046",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0047: {
			description: "pdf0047",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		}
	};
}
