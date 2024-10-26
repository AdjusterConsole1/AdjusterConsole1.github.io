//COPYRIGHT © Jesse Williams 2024 – ALL RIGHTS RESERVED WORLDWIDE
//This website and its content, including but not limited to the 'A' logo and 'AdjusterConsole', are protected by copyright law.
//You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the materials on this website solely for personal use.
//By accessing or using this website, you agree to the following terms and conditions:
//Restrictions on Use
//You may not, without the express written permission of the author, Jesse Williams:
//Copy, download, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or otherwise exploit any part of this website or its content, in whole or in part.
//Use this website or its content for any illegal, unethical, or unauthorized purposes.
//Access or use any proprietary information, documents, or content not owned by Jesse Williams in a way that is not expressly authorized.
//This license applies to all versions of the code and content previously released, as well as all future versions.
//Any prior statements made regarding permission to use are hereby revoked.
//Third-Party Trademarks and Proprietary Information
//All trademarks, service marks, proprietary information, and/or documents not owned by Jesse Williams that appear on this website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Jesse Williams. Such proprietary information, documents, and content should be treated as confidential and used solely for their intended and expressly authorized purposes.
//Unauthorized use, distribution, or disclosure of such proprietary information is strictly prohibited.
//Disclaimer of Warranties
//This website, its content, and the code provided are offered "as is", without any warranty of any kind, either express or implied.
//The author makes no representations or warranties regarding the accuracy, completeness, or suitability of the website or its content for any particular purpose.
//Limitation of Liability
//To the fullest extent permitted by law, Jesse Williams shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use the website or its content, even if advised of the possibility of such damages.IndemnificationYou agree to indemnify, defend, and hold harmless Jesse Williams from any claims, liabilities, damages, losses, or expenses (including reasonable attorney's fees) arising from your use of the website or its content, or your violation of these terms and conditions.Amendments to the TermsThese terms and conditions may be updated or modified at any time without prior notice. It is your responsibility to review these terms regularly. By continuing to use this website, you agree to any changes.
//Governing Law and Jurisdiction
//These terms and conditions are governed by and construed in accordance with the laws of the United States of America.
//Any disputes arising under or related to these terms and conditions shall be resolved exclusively in the courts of United States of America.
//Contact Information for Licensing Inquiries
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.
//By using this website or its content, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
//Failure to comply with these terms may result in legal action.

function newButton() {
	document.getElementById("infoDiv").style.display = "inline-block";
}

function buttonCancel() {
	document.getElementById('Solo').checked = false;
	document.getElementById('Clip').checked = false;
	document.getElementById('BtnDisplay').value = '';
	document.getElementById('BtnContent').value = '';
	document.getElementById("infoDiv").style.display = "none";
}

function createButton() {
	const selectedButtonType = document.querySelector('input[name="buttonType"]:checked');
	if (!selectedButtonType) {
		alert('Please select a button type.');
		return;
	}
	const buttonType = selectedButtonType.id;

	const btnDisplay = sanitizeInput(document.getElementById("BtnDisplay").value.trim());
	const btnContent = sanitizeInput(document.getElementById("BtnContent").value.trim());

	if (btnDisplay === '' || btnContent === '') {
		alert('Both "Button Display" and "Note Content" fields must be filled out.');
		return; // Exit the function if any field is blank
	}

	const timestamp = new Date().getTime().toString();
	const buttonID = timestamp.slice(-5) + 'cust';

	let customIDs = JSON.parse(localStorage.getItem('customIDs')) || [];
	customIDs.push(buttonID);
	localStorage.setItem('customIDs', JSON.stringify(customIDs));

	localStorage.setItem(buttonID + 'Type', buttonType);
	localStorage.setItem(buttonID + 'SHOW', 'inline-block');
	localStorage.setItem(buttonID + 'Display', btnDisplay);
	localStorage.setItem(buttonID + 'EDIT', btnContent);
	localStorage.setItem(buttonID + 'Height', '60px');
	localStorage.setItem(buttonID + 'Width', '150px');
	localStorage.setItem(buttonID + 'top', '200px');
	localStorage.setItem(buttonID + 'left', '20px');

	createButtonElement(buttonID);
	buttonCancel();
}


function createButtonElement(buttonID) {

	const button = document.createElement('button');
	button.id = buttonID;
	button.style.height = localStorage.getItem(buttonID + 'Height');
	button.style.width = localStorage.getItem(buttonID + 'Width');
	button.innerHTML = localStorage.getItem(buttonID + 'Display');
	button.style.top = localStorage.getItem(buttonID + 'top');
	button.style.left = localStorage.getItem(buttonID + 'left');
	button.style.display = "inline-block";
	button.classList.add('D', 'R', 'P', 'C', 'X');
	button.setAttribute('oncontextmenu', 'customMenu(this.id, event)');
	button.setAttribute('onclick', 'conjunctionJunction(this.id)');
	document.body.appendChild(button);
}

function conjunctionJunction(buttonID) {
	var funct = localStorage.getItem(buttonID + 'Type');
	var note = localStorage.getItem(buttonID + "EDIT");
	if (note == null) {
		alert("No note currently defined");
		return;
	}
	document.getElementById("EDITarea").value = note;
	switch (funct) {
		case "Clip":
			const note2 = note + '\r';
			copy(note2);
			break;
		case "Solo":
			document.getElementById("textarea2").value += note;
			document.getElementById("textarea2").value += "\r\r";
			break;
	}
}
