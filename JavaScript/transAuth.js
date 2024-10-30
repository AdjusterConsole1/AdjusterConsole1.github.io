//COPYRIGHT © AdjusterConsole, LLC 2024 – ALL RIGHTS RESERVED WORLDWIDE
//This website and its content, including but not limited to the 'AC' logo and 'AdjusterConsole', are protected by copyright law.
//You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the materials on this website solely for personal use.
//By accessing or using this website, you agree to the following terms and conditions:
//Restrictions on Use
//You may not, without the express written permission of AdjusterConsole, LLC:
//Copy, download, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or otherwise exploit any part of this website or its content, in whole or in part.
//Use this website or its content for any illegal, unethical, or unauthorized purposes.
//Access or use any proprietary information, documents, or content not owned by AdjusterConsole, LLC in a way that is not expressly authorized.
//This license applies to all versions of the code and content previously released, as well as all future versions.
//Any prior statements made regarding permission to use are hereby revoked.
//Third-Party Trademarks and Proprietary Information
//All trademarks, service marks, proprietary information, and/or documents not owned by AdjusterConsole, LLC that appear on this website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by AdjusterConsole, LLC. Such proprietary information, documents, and content should be treated as confidential and used solely for their intended and expressly authorized purposes.
//Unauthorized use, distribution, or disclosure of such proprietary information is strictly prohibited.
//Disclaimer of Warranties
//This website, its content, and the code provided are offered "as is", without any warranty of any kind, either express or implied.
//The author makes no representations or warranties regarding the accuracy, completeness, or suitability of the website or its content for any particular purpose.
//Limitation of Liability
//To the fullest extent permitted by law, AdjusterConsole, LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use the website or its content, even if advised of the possibility of such damages.
//Indemnification
//You agree to indemnify, defend, and hold harmless AdjusterConsole, LLC from any claims, liabilities, damages, losses, or expenses (including reasonable attorney's fees) arising from your use of the website or its content, or your violation of these terms and conditions.
//Amendments to the Terms
//These terms and conditions may be updated or modified at any time without prior notice. It is your responsibility to review these terms regularly. By continuing to use this website, you agree to any changes.
//Governing Law and Jurisdiction
//These terms and conditions are governed by and construed in accordance with the laws of the United States of America.
//Any disputes arising under or related to these terms and conditions shall be resolved exclusively in the courts of United States of America.
//Contact Information for Licensing Inquiries
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at Info@AdjusterConsole.com.
//By using this website or its content, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
//Failure to comply with these terms may result in legal action.

document.getElementById("transAuthBtn").addEventListener('click', function() {
    if (checkOpen()) {
        return;
    }
    document.getElementById("trans_backing_div").classList.add("show");
});

document.getElementById("transCancelBtn").addEventListener('click', closeTransAuth);


function closeTransAuth() {
    const container = document.getElementById("trans_backing_div");
    const inputs = container.querySelectorAll("input");
    inputs.forEach(input => {
        if (input.type === "text" || input.type === "number") {
            input.value = '';
        } else if (input.type === "radio" || input.type === "checkbox") {
            input.checked = false;
        }
    });
    document.getElementById("trans_backing_div").classList.remove("show");
}

function showtransOop() {
	document.getElementById("").classList.remove("");
}

function hidetransOop() {
	document.getElementById("").classList.add("");
}


document.getElementById("transAuthRoutine").addEventListener('click', function() {
    if (checkOpen()) {
        return;
    }
    finishtransAuth();
});

function finishtransAuth() {
	const rfName = getContact('0');
	let outputString = "Verified internal failure to the transmission using the ";
	
	const sentInsp = document.getElementById("t10a").checked;
	const requestedPictures = document.getElementById("t10b").checked;
	const veriMetal = document.getElementById("t11a").checked;
	const veriDrivability = document.getElementById("t11b").checked;
	const veriLiveData = document.getElementById("t11c").checked;
	const veriNoise = document.getElementById("t11d").checked;
	const veriJudder = document.getElementById("t11e").checked;
	const veriLine = document.getElementById("t11f").checked;
	let videoVeri;
	if (veriDrivability || veriNoise) videoVeri = true;
	
	if (requestedPictures) {
		outputString += "Repair Facility "
		if (sentInsp) {
			outputString += "and Inspection ";
		}
		outputString += "provided photos";
	} else if (sentInsp) {
		outputString += "Inspection provided photos";
	}
	if (videoVeri) {
		outputString += " and videos.\r";
	} else {
		outputString += ".\r";
	}
	
	if (veriMetal) {
        outputString += "There is an excessive amount of contamination in the transmission pan.\r";
    }
    if (veriDrivability) {
       outputString += "We have been provided a video demonstrating the drivability issue\r";
    }
    if (veriLiveData) {
        outputString += "A record of the failure captured on live data was sent in.\r";
    }
    if (veriNoise) {
		outputString += "We have been provided a video verifying a loud, internal transmission noise.\r";
    }
    if (veriJudder) {
        outputString += "Photos of the judder codes have been provided.\r";
    }
    if (veriLine) {
        outputString += "A line pressure test was performed and the system did not meet spec.\r";
    }
	outputString += "The transmission has coverage under the terms of the contract.\rVerified OEM parts using Forte and AM parts using PA.\rUsed in-house sourcing to determine the MCE option.\r";
	
	const transType = document.querySelector('input[name="transType"]:checked');
	const transSource = document.querySelector('input[name="transSource"]:checked');
	const cost = parseInt(document.getElementById("t2").value);
	
	if (transType && transSource && cost) {
		outputString += `The MCE option is a ${transType.value} unit from ${transSource.value} for $${cost.toLocaleString()}\r`;
	}
	
	const transLabor = document.getElementById("t4a").value;
	const diagLabor = document.getElementById("t4b").value;
	const flushLabor = document.getElementById("t4c").value;
	
	outputString += "Verified labor, fluid type, and capacities in ProDemand.\r";
	
	if (transLabor) outputString += `R/R trans: ${transLabor}\r`;
	if (diagLabor) outputString += `Diag: ${diagLabor}\r`;
	if (flushLabor) outputString += `Flush: ${flushLabor}\r`;

	const requestedRecord = document.getElementById("t10c").checked;
	
	if (requestedRecord) {
		outputString += "Requested and reviewed records.\r";
	} else {
		outputString += "No records requested as history will not change claim decision.\r";
	}
	
	const sequence = document.getElementById("t3").value;
	
	outputString += `Contract Holder is in sequence ${sequence}.\rVehicle is not in waiting period.\rNo prior related claims.\rNo recalls, TSBs, or unresolved mileage concerns.\r`;
	
	const hasNonCovered = document.getElementById("t6").checked;
	const hasDenied = document.getElementById("t7").checked;
	
	if (hasNonCovered && hasDenied) {
		outputString += "I have tasked Customer Service to inform Contract Holder of non-covered and denied components.\r";
	} else if (hasNonCovered) {
		outputString += "I have tasked Customer Service to inform Contract Holder of non-covered components.\r";
	} else if (hasDenied) {
		outputString += "I have tasked Customer Service to inform Contract Holder of denied components.\r";
	}
	
	outputString += "After reviewing all relevant documentation, we are moving forward with verified failures.\r";
	
	const hasOOPC = document.getElementById("t8a").checked;
	const hasShipping = document.getElementById("t8b").checked;
	
	const hasOOPCauseParts = document.getElementById("t9a").checked;
	const hasOOPCauseLabor = document.getElementById("t9b").checked;
	let hasOOPCauseBoth;
	if (hasOOPCauseParts && hasOOPCauseLabor) hasOOPCauseBoth = true;
	
	if (hasShipping) {
		outputString += "Need to have Contract Holder approve shipping option";
		if (hasOOPC) {
			outputString += " and OOPC.\r";
		} else {
			outputString += ".\r";
		}
	} else if (hasOOPC) {
		outputString += "Contract Holder will have OOPC related to "
		if (hasOOPCauseBoth) {
			outputString += "parts and labor.\r";
		} else if (hasOOPCauseParts) {
			outputString += "parts.\r";
		} else {
			outputString += "labor.\r";
		}
	}
	if (!hasOOPC) {
		outputString += "Contract Holder has no OOPC besides deductible.\r";
	}
	const outputDisclaimer = document.getElementById("t12").checked;
	if (!hasShipping && outputDisclaimer) {
		outputString += `Giving auth and payment info to RF with following disclaimer:
		
The total payable and authorization number are listed in the preceding screenshot.
Any cost due over the total payable will be the responsibility of the customer and should be discussed with and approved by them prior to any work starting.
Once the work has been completed:
1. Have the customer sign the invoice,
2. Put the authorization number on the invoice,
3. Put the claim number in the subject line of an email and email the invoice to us at payments@americanautoshield.com.`;
	}
	copy(outputString);
	closeTransAuth();
	return;
}
