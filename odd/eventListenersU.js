document.addEventListener("DOMContentLoaded", function() {

document.getElementById('closeChartBtn').addEventListener('click', closeChart);
document.getElementById('disclaimer').addEventListener('click', showDisclaimer);
document.getElementById('disclaimer2').addEventListener('click', function() {
    hideDisclaimer('y');
});
document.getElementById('understand').addEventListener('click', function() {
    hideDisclaimer('x');
});

document.getElementById('t8a').addEventListener('click', toggleOOPBtns);

document.getElementById('closebtn').addEventListener('click', closeHelp);

document.getElementById('closeAutoCopy').addEventListener('click', autoEnable);
document.getElementById('LOCK1').addEventListener('click', MENU);
document.getElementById('appearance').addEventListener('click', personalize);
document.getElementById('BtnBuilder').addEventListener('click', BuilderShow);
document.getElementById('ptcon').addEventListener('click', function() {
    modePTmenu('demo');
});
document.getElementById('tutorials').addEventListener('click', showInstructions);

document.querySelectorAll('.sop_btn.neu').forEach(el => el.addEventListener('click', function() {
    showSOP(this.id);
}));
document.querySelector('.close_button').addEventListener('click', closeSOP);
document.querySelectorAll('#mySidenav .navbtn').forEach((el, index) => {
    const actions = [
        () => resrcCenter('5', 't'),
        openScript,
        () => resrcCenter('5', 't') || openInfo(event, 'trackerTool'),
        () => resrcCenter('5', 't') || openInfo(event, 'PAPrice'),
        () => resrcCenter('5', 't') || openInfo(event, 'MileDiscrep'),
        () => resrcCenter('5', 't') || openInfo(event, 'QuickAns'),
        () => resrcCenter('4', 'p'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'MBIClaims'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'xfer2790'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'Tesla'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'DoNotUse'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'IsItPT'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'partsRes'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'Diagnostic'),
        () => resrcCenter('4', 'p') || openInfo2(event, 'PANoOrder'),
        diagCenter,
        () => diagCenter() || openInfo2(event, 'Cooling'),
        () => diagCenter() || openInfo2(event, 'Turbo'),
        () => diagCenter() || openInfo2(event, 'Timing'),
        () => diagCenter() || openInfo2(event, 'Steering'),
        () => diagCenter() || openInfo2(event, 'Suspension'),
        () => diagCenter() || openInfo2(event, 'AC'),
        () => diagCenter() || openInfo2(event, 'Electrical'),
        () => diagCenter() || openInfo2(event, 'Fuel'),
        ShowTemps,
        PTXFER,
        () => STMTTEMP('T2'),
        () => REVIEW('T3'),
        () => INSPTEMP('T4'),
        auth_run,
        statNOTE
    ];
    el.addEventListener('click', function() {
        actions[index]();
        closeNav();
    });
});

document.getElementById('shadDouble').addEventListener('click', getPicker);
document.getElementById('previewBtn').addEventListener('click', function() {});
document.getElementById('previewBtn2').addEventListener('click', function() {});
document.getElementById('setColors').addEventListener('click', saveColors);
document.getElementById('exitColor').addEventListener('click', exitColor);
document.getElementById('defaultColors').addEventListener('click', function() { setColor('default'); });
document.getElementById('presetGrey').addEventListener('click', function() { setColor('grey'); });
document.getElementById('presetRed').addEventListener('click', function() { setColor('red'); });
document.getElementById('presetGreen').addEventListener('click', function() { setColor('green'); });
document.getElementById('presetPink').addEventListener('click', function() { setColor('pink'); });
document.getElementById('presetRandom').addEventListener('click', function() { setColor('random'); });
document.getElementById('ConsoleDefault').addEventListener('click', function() { setColor('ACDF'); });
document.getElementById('swap1').addEventListener('click', openNav);
document.getElementById('navtag').addEventListener('click', openSOPnav);
document.getElementById('newAuthstarter').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('statusNote').addEventListener('click', statNOTE);
document.getElementById('statusNote').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('openScript').addEventListener('click', openScript);
document.getElementById('openScript').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('picR').addEventListener('click', function() { PICREQ(this.id); });
document.getElementById('picR').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('recR').addEventListener('click', function() { RECREQ(this.id); });
document.getElementById('recR').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('noansR').addEventListener('click', function() { NOANSREC(this.id); });
document.getElementById('noansR').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('T0').addEventListener('click', ShowTemps);
document.getElementById('T0').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('SOPs').addEventListener('click', function() { resrcCenter('4', 'p'); });
document.getElementById('SOPs').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('tools').addEventListener('click', function() { resrcCenter('5', 't'); });
document.getElementById('tools').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('SENDPART').addEventListener('click', FormToTA);
document.getElementById('SENDLABOR').addEventListener('click', SENDLABOR1);
document.getElementById('SENDDIAG').addEventListener('click', SENDDIAG1);
document.getElementById('clearIntake').addEventListener('click', ClearIntake);
document.getElementById('DJKahlid').addEventListener('click', AnotherOne);
document.getElementById('MTVsNEXT').addEventListener('click', NextPart);
document.getElementById('T1').addEventListener('click', PTXFER);
document.getElementById('T1').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('T2').addEventListener('click', STMTTEMP);
document.getElementById('T2').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('T3').addEventListener('click', function() { REVIEW(this.id); });
document.getElementById('T3').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('T4').addEventListener('click', function() { INSPTEMP(this.id); });
document.getElementById('T4').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('transAuthBtn').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('denials').addEventListener('click', showDenials);
document.getElementById('denials').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('reviews').addEventListener('click', showReviews);
document.getElementById('reviews').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('requests').addEventListener('click', showRequests);
document.getElementById('requests').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('prompt').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('prompt').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('conopdeny').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('sludgedeny').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('waitdeny').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T41').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T51').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T61').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T71').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T81').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T91').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T101').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('T31').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('autoCopyBtn').addEventListener('click', autoEnable);
document.getElementById('autoCopyBtn').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('flowchartBtn').addEventListener('click', flowchart);
document.getElementById('flowchartBtn').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('xferred').addEventListener('click', xferred);
document.getElementById('xferred').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('toGen').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('toGen').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('newClaim').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('newClaim').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('inform').addEventListener('click', inform);
document.getElementById('inform').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('reasonAuth').addEventListener('click', function() { reason('1'); });
document.getElementById('reasonAuth').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('reasonDenial').addEventListener('click', function() { reason('2'); });
document.getElementById('reasonDenial').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('reasonStatus').addEventListener('click', function() { reason('3'); });
document.getElementById('reasonStatus').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('result1').addEventListener('click', function() { result('1'); });
document.getElementById('result1').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('result2').addEventListener('click', function() { result('2'); });
document.getElementById('result2').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('otherFPS').addEventListener('click', FLUIDLEAK);
document.getElementById('otherFPS').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('authEmail').addEventListener('click', function() { copyTextFunc(this.id); });
document.getElementById('authEmail').addEventListener('contextmenu', function(event) { customMenu(this.id, event); });
document.getElementById('SENDPART').addEventListener('click', FormToTA);
document.getElementById('SENDLABOR').addEventListener('click', SENDLABOR1);
document.getElementById('SENDDIAG').addEventListener('click', SENDDIAG1);
document.getElementById('clearIntake').addEventListener('click', ClearIntake);
document.getElementById('DJKahlid').addEventListener('click', AnotherOne);
document.getElementById('MTVsNEXT').addEventListener('click', NextPart);
document.getElementById('R2').addEventListener('click', COPYNOTE);
document.getElementById('R15').addEventListener('click', RESET);
document.getElementById('R8').addEventListener('click', NEWOEM);
document.getElementById('R9').addEventListener('click', NEWAM);
document.getElementById('R10').addEventListener('click', OEMOVER);
document.getElementById('R11').addEventListener('click', function() { BULK(this.id); });
document.getElementById('fluid').addEventListener('click', FLUIDLEAK);
document.getElementById('R12').addEventListener('click', function() { EVACRECH(this.id); });
document.getElementById('R13').addEventListener('click', function() { ALIGNMENT(this.id); });
document.getElementById('R16').addEventListener('click', LABOR);
document.getElementById('R17').addEventListener('click', DIAG);
document.getElementById('RFIBBTN').addEventListener('click', RFIB);
document.getElementById('TGAFBTN').addEventListener('click', TGAF);
document.getElementById('RESET').addEventListener('click', RESETNOTE);
document.getElementById('RFIBDH').addEventListener('click', RFIBDH);
document.getElementById('PNLCBTN').addEventListener('click', function() { PNLC(this.id); });
document.getElementById('TOTALBTN').addEventListener('click', function() { TOTAL(this.id); });
document.getElementById('RFAUTHBTN').addEventListener('click', function() { GAR(this.id); });
document.getElementById('RFIBND').addEventListener('click', function() { RFIBND(this.id); });
document.getElementById('RFIBNE').addEventListener('click', function() { RFIBNE(this.id); });
document.getElementById('RFIBNF').addEventListener('click', function() { RFIBNF(this.id); });
document.getElementById('RFIBNV').addEventListener('click', function() { RFIBNV(this.id); });
document.getElementById('TGAFOBTN').addEventListener('click', function() { TGAFO(this.id); });
document.getElementById('TGAFSBTN').addEventListener('click', function() { TGAFS(this.id); });
document.getElementById('TGAFBBTN').addEventListener('click', function() { TGAFB(this.id); });
document.getElementById('TGAFOABTN').addEventListener('click', function() { TGAFOA(this.id); });
document.getElementById('TGAFODBTN').addEventListener('click', function() { TGAFOD(this.id); });
document.getElementById('TGAFOCBTN').addEventListener('click', function() { TGAFOC(this.id); });
document.getElementById('TGAFSABTN').addEventListener('click', function() { TGAFSA(this.id); });
document.getElementById('TGAFSDBTN').addEventListener('click', function() { TGAFSD(this.id); });
document.getElementById('TGAFSCBTN').addEventListener('click', function() { TGAFSC(this.id); });
document.getElementById('TGAFOSABTN').addEventListener('click', function() { TGAFOSA(this.id); });
document.getElementById('TGAFOSDSBTN').addEventListener('click', function() { TGAFOSDS(this.id); });
document.getElementById('TGAFOSDBBTN').addEventListener('click', function() { TGAFOSDB(this.id); });
document.getElementById('TGAFOSCBTN').addEventListener('click', function() { TGAFOSC(this.id); });
document.getElementById('NALVM').addEventListener('click', NAV);
document.getElementById('NANVM').addEventListener('click', NAN);
document.getElementById('yes1').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no1').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes2').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no2').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes3').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no3').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('nr3').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('done3').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes4').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no4').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('na4').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes5').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no5').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes6').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no6').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes7').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no7').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('phone').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('email').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('either').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('done8').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes9').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no9').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes10').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no10').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('yes11').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('no11').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('done11').addEventListener('click', function() { advancePT(this.id); });
document.getElementById('backTemp').addEventListener('click', backTEMP);
document.getElementById('cancelPT').addEventListener('click', cancelPT);
document.getElementById('stat7').addEventListener('click', function() { highlander('stat8'); });
document.getElementById('stat8').addEventListener('click', function() { highlander('stat7'); });
document.getElementById('submitStat').addEventListener('click', function() { submitStat('0'); });
document.getElementById('cancelStat').addEventListener('click', cancelStat);
document.getElementById('nauth9').addEventListener('click', function() { show_oopc_option('y'); });
document.getElementById('nauth10').addEventListener('click', function() { show_oopc_option(); });
document.getElementById('nauth11').addEventListener('click', function() { show_oopc_option('y'); });
document.getElementById('nauth12').addEventListener('click', function() { show_oopc_option(); });
document.getElementById('cancel_auth').addEventListener('click', cancel_auth);
document.getElementById('finish_auth').addEventListener('click', function() { auth_initialize(2); });
document.getElementById('s9').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s1').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s2').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s3').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s4').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s6').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s7').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s8').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('g0').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('g1').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('s0').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('a0').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('a1').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('a2').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('a3').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('a4').addEventListener('click', function() { toggleConductor(this.id); });
document.getElementById('CopyPaymentBTN').addEventListener('click', function() { CopyIntakeForm('1'); });
document.getElementById('CopyZipBTN').addEventListener('click', function() { CopyIntakeForm('2'); });
document.getElementById('CopyMileBTN').addEventListener('click', function() { CopyIntakeForm('3'); });
document.querySelectorAll('.tablinks')[0].addEventListener('click', function(event) { openInfo(event, 'QuickAns'); });
document.querySelectorAll('.tablinks')[1].addEventListener('click', function(event) { openInfo(event, 'MileDiscrep'); });
document.querySelectorAll('.tablinks')[2].addEventListener('click', function(event) { openInfo(event, 'PAPrice'); });
document.querySelectorAll('.tablinks')[3].addEventListener('click', function() { closeResource(); diagCenter(); });
document.querySelectorAll('.tablinks')[4].addEventListener('click', function(event) { openInfo(event, 'trackerTool'); });
document.querySelectorAll('.tablinks')[5].addEventListener('click', function(event) { openInfo(event, 'MBIClaims'); });
document.querySelectorAll('.tablinks')[6].addEventListener('click', function(event) { openInfo(event, 'xfer2790'); });
document.querySelectorAll('.tablinks')[7].addEventListener('click', function(event) { openInfo(event, 'Tesla'); });
document.querySelectorAll('.tablinks')[8].addEventListener('click', function(event) { openInfo(event, 'DoNotUse'); });
document.querySelectorAll('.tablinks')[9].addEventListener('click', function(event) { openInfo(event, 'IsItPT'); });
document.querySelectorAll('.tablinks')[10].addEventListener('click', function(event) { openInfo(event, 'partsRes'); });
document.querySelectorAll('.tablinks')[11].addEventListener('click', function(event) { openInfo(event, 'Diagnostic'); });
document.querySelectorAll('.tablinks')[12].addEventListener('click', function(event) { openInfo(event, 'PANoOrder'); });
document.getElementById('questa1').addEventListener('click', function() { showAnswer(this.id); });
document.getElementById('questa2').addEventListener('click', function() { showAnswer(this.id); });
document.getElementById('questa3').addEventListener('click', function() { showAnswer(this.id); });
document.getElementById('questa4').addEventListener('click', function() { showAnswer(this.id); });
document.getElementById('questa5').addEventListener('click', function() { showAnswer(this.id); });
document.getElementById('md1').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md2').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md3').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md4').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md5').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md6').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md7').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md8').addEventListener('click', function() { mileageRadio(this.name); });
document.getElementById('md9').addEventListener('click', function() { proceed(); mileageRadio(this.name); });
document.getElementById('md10').addEventListener('click', function() { noride(); mileageRadio(this.name); });
document.getElementById('md11').addEventListener('click', function() { crReview(); mileageRadio(this.name); });
document.getElementById('md12').addEventListener('click', function() { mileageCalc(); mileageRadio(this.name); });
document.getElementById('mileagebtn').addEventListener('click', mileDiscrep);
document.getElementById('resetMD').addEventListener('click', resetMD);
document.getElementById('AM1').addEventListener('click', function() { goGuide('am', this.name); });
document.getElementById('OE1').addEventListener('click', function() { goGuide('oe', this.name); });
document.getElementById('over1').addEventListener('click', function() { goGuide('oeover', this.name); });
document.getElementById('under1').addEventListener('click', function() { goGuide('oeunder', this.name); });
document.getElementById('rfovli34').addEventListener('click', function() { goGuide('rfovrmsrp', this.name); });
document.getElementById('rfundli34').addEventListener('click', function() { goGuide('rfundmsrp', this.name); });
document.getElementById('yyyship').addEventListener('click', function() { goGuide('mayship3', this.name); });
document.getElementById('nnnship').addEventListener('click', function() { goGuide('noship3', this.name); });
document.getElementById('paopt1').addEventListener('click', function() { goGuide('pricing', this.name); });
document.getElementById('noopt1').addEventListener('click', function() { goGuide('sourcing', this.name); });
document.getElementById('listov').addEventListener('click', function() { goGuide('listover', this.name); });
document.getElementById('listund').addEventListener('click', function() { goGuide('listunder', this.name); });
document.getElementById('rfovli').addEventListener('click', function() { goGuide('rfovrlist', this.name); });
document.getElementById('rfundli').addEventListener('click', function() { goGuide('rfundlist', this.name); });
document.getElementById('yship').addEventListener('click', function() { goGuide('mayship', this.name); });
document.getElementById('nship').addEventListener('click', function() { goGuide('noship', this.name); });
document.getElementById('costo').addEventListener('click', function() { goGuide('sourcing', this.name); });
document.getElementById('costu').addEventListener('click', function() { goGuide('costund', this.name); });
document.getElementById('rfovco').addEventListener('click', function() { goGuide('rfovrcost', this.name); });
document.getElementById('rfundco').addEventListener('click', function() { goGuide('rfundcost', this.name); });
document.getElementById('yship2').addEventListener('click', function() { goGuide('mayship2', this.name); });
document.getElementById('nship2').addEventListener('click', function() { goGuide('noship2', this.name); });
document.getElementById('resetPA').addEventListener('click', resetGuide);
document.getElementById("addLineBtn").addEventListener("click", addLine);
document.getElementById("saveallRecs").addEventListener("click", saveAll);

document.getElementById("serN").addEventListener("click", function() {
    showNote("serN");
});
document.getElementById("serS").addEventListener("click", function() {
    saveRecord("serS");
});
document.getElementById("serD").addEventListener("click", function() {
    delRecord("serD");
});

document.getElementById("incN").addEventListener("click", function() {
    showNote("incN");
});
document.getElementById("incS").addEventListener("click", function() {
    saveRecord("incS");
});
document.getElementById("incD").addEventListener("click", function() {
    delRecord("incD");
});

document.getElementById("rec0N").addEventListener("click", function() {
    showNote("rec0N");
});
document.getElementById("rec0S").addEventListener("click", function() {
    saveRecord("rec0S");
});
document.getElementById("rec0D").addEventListener("click", function() {
    delRecord("rec0D");
});

document.getElementById("rec1N").addEventListener("click", function() {
    showNote("rec1N");
});
document.getElementById("rec1S").addEventListener("click", function() {
    saveRecord("rec1S");
});
document.getElementById("rec1D").addEventListener("click", function() {
    delRecord("rec1D");
});

document.getElementById("rec2N").addEventListener("click", function() {
    showNote("rec2N");
});
document.getElementById("rec2S").addEventListener("click", function() {
    saveRecord("rec2S");
});
document.getElementById("rec2D").addEventListener("click", function() {
    delRecord("rec2D");
});

document.getElementById("rec3N").addEventListener("click", function() {
    showNote("rec3N");
});
document.getElementById("rec3S").addEventListener("click", function() {
    saveRecord("rec3S");
});
document.getElementById("rec3D").addEventListener("click", function() {
    delRecord("rec3D");
});

document.getElementById("rec4N").addEventListener("click", function() {
    showNote("rec4N");
});
document.getElementById("rec4S").addEventListener("click", function() {
    saveRecord("rec4S");
});
document.getElementById("rec4D").addEventListener("click", function() {
    delRecord("rec4D");
});

document.getElementById("rec5N").addEventListener("click", function() {
    showNote("rec5N");
});
document.getElementById("rec5S").addEventListener("click", function() {
    saveRecord("rec5S");
});
document.getElementById("rec5D").addEventListener("click", function() {
    delRecord("rec5D");
});
document.getElementById("checkIt").addEventListener("click", whichRep);
document.getElementById("resetRep").addEventListener("click", resetReport);
document.getElementById("exitRec").addEventListener("click", closeResource);
document.getElementById("alertDiv").addEventListener("click", showMsg);
document.getElementById("closeOutput").addEventListener("click", closeOutput);
document.getElementById("closeOutput2").addEventListener("click", closeOutput2);
document.getElementById("coolingBtn").addEventListener("click", (event) => openInfo2(event, 'Cooling'));
document.getElementById("turboBtn").addEventListener("click", (event) => openInfo2(event, 'Turbo'));
document.getElementById("timingBtn").addEventListener("click", (event) => openInfo2(event, 'Timing'));
document.getElementById("steeringBtn").addEventListener("click", (event) => openInfo2(event, 'Steering'));
document.getElementById("suspensionBtn").addEventListener("click", (event) => openInfo2(event, 'Suspension'));
document.getElementById("acBtn").addEventListener("click", (event) => openInfo2(event, 'AC'));
document.getElementById("electricalBtn").addEventListener("click", (event) => openInfo2(event, 'Electrical'));
document.getElementById("fuelBtn").addEventListener("click", (event) => openInfo2(event, 'Fuel'));
document.getElementById("clearDiag").addEventListener("click", () => diagAction('clear'));
document.getElementById("copyDiag").addEventListener("click", () => diagAction('copy'));
document.getElementById("exitRcrce2").addEventListener("click", closeResource2);
document.getElementById("radius5").addEventListener("click", () => radiusSelect(5, "radius5"));
document.getElementById("radius10").addEventListener("click", () => radiusSelect(10, "radius10"));
document.getElementById("radius25").addEventListener("click", () => radiusSelect(25, "radius25"));

document.getElementById("typeAll").addEventListener("click", () => typeSelect("All", "typeAll"));
document.getElementById("typeIndy").addEventListener("click", () => typeSelect("Independant", "typeIndy"));
document.getElementById("typeDom").addEventListener("click", () => typeSelect("Domestic", "typeDom"));
document.getElementById("typeEuro").addEventListener("click", () => typeSelect("European", "typeEuro"));
document.getElementById("typeAsian").addEventListener("click", () => typeSelect("Asian", "typeAsian"));

document.getElementById("quant5").addEventListener("click", () => quantSelect(5, "quant5"));
document.getElementById("quant10").addEventListener("click", () => quantSelect(10, "quant10"));
document.getElementById("quant25").addEventListener("click", () => quantSelect(25, "quant25"));
document.getElementById("quant50").addEventListener("click", () => quantSelect(50, "quant50"));
document.getElementById("quant100").addEventListener("click", () => quantSelect(100, "quant100"));
document.getElementById("quantAll").addEventListener("click", () => quantSelect("All", "quantAll"));

document.getElementById("myScript").addEventListener("click", laborScript);

document.getElementById("yesScript").addEventListener("click", () => negotiateScript('y'));
document.getElementById("noScript").addEventListener("click", () => negotiateScript('n'));

document.getElementById("acceptScript").addEventListener("click", () => negotiateScript('a'));

document.getElementById("instructScript").addEventListener("click", instructScript);
document.getElementById("exitScript").addEventListener("click", () => negotiateScript('e'));
document.getElementById("resetScript").addEventListener("click", () => negotiateScript('r'));
document.getElementById("chyes3").addEventListener("click", () => advanceState("chyes3"));
document.getElementById("chno3").addEventListener("click", () => advanceState("chno3"));

document.getElementById("chyes5").addEventListener("click", () => advanceState("chyes5"));
document.getElementById("chno5").addEventListener("click", () => advanceState("chno5"));

document.getElementById("chyes7").addEventListener("click", () => advanceState("chyes7"));
document.getElementById("chno7").addEventListener("click", () => advanceState("chno7"));

document.getElementById("chyes11").addEventListener("click", () => advanceState("chyes11"));
document.getElementById("chno11").addEventListener("click", () => advanceState("chno11"));

document.getElementById("backState").addEventListener("click", backState);
document.getElementById("cancelState").addEventListener("click", cancelState);
document.getElementById("advanceState").addEventListener("click", advanceState);
document.getElementById("displayItem").addEventListener("click", editDisplay);
document.getElementById("contentItem").addEventListener("click", editContent);
document.getElementById("sizeItem").addEventListener("click", editSize);
document.getElementById("positionItem").addEventListener("click", editPos);
document.getElementById("newButtonItem").addEventListener("click", newButton);
document.getElementById("deleteCustomItem").addEventListener("click", deleteCustom);
document.getElementById("toggleListItem").addEventListener("click", () => BuilderShow('o'));
document.getElementById("masterResetItem").addEventListener("click", MasterReset);

document.getElementById("color").addEventListener("click", () => submitDisp('c'));
document.getElementById("bold").addEventListener("click", () => submitDisp('b'));
document.getElementById("plus").addEventListener("click", () => fontChange('1'));
document.getElementById("minus").addEventListener("click", () => fontChange('-1'));
document.getElementById("dispCancel").addEventListener("click", () => submitDisp('s'));
document.getElementById("dispSubmit").addEventListener("click", () => submitDisp('s'));
document.getElementById("dispDefault").addEventListener("click", () => submitDisp('d'));

document.getElementById("contSubmit").addEventListener("click", submitCont);
document.getElementById("contCancel").addEventListener("click", cancelCont);
document.getElementById("contDefault").addEventListener("click", defaultCont);

document.getElementById("hplus").addEventListener("click", () => heightChange('5'));
document.getElementById("hminus").addEventListener("click", () => heightChange('-5'));
document.getElementById("wplus").addEventListener("click", () => widthChange('5'));
document.getElementById("wminus").addEventListener("click", () => widthChange('-5'));
document.getElementById("sizeSubmit").addEventListener("click", () => sizeSubmit('s'));
document.getElementById("sizeDefault").addEventListener("click", () => sizeSubmit('d'));
document.getElementById("sizeCancel").addEventListener("click", sizeSubmit);

document.getElementById("upBTN").addEventListener("mousedown", () => startUdMove(-5));
document.getElementById("upBTN").addEventListener("mouseup", stopMove);
document.getElementById("downBTN").addEventListener("mousedown", () => startUdMove(5));
document.getElementById("downBTN").addEventListener("mouseup", stopMove);
document.getElementById("leftBTN").addEventListener("mousedown", () => startLrMove(-5));
document.getElementById("leftBTN").addEventListener("mouseup", stopMove);
document.getElementById("rightBTN").addEventListener("mousedown", () => startLrMove(5));
document.getElementById("rightBTN").addEventListener("mouseup", stopMove);

document.getElementById("posSubmit").addEventListener("click", () => posSubmit('s'));
document.getElementById("posDefault").addEventListener("click", () => posSubmit('d'));
document.getElementById("posCancel").addEventListener("click", () => posSubmit('s'));
document.getElementById("infoDone").addEventListener("click", createButton);
document.getElementById("infoCancel").addEventListener("click", buttonCancel);
document.getElementById("helpNext").addEventListener("click", helpNext);
document.getElementById("helpPrev").addEventListener("click", helpPrev);

document.getElementById("coolingMag").addEventListener("click", () => magnify("cooling"));
document.getElementById("turboMag").addEventListener("click", () => magnify("turbo"));
document.getElementById("electricalMag").addEventListener("click", () => magnify("electrical"));
document.getElementById("fuelMag").addEventListener("click", () => magnify("fuel"));
document.getElementById("steeringMag").addEventListener("click", () => magnify("steering"));
document.getElementById("suspensionMag").addEventListener("click", () => magnify("suspension"));
document.getElementById("acMag").addEventListener("click", () => magnify("ac"));
document.getElementById("ac2Mag").addEventListener("click", () => magnify("ac2"));
document.getElementById("timingMag").addEventListener("click", () => magnify("timing"));

});