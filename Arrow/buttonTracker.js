function newRoot() {
	return {};
}
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
			type: "functions",
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
			type: "functions",
			data: {}
		},
		DJKahlid: {
			description: "add_box_intake",
			type: "functions",
			data: {}
		},
		MTVsNEXT: {
			description: "next_intake",
			type: "functions",
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
		swap1: {
			description: "side_nav_access",
			type: "menu",
			data: {}
		},
		T71: {
			remap: "picR",
			type: "none",
			data: {}
		},
		T81: {
			remap: "recR",
			type: "none",
			data: {}
		},
		T91: {
			remap: "noansR",
			type: "none",
			data: {}
		},
		T101: {
			remap: "T2",
			type: "none",
			data: {}
		},
		statusNote: {
			description: "status_note_main",
			type: "complex",
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
		transAuthBtn: {
			description: "trans_auth_main",
			type: "complex",
			isTimed: true,
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
		T1: {
			description: "pt_transfer_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		cancelPT: {
			description: "pt_transfer_cancel",
			type: "cancel",
			target: "T1",
			data: {}
		},
		T2: {
			description: "ch_statement_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		cancelState: {
			description: "cancel_statement",
			type: "cancel",
			target: "T2",
			data: {}
		},
		tutorials: {
			description: "tutorial",
			type: "tool",
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
		tools: {
			description: "tool_center",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},		
		PAPriceBtn: {
			description: "price_tool_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		QuickAnsBtn: {
			description: "quick_ans_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		MileDiscrepBtn: {
			description: "mile_discrep_main",
			type: "tool",
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
		trackerToolBtn: {
			description: "tracker_tool_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		checkIt: {
			description: "tracker_generate",
			type: "functions",
			data: {}
		},
		resetRep: {
			description: "tracker_reset",
			type: "functions",
			data: {}
		},
		SOPs: {
			description: "policy_center_main",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		MBIClaimsBtn: {
			description: "mbi_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		xfer2790Btn: {
			description: "xfer_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		TeslaBtn: {
			description: "tesla_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DoNotUseBtn: {
			description: "donotuse_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		IsItPTBtn: {
			description: "isitpt_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		partsResBtn: {
			description: "parts_res_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DiagnosticBtn: {
			description: "diagnostic_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		PANoOrderBtn: {
			description: "noorder_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		exitRec: {
			description: "exit_tool_policy",
			type: "finish",
			finish: "tools",
			data: {}
		},
		DiagDivBtn: {
			description: "diag_tool_main",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		exitRcrce2: {
			description: "diag_tool_exit",
			type: "finish",
			finish: "DiagDivBtn",
			data: {}
		},
		coolingBtn: {
			description: "Cooling_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		turboBtn: {
			description: "Turbo_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		timingBtn: {
			description: "Timing_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		steeringBtn: {
			description: "Steering_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		suspensionBtn: {
			description: "Suspension_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		acBtn: {
			description: "AC_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		electricalBtn: {
			description: "Electrical_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		fuelBtn: {
			description: "Fuel_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DiagnosticAssistancesidenav: {
			remap: "DiagDivBtn",
			type: "none",
			data: {}
		},
		Coolingsidenav: {
			remap: "coolingBtn",
			type: "none",
			data: {}
		},
		Turbosidenav: {
			remap: "turboBtn",
			type: "none",
			data: {}
		},
		Timingsidenav: {
			remap: "timingBtn",
			type: "none",
			data: {}
		},
		Steeringsidenav: {
			remap: "steeringBtn",
			type: "none",
			data: {}
		},
		Suspensionsidenav: {
			remap: "suspensionBtn",
			type: "none",
			data: {}
		},
		ACsidenav: {
			remap: "acBtn",
			type: "none",
			data: {}
		},
		Electricalsidenav: {
			remap: "electricalBtn",
			type: "none",
			data: {}
		},
		Fuelsidenav: {
			remap: "fuelBtn",
			type: "none",
			data: {}
		},
		InspReviewsidenav: {
			remap: "T3",
			type: "none",
			data: {}
		},
		InspectionTemplatesidenav: {
			remap: "T4",
			type: "none",
			data: {}
		},
		Authorizationsidenav: {
			remap: "newAuthstarter",
			type: "none",
			data: {}
		},
		Statussidenav: {
			remap: "statusNote",
			type: "none",
			data: {}
		},
		Toolssidenav: {
			remap: "tools",
			type: "none",
			data: {}
		},
		TrackerToolsidenav: {
			remap: "trackerToolBtn",
			type: "none",
			data: {}
		},
		PricingGuidesidenav: {
			remap: "PAPriceBtn",
			type: "none",
			data: {}
		},
		MileageIssuessidenav: {
			remap: "MileDiscrepBtn",
			type: "none",
			data: {}
		},
		QuickAnswerssidenav: {
			remap: "QuickAnsBtn",
			type: "none",
			data: {}
		},
		PTTransfersidenav: {
			remap: "T1",
			type: "none",
			data: {}
		},
		CHStatementsidenav: {
			remap: "T2",
			type: "none",
			data: {}
		},
		Policysidenav: {
			remap: "tools",
			type: "none",
			data: {}
		},
		GL6sidenav: {
			remap: "coolingBtn",
			type: "none",
			data: {}
		},
		MBIsidenav: {
			remap: "MBIClaimsBtn",
			type: "none",
			data: {}
		},
		Xfer2024sidenav: {
			remap: "Xfer2024",
			type: "none",
			data: {}
		},
		Xfer2790sidenav: {
			remap: "xfer2790Btn",
			type: "none",
			data: {}
		},
		Teslasidenav: {
			remap: "TeslaBtn",
			type: "none",
			data: {}
		},
		DoNotUsesidenav: {
			remap: "DoNotUseBtn",
			type: "none",
			data: {}
		},
		IsItPTsidenav: {
			remap: "IsItPTBtn",
			type: "none",
			data: {}
		},
		PartsReturnssidenav: {
			remap: "partsResBtn",
			type: "none",
			data: {}
		},
		PartsRessidenav: {
			remap: "partsResBtn",
			type: "none",
			data: {}
		},
		Diagnosticsidenav: {
			remap: "DiagnosticBtn",
			type: "none",
			data: {}
		},
		DoNotOrdersidenav: {
			remap: "PANoOrderBtn",
			type: "none",
			data: {}
		},
		navtag: {
			description: "sop_access",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0001: {
			description: "pdf0001",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0002: {
			description: "pdf0002",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0003: {
			description: "pdf0003",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0004: {
			description: "pdf0004",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0005: {
			description: "pdf0005",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0006: {
			description: "pdf0006",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0007: {
			description: "pdf0007",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0008: {
			description: "pdf0008",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0009: {
			description: "pdf0009",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0010: {
			description: "pdf0010",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0011: {
			description: "pdf0011",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0012: {
			description: "pdf0012",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0013: {
			description: "pdf0013",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0014: {
			description: "pdf0014",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0015: {
			description: "pdf0015",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0016: {
			description: "pdf0016",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0017: {
			description: "pdf0017",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0018: {
			description: "pdf0018",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0019: {
			description: "pdf0019",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0020: {
			description: "pdf0020",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0021: {
			description: "pdf0021",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0022: {
			description: "pdf0022",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0023: {
			description: "pdf0023",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0024: {
			description: "pdf0024",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0025: {
			description: "pdf0025",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0026: {
			description: "pdf0026",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0027: {
			description: "pdf0027",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0028: {
			description: "pdf0028",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0029: {
			description: "pdf0029",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0030: {
			description: "pdf0030",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0031: {
			description: "pdf0031",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0032: {
			description: "pdf0032",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0033: {
			description: "pdf0033",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0034: {
			description: "pdf0034",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0035: {
			description: "pdf0035",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0036: {
			description: "pdf0036",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0037: {
			description: "pdf0037",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0038: {
			description: "pdf0038",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0039: {
			description: "pdf0039",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0040: {
			description: "pdf0040",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0041: {
			description: "pdf0041",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0042: {
			description: "pdf0042",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0043: {
			description: "pdf0043",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0044: {
			description: "pdf0044",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0045: {
			description: "pdf0045",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0046: {
			description: "pdf0046",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		pdf0047: {
			description: "pdf0047",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		}
	};
}