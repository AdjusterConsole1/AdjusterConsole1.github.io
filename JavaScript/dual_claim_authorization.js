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

document.getElementById('newAuthstarter').addEventListener('click', auth_run);

function check_Ready() {
	const new_partsboxes = ['nauth1', 'nauth2', 'nauth3', 'nauth4', 'nauth5'];
	const new_oop = document.getElementById('nauth9').checked;
	const new_both = document.getElementById('nauth11').checked;
	const new_oop_known = document.getElementById('nauth21').checked;
	const new_oop_amt = document.getElementById('nauth20').value;

	let check_Parts = false;

	new_partsboxes.forEach(id => {
		if (document.getElementById(id).checked) {
			check_Parts = true;
		}
	});
	if (new_oop || new_both) {
		if (!new_oop_known && new_oop_amt === '') {
			alert('Enter OOPC amount or declare unknown.');
			return false;
		}
	}
	if (!check_Parts) {
		if (!confirm('No part options selected. Continue?')) {
			return false;
		}
	}
	return true;
}

function auth_run() {
	if (!checkOpen()) {
		document.getElementById('auth_module').classList.add('show');
		document.getElementById('nauth12').checked = true;
	}
}

function cancel_auth() {
	uncheck_All();
	document.getElementById('nauth12').checked = true;
	document.getElementById('nauth20').value = '';
	document.getElementById('nauth25').value = '$100.00';
	show_oopc_option();
	if (document.getElementById('auth_module').classList.contains('show')) {
		document.getElementById('auth_module').classList.remove('show');
	}
}

function show_oopc_option(x) {
	if (x) {
		document.getElementById('oopc_option').style.opacity = '1';
		document.getElementById('oopc_option2').style.opacity = '1';
	} else {
		document.getElementById('oopc_option').style.opacity = '0';
		document.getElementById('oopc_option2').style.opacity = '0';
	}
}

function auth_initialize() {
	if (!check_Ready()) {
		return;
	}

	const contact_name = getContact('0');
	const contact_email = getContact('1');

	const auth1Note = 'Repair Facility Contact name: ';
	const auth2Note = 'Verified failures using Repair Facility diagnostic';
	const auth3Note = ' and inspection report';
	const auth4Note = ' and Repair Facility supplied photos';
	const auth5Note = 'Contract has coverage for failed components.\r';
	const auth6Note = 'Verified OEM parts using Forte and AM parts using PA.\r';
	const auth7Note = 'Verified labor using Pro Demand.\r';
	const auth8Note = 'Verified payment info with Repair Facility contact at: ';
	const auth9Note = 'Using Repair Facility OEM parts at or under $250.00.\r';
	const auth10Note = 'Using Repair Facility parts at or under sourcing MCE.\r';
	const auth11Note = 'Using sourcing MCE as a credit toward Repair Facility parts.\r';
	const auth12Note = 'Using sourcing MCE as a credit toward Repair Facility parts or shipping in.\r';
	const auth13Note = `Using Repair Facility's parts. The Price was adjusted to a reasonable amount near MCE.\rThis was done considering all factors including claim delays, shipping costs, liability for future failures, time and mileage in coverage, number of prior claims and their cost, etc.\r`;
	const auth14Note = 'No inspection needed as Repair Facility diagnostic matches CH concern.\r';
	const auth15Note = 'Sent inspection to verify failures.\rReviewed report and inspection photos.\rInspection review note is completed.\r';
	const auth16Note = 'Requested and reviewed photos from Repair Facility.\rPhoto review note is completed.\r';
	const auth17Note = 'No records requested as history will not change claim decision.\r';
	const auth17aNote = 'No prior related claims.\r';
	const auth17bNote = 'No TSBs or recalls associated.\r';
	const auth17cNote = 'No mileage or VIN concerns.\r';
	const auth18Note = 'Requested and reviewed records and statement.\rRecord review note is completed.\r';
	const auth19Note = 'After reviewing all relevant documentation, we are moving forward with verified failures.\r';
	const auth20Note = 'Need to review OOPC of $';
	const auth21Note = ' with Contract Holder.\r';
	const auth22Note = ' and shipping option with Contract Holder.\r';
	const auth23Note = 'OOPC is due to differences in ';
	const auth24Note = 'Need to review shipping option with Contract Holder.\r';
	const auth25Note = 'Have not given authorization info to the Repair Facility at this time.\r';
	const auth26Note = 'Contract Holder has no OOPC besides deductible.\r';
	const auth27Note = 'Gave authorization info and payment instructions to ';
	const auth28Note = 'Will inform Contract Holder of non-covered components.\r';
	const auth29Note = 'There were denied items on this claim.\rReview denial note for more details.\r';
	const auth30Note = `Haven't determined OOPC at this time.\rWill review with RF prior to calling Contract Holder.\r`;

	let output = '';

	output += auth1Note + contact_name + '\r' + auth2Note;

	const inspection = document.getElementById('nauth6').checked;
	const photos = document.getElementById('nauth7').checked;
	const records = document.getElementById('nauth8').checked;
	const stop17b = document.getElementById('nauth15').checked;
	const stop17a = document.getElementById('nauth16').checked;
	const stop17c = document.getElementById('nauth16a').checked;

	let needed = false;
	if (inspection || photos || records) needed = true;

	output += inspection ? auth3Note : '';
	output += photos ? auth4Note : '';
	output += '.\r' + auth5Note + auth6Note + auth7Note + auth8Note + contact_email + '.\r';

	const parts1 = document.getElementById('nauth1').checked;
	const parts2 = document.getElementById('nauth2').checked;
	const parts3 = document.getElementById('nauth3').checked;
	const parts4 = document.getElementById('nauth4').checked;
	const parts5 = document.getElementById('nauth5').checked;

	output += parts1 ? auth9Note : '';
	output += parts2 ? auth10Note : '';
	output += parts3 ? auth11Note : '';
	output += parts4 ? auth12Note : '';
	output += parts5 ? auth13Note : '';

	let auth17zNote = 'Vehicle is not in waiting period.\rLack of maintenance will not be a provable exclusion.\r';
	if (!stop17a) auth17zNote += auth17aNote;
	if (!stop17b) auth17zNote += auth17bNote;
	if (!stop17c) auth17zNote += auth17cNote;

	if (needed) {
		output += inspection ? auth15Note : auth14Note;
		output += photos ? auth16Note : '';
		output += records ? auth18Note : auth17Note;
		output += auth17zNote;
		output += auth19Note;
	} else {
		output += auth14Note + auth17Note + auth17zNote;
	}

	const deductibleValue = document.getElementById('nauth25').value;
	if (deductibleValue === '$0.00') {
		output += 'The Contract Holder has no deductible.\r';
	} else {
		output += `The Contract Holder has a deductible of ${deductibleValue}.\r`;
	}

	const oopc = document.getElementById('nauth9').checked;
	const shipping = document.getElementById('nauth10').checked;
	const both = document.getElementById('nauth11').checked;
	const none = document.getElementById('nauth12').checked;
	const oopcamount = parseInt(document.getElementById('nauth20').value);
	const noncovered = document.getElementById('nauth13').checked;
	const denied = document.getElementById('nauth14').checked;

	if (oopc || both) {
		const partoop = document.getElementById('nauth17').checked;
		const laboroop = document.getElementById('nauth18').checked;
		const bothoop = document.getElementById('nauth19').checked;
		const amountUnknown = document.getElementById('nauth21').checked;

		if (amountUnknown) {
			output += auth30Note;
			output += shipping ? auth24Note : '';
		} else {
			output += oopcamount ? auth20Note + oopcamount.toFixed(2) : '';
			output += shipping ? auth22Note : auth21Note;
			output += auth23Note;
			if (bothoop) output += 'parts and labor ';
			if (partoop) output += 'parts ';
			if (laboroop) output += 'labor ';
			output += 'and does NOT include the deductible.\r';
		}
		output += auth25Note;
	}

	if (!oopc && shipping) output += auth24Note + auth26Note + auth25Note;

	const auth27NoteA = auth26Note + auth27Note + contact_name + '.\r';
	output += none ? auth27NoteA : '';
	output += noncovered ? auth28Note : '';
	output += denied ? auth29Note : '';

	copy(output);
	cancel_auth();
}
