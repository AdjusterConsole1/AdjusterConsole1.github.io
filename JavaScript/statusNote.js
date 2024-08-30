//COPYRIGHT © Jesse Williams 2024 – ALL RIGHTS RESERVED WORLDWIDE
//This website and it's content including, but not limited to, the 'A' logo and 'AdjusterConsole' are protected by copyright law.
//You are granted a limited license to access and use the materials on this website for personal use only.
//This code is provided under the following Terms and Conditions:
//
//You may not copy, download, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or otherwise exploit any part of this website or its content, in whole or in part, without the express, written permission of the author, Jesse Williams.
//You are not allowed to use this website or code for any illegal or unethical purpose.
//This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
//All trademarks, service marks, proprietary information, and/or documents not owned by Jesse Williams that appear on this website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Jesse Williams.
//All proprietary information, documents, and content not owned by Jesse Williams but accessible through this website should be treated as confidential and used solely for their intended and expressly authorized purposes. Unauthorized use, distribution, or disclosure of such proprietary information is strictly prohibited.
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.
//By using this code, you agree to abide by these terms and conditions.
//Failure to comply with these terms may result in legal action.

function statNOTE() {
  const statNote = document.getElementById("statNote");
  const statNoteinner = document.getElementById("statNoteinner");
  if (statNote.style.display == "inline-block" || checkOpen()) {
    statNote.style.display = "none";
    return;
  }
  statNote.style.display = "inline-block";
}

function cancelStat() {
  uncheck_All();
  document.getElementById("optionalNote").value = "";
  const statNote = document.getElementById("statNote");
  const statNoteinner = document.getElementById("statNoteinner");
  statNote.style.display = "none";
}

function highlander(elemId) {
  document.getElementById(elemId).checked = false;
}

function submitStat() {
  const checkboxes = ['stat1', 'stat2', 'stat3', 'stat4', 'stat5', 'stat6', 'stat7', 'stat8', 'stat9'];
  const noteStrings = {
    'stat1note': 'We are waiting on the inspection to verify failure.\n',
    'stat2note': 'We are waiting on records from the Contract Holder to determine Pre-X.\n',
    'stat3note': 'We are waiting for the Contract Holders statement as it may influence the claim outcome.\n',
    'stat4note': 'verify failure.',
    'stat5note': 'correct VIN or mileage issue.',
    'stat6note': 'The Repair facility has been notified.\n',
    'stat7note': 'The Contract Holder has been notified.\n',
    'stat8note': 'I was unable to reach the Contract Holder but I left a VM and tasked callbacks.\n',
    'stat9note': 'Parts and labor are keyed in and verified.\n',
    'stat4and5CommonNote': 'We are waiting on photos from the Repair Facility to '
  };
  let output = '';
  checkboxes.slice(0, 3).forEach(id => {
    if (document.getElementById(id).checked) {
      output += noteStrings[id + 'note'];
    }
  });
  const stat4Checked = document.getElementById('stat4').checked;
  const stat5Checked = document.getElementById('stat5').checked;
  const stat9Checked = document.getElementById('stat9').checked;
  if (stat4Checked || stat5Checked) {
    output += noteStrings['stat4and5CommonNote'];
    if (stat4Checked && stat5Checked) {
      output += noteStrings['stat4note'] + ' and ' + noteStrings['stat5note'] + '\n';
    } else if (stat4Checked) {
      output += noteStrings['stat4note'] + '\n';
    } else if (stat5Checked) {
      output += noteStrings['stat5note'] + '\n';
    }
  }
  checkboxes.slice(6).forEach(id => {
    if (document.getElementById(id).checked) {
      output += noteStrings[id + 'note'];
    }
  });
  const optionalText = document.getElementById('optionalNote').value.trim();
  if (optionalText !== '') {
    output += optionalText + '\n';
  }
  copy(output);
  cancelStat();
}
