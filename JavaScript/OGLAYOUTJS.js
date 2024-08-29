//Restricted Use License
//
//This code is provided under the following terms and conditions:
//
//1. You are not allowed to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code in any form, modified or unmodified, without express written permission from the author.
//
//2. You are not allowed to use this code for any illegal or unethical purpose.
//
//3. This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//
//4. This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
//By using this code, you agree to abide by these terms and conditions. Failure to comply with these terms may result in legal action.
//
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at adjusterconsole@gmail.com.

function setVer() {
  const buttons = document.querySelectorAll('button');
  const intakeboxes = document.getElementsByClassName('intakeboxes');

  const currentVer = localStorage.getItem('currentVer');
  if (currentVer === '1') {
    localStorage.setItem('currentVer', '2');
    document.getElementById('swapper').innerText = 'Neumorphic';
    document.getElementById('textarea2').classList.add('origText');
    document.getElementById('textarea1').classList.add('origText');
    document.getElementById('sizeEdit').classList.add('orig');
    document.getElementById('disEdit').classList.add('orig');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('orig');
    }
    for(let i = 0; i < intakeboxes.length; i++) {
      intakeboxes[i].classList.add('origText');
    }
    return;
  } else if (currentVer == '2') {
    localStorage.setItem('currentVer', '1');
    document.getElementById('swapper').innerText = 'Original';
    document.getElementById('textarea2').classList.remove('origText');
    document.getElementById('textarea1').classList.remove('origText');
    document.getElementById('sizeEdit').classList.remove('orig');
    document.getElementById('disEdit').classList.remove('orig');
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('orig');
    }
    for(let i = 0; i < intakeboxes.length; i++) {
      intakeboxes[i].classList.remove('origText');
    }
    return;
  } else {
    localStorage.setItem('currentVer', '1');
    setVer();
  }
}

function removeBlankLines(text) { 
   return text.replace(/^\s*$/gm, ''); 
}

function checkOpen() {
  if (!document.getElementById("fileUploaderDiv").classList.contains('slideFilein')) return true;
  const elements = [
    document.getElementById("TPDiv"),
    document.getElementById("statNote"),
    document.getElementById("Snippings"),
    document.getElementById("RFIBDH"),
    document.getElementById("RFIBND"),
    document.getElementById("TGAFOBTN"),
    document.getElementById("TGAFOABTN"),
    document.getElementById("TGAFSABTN"),
    document.getElementById("TGAFOSABTN"),
    document.getElementById("auth_module"),
    document.getElementById("resrcDiv"),
  ];
  return elements.some(el => el.style.display === "inline-block");
}

function getContact(whichInfo) {
  const whichOne = parseInt(whichInfo);
  const textarea = document.getElementById('textarea1');
  const lines = textarea.value.split('\n');
  const start = lines.slice(0, whichOne).reduce((acc, curr) => acc + curr.length + 1, 0);
  const end = start + lines[whichOne].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  const tempStr = textarea.value.substring(start, end).trim();
  return tempStr.slice(9).trim();
}

function MENU() {
  const theMenu = document.getElementById("LOCK1");
  const BtnBuilder = document.getElementById("BtnBuilder");
  const appearance = document.getElementById("appearance");
  const ptcon = document.getElementById("ptcon");
  const menuOpen = localStorage.getItem("menuOpen");

  if (menuOpen === 'false') {
    theMenu.innerText = "\u2666 Close \u2666";
    appearance.style.top = "45px";
    appearance.style.opacity = '1';
    BtnBuilder.style.top = "70px";
    BtnBuilder.style.opacity = '1';
    ptcon.style.top = "95px";
    ptcon.style.opacity = '1';
    localStorage.setItem("menuOpen", "true");
    return;
  } else if (menuOpen === 'true') {
    BtnBuilder.style.top = "20px";
    BtnBuilder.style.opacity = '0';
    appearance.style.top = "20px";
    appearance.style.opacity = '0';
    ptcon.style.top = "20px";
    ptcon.style.opacity = '0';
    theMenu.innerText = "\u2666 Settings \u2666";
    localStorage.setItem("menuOpen", "false");
    return;
  }
  localStorage.setItem("menuOpen", "false");
  MENU();
}

function uncheck_All() {
  const butswapBtns1 = document.getElementsByClassName('butswap');
  const butswapBtns = Array.from(butswapBtns1);
  if(butswapBtns) {
    for (i = 0; i < butswapBtns.length; i++) {
      butswapBtns[i].classList.remove('butswap');
      butswapBtns[i].innerHTML = 'Add';
    }
  }
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
    radio.checked = false;
  });

  const trans_ansNum = document.getElementsByName("ftrans_ansNum");
  trans_ansNum.forEach(function(inputNumber) {
    inputNumber.value = '';
  });
  const authMode = localStorage.getItem('authMode');
  if (authMode === 'newAuth') { 
    document.getElementById('newauthSelect').checked = true;
  } else {
    document.getElementById('newauthSelect').checked = false;
  }
}

function EVACRECH(btnID) {
  const EvacRechrge = "Evac and Recharge\rRF Asking:   \rPD Approved:   1.4\r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
  if (Check == null) {
    textarea.value += EvacRechrge;
    document.getElementById("EDITarea").value = EvacRechrge;
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function ALIGNMENT(btnID) {
  const Alignment = "Alignment\rRF Asking:   \rPD Approved:   \r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
  if (Check == null) {
   textarea.value += Alignment;
   document.getElementById("EDITarea").value = Alignment;
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function DIAG() {
  const textarea = document.getElementById("textarea2");
  textarea.value += "Diag\rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function LABOR(boxNum) {
  const textarea = document.getElementById("textarea2");
  textarea.value += "R/R \rRF Asking:   \rPD Approved:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function BULK(btnID) {
  const Check = localStorage.getItem(btnID + "EDIT");
  const textarea = document.getElementById("textarea2");
  if (Check == null) {
    textarea.value += "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
    document.getElementById("EDITarea").value = "BULK:   \rRF Price:   \rFPS Allows:   \r\r";
  } else {
    textarea.value += Check;
    document.getElementById("EDITarea").value = Check;
  }
  textarea.scrollTop = textarea.scrollHeight;
}

function OEMOVER() {
  let textareaVal = document.getElementById("textarea2").value;
  const textarea = document.getElementById("textarea2");
  textareaVal = textareaVal.slice(0,-1);
  textarea.value = textareaVal;
  textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWAM() {
  const textarea = document.getElementById("textarea2");
  textarea.value += "RF AM PN:   \rRF Price:   \rPA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function NEWOEM() {
  const textarea = document.getElementById("textarea2");
  textarea.value += "Verified OEM PN:   \rVerified MSRP:   \rRF Price:   \r\r";
  textarea.scrollTop = textarea.scrollHeight;
}

function REVIEW(btnID) {
  const Rev = "Reviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = Rev;
    document.getElementById("EDITarea").value = Rev;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
  const mode = localStorage.getItem("mode");
  if(checkOpen()) {
    ShowTemps();
  }
}

function inspREVIEW() {
  const Rev = "Inspection Review\rReason for inspection:\rLabor rate:\rMileage:\rFluid condition:\rModifications/Collision/Commercial:\rInspector findings/photo review:";
  copy(Rev);
}

function carfaxREVIEW() {
  const Rev = "CARFAX Report Review:\r1.) What I was looking for:\r2.) Red flags or Mileage Discrepancy:\r3.) Does it relate to the claim:\r4.) What is needed now:";
  copy(Rev);
}

function RECREQ(btnID) {
  const RecReq = "Requesting Contract Holder statement regarding issues.\rRequesting past 12 months of service records from the Contract Holder.\rSent records request using SRS action button.\rWill call the Contract Holder to inform.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = RecReq;
    document.getElementById("EDITarea").value = RecReq;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function NOANSREC(btnID) {
  const NoAns = "Called Contract Holder to request records.\rCalled Contract Holder to request statement.\rNo answer – left voicemail.\rTasked to CS callbacks.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = NoAns;
    document.getElementById("EDITarea").value = NoAns;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function INSPTEMP(btnID) {
  let InsTemp = "Technician states:\r\rPart failure\rPart failure\rPart failure\r\rPlease have the technician demonstrate the failures listed above.\r\rNotate if rust, corrosion, or any outside influence is the cause of failure.\rNotate available fluid levels and conditions.\rFor electrical components, have technician verify power and ground.\r\rPlease take pictures of the following:\r";
  InsTemp += "All failures.\rAll 4 sides of vehicle, vin, and odometer.\rInspection stickers and oil change stickers.\rWheels, tires, and rotors.\rAny dash light that are on, current or history DTCs, and any freeze frame data available.\rAny signs of commercial use or modifications.\rAny rust, corrosion, or collision damage.\rAny other information relevant to the failures.\r\rIf the failure is related to drivability or verification is noise based, please provide video verification.\r\rPlease contact the Repair Facility 1-2 hours before arrival.\r\rContact Name:\rEmail:\rDirect Line:";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = InsTemp;
    document.getElementById("EDITarea").value = InsTemp;
  } else {
    document.getElementById("textarea5").value = Check;
    document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
  if(checkOpen()) {
    ShowTemps();
  }
}

function PICREQ(btnID) {
  const PicReq = "Requesting photos from Repair Facility to verify failure and avoid inspection delay.\rInforming Repair Facility to include pics of all 4 corners of the vehicle, VIN plate, odometer, and pictures of the failure.\rSent request via SRS action button.";
  const Check = localStorage.getItem(btnID + "EDIT");
  if (Check == null) {
    document.getElementById("textarea5").value = PicReq;
   document.getElementById("EDITarea").value = PicReq;
  } else {
    document.getElementById("textarea5").value = Check;
   document.getElementById("EDITarea").value = Check;
  }
  const outputString = document.getElementById("textarea5").value;
  copy(outputString);
}

function FLUIDLEAK() {
  const fluids = document.getElementById("div6");
  if (fluids.style.display != "none") {
    fluids.style.display = "none";
    document.getElementById("fluid").textContent = "$";
  } else {
    fluids.style.display = "inline-block";
    document.getElementById("fluid").textContent = "X";
  }
}

function CopyIntakeForm(index) {
  const textarea = document.getElementById('textarea1');
  const lines = textarea.value.split('\n');
  const lineIndex = parseInt(index);
  const start = lines.slice(0, lineIndex).reduce((acc, curr) => acc + curr.length + 1, 0);
  const end = start + lines[lineIndex].length;
  textarea.focus();
  textarea.setSelectionRange(start, end);
  const tempStr = window.getSelection();
  document.getElementById("textarea4").value = tempStr;
  const fullString = document.getElementById("textarea4").value;
  const contactString = fullString.slice(9);
  document.getElementById("textarea4").value = contactString.trim();
  const outputString = document.getElementById("textarea4").value;
  copy(outputString);
}

function CopyForm(index){
  const textarea = document.getElementById(index);
  textarea.select();
  document.execCommand("copy");
}

function FormToTA() {
  const partname = document.getElementById('partname1').value;
  const partnum = document.getElementById('partnum').value;
  const rfprice = document.getElementById('rfprice').value;
  const msrp = document.getElementById('msrp').value;
  const textarea = document.getElementById("textarea2");
  if (msrp) {
    const overCheck = parseInt(msrp);
    textarea.value += "Part: ";
    textarea.value += partname + "\r";
    textarea.value += "Verified OEM PN: ";
    textarea.value += partnum + "\r";
    textarea.value += "Verified MSRP: ";
    textarea.value += msrp + "\r";
    textarea.value += "RF Price: ";
    textarea.value += rfprice + "\r";
    if (overCheck > 250) {
      textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
      textarea.scrollTop = textarea.scrollHeight;
      } else {
        textarea.value += "\r";
        textarea.scrollTop = textarea.scrollHeight;
      }
  } else {
    textarea.value += "Part: ";
    textarea.value += partname + "\r";
    textarea.value += "RF AM PN:  ";
    textarea.value += partnum + "\r";
    textarea.value += "RF Price: ";
    textarea.value += rfprice + "\r";
    textarea.value += "PA PN:   \rPA List:   \rPA Cost:   \rCore: NA\r\r";
    textarea.scrollTop = textarea.scrollHeight;
  }
}

function AnotherOne() {
  const newpartcountStr = localStorage.getItem("newpartcount");
  let newpartcount = parseInt(newpartcountStr);
  if (newpartcount < 7){
    document.getElementById("partname" + newpartcount).style.display = "inline-block";
    newpartcount++;
    localStorage.setItem("newpartcount",newpartcount);
  }
}

function NextPart() {
  const newpartcountStr = localStorage.getItem("newpartcount");
  let newpartcount = parseInt(newpartcountStr);
  document.getElementById('partnum').value = "";
  document.getElementById('rfprice').value = "";
  document.getElementById('msrp').value = "";
  partMover = newpartcount - 1;
  for (let i = 1; i < partMover; i++) {
    let d = i + 1;
    let upper = document.getElementById("partname" + d);
    let lower = document.getElementById("partname" + i);
    lower.value = upper.value;
  }
  if (newpartcount > 2) {
    newpartcount = newpartcount - 1;
    document.getElementById("partname" + partMover).value = "";
    document.getElementById("partname" + partMover).style.display = "none";
    localStorage.setItem("newpartcount",newpartcount);
  }
}

function SENDLABOR1() {
  const Labor = "RF Asking:   \rPD Approved:   \r\r";
  const partname = document.getElementById('partname1').value;
  const textarea = document.getElementById("textarea2");
  textarea.value += "R/R ";
  textarea.value += partname + "\r";
  textarea.value += Labor;
  textarea.scrollTop = textarea.scrollHeight;
}

function SENDDIAG1() {
  const Labor = "RF Asking:   \rPD Approved:   \r\r";
  const partname = document.getElementById('partname1').value;
  const textarea = document.getElementById("textarea2");
  textarea.value += "Diag on ";
  textarea.value += partname + "\r";
  textarea.value += Labor;
  textarea.scrollTop = textarea.scrollHeight;
}

function ClearIntake() {
  document.getElementById("partname1").value = "";
  document.getElementById("partnum").value = "";
  document.getElementById("rfprice").value = "";
  document.getElementById("msrp").value = "";
}

function COPYNOTE() {
  const outputString = document.getElementById("textarea2").value;
  copy(outputString);
}

function toggleConductor(boxId) {
  const showNode = document.querySelectorAll('[class$="dispStat"]');
  const showList = Array.from(showNode);
  const checkBox = document.getElementById(boxId);
  if (boxId == "s9") {
    for (i = 0; i < showList.length; i++) {
      const affectedElem = showList[i];
      const affectedId = showList[i].id;
      if (checkBox.checked == true) {
        affectedElem.style.display = "inline-block";
        localStorage.setItem(affectedId + "SHOW", "inline-block");
        localStorage.setItem("allBTN", "inline-block");
      } else {
        affectedElem.style.display = "none";
        localStorage.setItem(affectedId + "SHOW", "none");
        localStorage.setItem("allBTN", "none");
      }
    }
  return;
  } else {
    const displayElemNode = document.getElementsByClassName(boxId + "dispStat");
    const affectedElem = displayElemNode[0];
    const affectedId = displayElemNode[0].id;
    if (checkBox.checked == true){
      affectedElem.style.display = "inline-block";
      localStorage.setItem(affectedId + "SHOW", "inline-block");
    } else {
      affectedElem.style.display = "none";
      localStorage.setItem(affectedId + "SHOW", "none");
    }
  }
}

window.onload = function PutItBack() {
  var splashImage = document.getElementById('splashImage');

  setTimeout(function() {
    splashImage.classList.add("exit-effect");
  }, 1000);

  splashImage.addEventListener('transitionend', function() {
    document.body.removeChild(splashImage);
  });

  const authMode = localStorage.getItem('authMode');
  if (authMode === 'newAuth') {
    document.getElementById('newauthSelect').checked = true;
  } else if (authMode === 'oldAuth' || authMode == null) {
    document.getElementById('newauthSelect').checked = false;
  }
  localStorage.setItem("viewNum", "normal");
  const selected = "holder1";
  const selectedElem = document.getElementById(selected);
  const didItRun = localStorage.getItem('Im The Boss');
  localStorage.setItem("toldem", "false");
  localStorage.setItem("menuOpen", "false");
  localStorage.setItem("newpartcount","2");
  localStorage.setItem("menuState", 0);
  localStorage.setItem("colorState", 0);
  if (didItRun == null) {
    localStorage.setItem("Im The Boss", "It's Been Done");
    localStorage.setItem(selected + "STCB", '0');
    localStorage.setItem(selected + "PRIN", '0');
    localStorage.setItem(selected + "LINK", '0');
    localStorage.setItem(selected + "ENDN", '0');
    localStorage.setItem(selected + "SOLO", '0');
    localStorage.setItem(selected + "Count", '0');
  }
  const but = localStorage.getItem(selected + "Count");
  const buttonCount = parseInt(but);
  for (i = 0; i < buttonCount; i++) {
    const count = i.toString();
    const currID = "cust" + count;
    const newID = localStorage.getItem(currID);
    const currdivID = "custBtn" + count;
    const buttonX = document.getElementById(currID);
    buttonX.id = newID;
  }
  for (i = 0; i < 10; i++) {
    const count = i.toString();
    const curdivID = "custBtn" + count;
    const thsDisp = localStorage.getItem(curdivID + "SHOW");
    if (thsDisp == null) {
      localStorage.setItem(curdivID + "SHOW", "none");
    }
  }
  const idNode = document.querySelectorAll('*[id]');
  const idList =  Array.from(idNode);
  for (i = 0; i < idList.length; i++) {
    const selectedID = idList[i].id;
    const selectedElem = document.getElementById(selectedID);
    if (localStorage.getItem(selectedID + "Font") != null) {
      const fSize = localStorage.getItem(selectedID + "Font");
      selectedElem.style.fontSize = fSize;
    }
    if (localStorage.getItem(selectedID + "top") != null) {
      const top = localStorage.getItem(selectedID + "top");
      const left = localStorage.getItem(selectedID + "left");
      selectedElem.style.left = left;
      selectedElem.style.top = top;
    }
    if (localStorage.getItem(selectedID + "Width") != null) {
      const setWidth = localStorage.getItem(selectedID + "Width");
      const setHeight = localStorage.getItem(selectedID + "Height");
      selectedElem.style.width = setWidth;
      selectedElem.style.height = setHeight;
    }
    if (localStorage.getItem(selectedID + "Display") != null) {
      const setTEXT = localStorage.getItem(selectedID + "Display");
      selectedElem.innerHTML = setTEXT;
    }
  }
  const showNode = document.querySelectorAll('[class$="dispStat"]');
  const showList = Array.from(showNode);
  for (i = 0; i < showList.length; i++) {
    const selectedID = showList[i].id;
    const selectedElem = document.getElementById(selectedID);
    const elemClass = selectedElem.className;
    const boxId = elemClass.substr(-10, 2);
    const checkBox = document.getElementById(boxId);
    const currDisp = selectedElem.style.display;
    const setDisp = localStorage.getItem(selectedID + "SHOW");
    if (setDisp == null || setDisp == "inline-block") {
      checkBox.checked = true;
      selectedElem.style.display = "inline-block";
    } else {
      checkBox.checked = false;
      selectedElem.style.display = "none";
    }
  }
  const mainDisp = localStorage.getItem("allBTN");
  const checkbox = document.getElementById("s9");
  if (mainDisp == "inline-block" || mainDisp == null) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  localStorage.setItem("pageNum", "0");
  resetColors();
  trackerBlank();
  localStorage.removeItem('Diag');
  const Rev = "Reviewed inspection photos and report.\rReviewed photos sent by repair facility.\rVerified vin.\rVerified mileage.\rNo indication of commercial use.\rNo indication of modification.\r\r";
  localStorage.setItem("Rev", Rev);
  localStorage.setItem("mode", '2');
  localStorage.setItem('currentVer', '1');
  localStorage.setItem("countLefts", '0');
  modePT();
}

function trackerBlank() {
  const recordArr = [];
  localStorage.setItem("recordArr", JSON.stringify(recordArr));
  const objectArr = [];
  localStorage.setItem("objectArr", JSON.stringify(objectArr));
  localStorage.setItem("addLineCount", "0");
  localStorage.setItem("savedRecs", "0");
  localStorage.removeItem("serRcrdspot");
  localStorage.removeItem("incRcrdspot");
  localStorage.removeItem("rec0Rcrdspot");
  localStorage.removeItem("rec1Rcrdspot");
  localStorage.removeItem("rec2Rcrdspot");
  localStorage.removeItem("rec3Rcrdspot");
  localStorage.removeItem("rec4Rcrdspot");
  localStorage.removeItem("rec5Rcrdspot");
  localStorage.removeItem("InceptionMiles");
  localStorage.removeItem("InceptionDate");
  localStorage.removeItem("sermileage");
  localStorage.removeItem("serdate");
  localStorage.removeItem("rec0mileage");
  localStorage.removeItem("rec0date");
  localStorage.setItem("noteOpen", "false");
}

function openNav() {
  if (checkOpen()) { return; }
  document.getElementById("mySidenav").classList.add("open_nav");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open_nav");
}

function closeUpdate() {
  document.getElementById("updated").style.display = "none";
  localStorage.setItem("updated", "yes");
}

function ringDeny() {
  let text = "After review of borescope provided photos, there are obvious signs of excessive carbon.\rThis carbon is a biproduct of a fuel/spark related issue.\r";
  text += "Per the leak-down test performed, we have air bypass from piston rings (air escaping to crank case).\rWe know the piston rings are stuck, and have made marks/scoring on the cylinder walls.\r";
  text += "The stuck piston rings can be attributed to the carbon.\rCarbon is an exclusion on this policy.\rThe engine portion of this claim will be denied.\r";
  text += "The following items and conditions are not covered by this CONTRACT:\r\r";
  text += "17. BREAKDOWNS resulting from engine sludge, carbon, pre-ignition, detonation, varnish, corrosion, foreign objects, dirt, dust, liquid, cracked rubber and/or neoprene parts, dry-rot, road chemicals, lack of proper fluids or use of additives or fuel grades not recommended by the manufacturer.";
  copy(text);
}