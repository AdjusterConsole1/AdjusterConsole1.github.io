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

document.addEventListener('keyup', function (e) {
	if (e.key === 'Escape') {
		whiteRabbit();
	}
	if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'F') {
		saintMullet();
	}
	if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'K') {
		forteFun();
	}
});

function autoEnable() {
	document.getElementById("fileUploaderDiv").classList.toggle('slideFilein');
	document.getElementById("fileUploaderDiv").classList.toggle('slideFileout');
}

function modePTmenu() {
	let mode = localStorage.getItem("mode");

	if (mode === '2') {
		localStorage.setItem('mode', '1');
		console.log('set2as1');
		modePT();
	} else {
		localStorage.setItem('mode', '2');
		console.log('setnot2');
		modePT();
	}
}

function modePT() {
	let mode = localStorage.getItem("mode");
	if (mode === '1') {
		document.getElementById("ITSBRITTNEY").style.display = "none";
		document.getElementById("openScript").style.display = "none";
		document.getElementById("PTModeDiv").style.display = "inline-block";
		document.getElementById("newAuthstarter").style.top = "305px";
		document.getElementById("newAuthstarter").style.left = "20px";
		document.getElementById("statusNote").style.display = "none";
		document.getElementById("snipbox").style.left = "-135px";
		document.getElementById("snipbox").style.top = "325px";
		document.getElementById("R15").style.left = "25px";
		document.getElementById("R15").style.top = "285px";
		const element = document.getElementById("R15");
		const styles = window.getComputedStyle(element);
		const width = styles.getPropertyValue("width");
		document.getElementById("R15").style.width = parseInt(width) - 5;
		document.getElementById("SOPs").style.display = "none";
		document.getElementById("tools").style.display = "none";
		document.getElementById("T0").style.display = "none";
		document.getElementById("otherFPS").style.display = "inline-block";
		document.getElementById("subPL2").style.display = "none";
		document.getElementById("subPL1").style.display = "none";
		document.getElementById("R2").style.display = "none";
		document.getElementById("Request").style.display = "none";
		document.getElementById("ptcon").innerHTML = "&#x2666; Gen Console &#x2666;";
		return;
	} else if (mode === '2') {
		document.getElementById("ITSBRITTNEY").style.display = "inline-block";
		document.getElementById("openScript").style.display = "inline-block";
		document.getElementById("PTModeDiv").style.display = "none";
		document.getElementById("Request").style.display = '';
		document.getElementById("newAuthstarter").style.top = '';
		document.getElementById("newAuthstarter").style.left = '';
		document.getElementById("statusNote").style.display = '';
		document.getElementById("snipbox").style.left = '';
		document.getElementById("snipbox").style.top = '';
		document.getElementById("SOPs").style.display = '';
		document.getElementById("tools").style.display = '';
		document.getElementById("R15").style.top = '';
		document.getElementById("R15").style.width = '';
		document.getElementById("R15").style.left = '';
		document.getElementById("T0").style.display = '';
		document.getElementById("otherFPS").style.display = 'none';
		document.getElementById("subPL2").style.display = '';
		document.getElementById("subPL1").style.display = '';
		document.getElementById("R2").style.display = '';
		document.getElementById("Request").style.left = '';
		document.getElementById("Request").style.top = '';
		document.getElementById("ptcon").innerHTML = "&#x2666; PT Console &#x2666;";
		return;
	} else {
		alert("You Broke It.");
	}
}

function whiteRabbit() {
	closeResource2();
	closeResource();
	setZero();
	openScript('close');
	cancelState();
	cancel_auth();
	cancelPT();
	closeNav();
	closeSOP();
	closePDFmenu();
	setButtonDisplay([
		"transferTemplate", "statNote", "newAuthstyle", "TPDiv", "toggleMaster",
		"div6", "resrcDiv", "diagDiv", "laborscriptDiv"
	], "none");
	RESETNOTE();
	localStorage.setItem("menuOpen", "true");
	MENU();
}

function forteFun() {
	localStorage.setItem('forteFun', 'fun');
	setTimeout(endFun, 4000);
}

function endFun() {
	localStorage.setItem('forteFun', 'nofun');
}

function saintMullet() {
	const isItFun = localStorage.getItem('forteFun');
	if (isItFun !== 'fun') {
		return;
	}
	const img = document.createElement('img');
	img.src = 'ForteGuy.png';
	img.style.position = 'fixed';
	img.style.top = '50%';
	img.style.left = '50%';
	img.style.transform = 'translate(-50%, -50%) scale(0.1)';
	img.style.transition = 'transform 0.2s ease';
	img.style.visibility = 'hidden';
	img.style.zIndex = '9999999999';
	document.body.appendChild(img);
	setTimeout(() => {
		img.style.visibility = 'visible';
		const sizes = ['scale(0.1)', 'scale(1)', 'scale(0.1)', 'scale(1)', 'scale(0.1)', 'scale(1)', 'scale(0.1)', 'scale(1)'];
		let index = 0;

		function animate() {
			img.style.transform = `translate(-50%, -50%) ${sizes[index]}`;
			index++;
			if (index < sizes.length) {
				setTimeout(animate, 200);
			} else {
				setTimeout(() => {
					img.remove();
				}, 200);
			}
		}
		animate();
	}, 100);
}

function showDisclaimer() {
	document.getElementById('disclaimer2').style.display = "inline-block";
}

function hideDisclaimer(x) {
	let agreed = localStorage.getItem('agreed');
	if (x === 'y' && agreed !== 'agreed') return;
	if (x === 'x') localStorage.setItem('agreed', 'agreed');
	document.getElementById('disclaimer2').style.display = "none";
}
