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

document.addEventListener('keyup', function(e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'P') {

  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'L') {
    window.location.href = 'https://theadjusterconsole.github.io/';
  }
  if (e.key === 'Escape') {
    whiteRabbit();
  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'A') {
    autoEnable();
  }
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'M') {
    downloadAndProcessLatestFile();
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
    modePT();
  } else {
    localStorage.setItem('mode', '2');
    modePT();
  }
}

function modePT() {
  let mode = localStorage.getItem("mode");
  if (mode === '1') {
    document.getElementById("ITSBRITTNEY").style.display = "none";
    document.getElementById("openScript").style.display = "none";
    document.getElementById("PTModeDiv").style.display = "inline-block";
    document.getElementById("newauthSelect").style.top = "275px";
    document.getElementById("newauthSelect").style.left = "50px";
    document.getElementById("newauthLabel").style.top = "275px";
    document.getElementById("newauthLabel").style.left = "70px";
    document.getElementById("newAuthstarter").style.top = "305px";
    document.getElementById("newAuthstarter").style.left = "20px";
    document.getElementById("statusNote").style.left = "200px";
    document.getElementById("statusNote").style.top = "230px";
    document.getElementById("snipbox").style.left = "-135px";
    document.getElementById("snipbox").style.top = "325px";
    document.getElementById("SOPs").style.display = "none";
    document.getElementById("tools").style.display = "none";
    document.getElementById("T0").style.display = "none";
    document.getElementById("Request").style.display = "none";
    document.getElementById("ptcon").innerHTML = "&#x2666; Gen Console &#x2666;";
    return;
  } 
  if (mode === '2') {
    document.getElementById("ITSBRITTNEY").style.display = "inline-block";
    document.getElementById("openScript").style.display = "inline-block";
    document.getElementById("PTModeDiv").style.display = "none";
    document.getElementById("Request").style.display = "";
    document.getElementById("newAuthstarter").style.top = "";
    document.getElementById("newAuthstarter").style.left = "";
    document.getElementById("newauthSelect").style.top = "";
    document.getElementById("newauthSelect").style.left = "";
    document.getElementById("newauthLabel").style.top = "";
    document.getElementById("newauthLabel").style.left = "";
    document.getElementById("statusNote").style.left = "";
    document.getElementById("statusNote").style.top = "";
    document.getElementById("snipbox").style.left = "";
    document.getElementById("snipbox").style.top = "";
    document.getElementById("SOPs").style.display = "";
    document.getElementById("tools").style.display = "";
    document.getElementById("T0").style.display = "";
    document.getElementById("Request").style.left = "";
    document.getElementById("Request").style.top = "";
    document.getElementById("ptcon").innerHTML = "&#x2666; PT Console &#x2666;";
    return;
  }
 alert("You Broke It.");
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
  setButtonDisplay( [ 
    "transferTemplate", "statNote", "newAuthstyle", "TPDiv", "toggleMaster",
     "div6", "resrcDiv", "diagDiv", "laborscriptDiv" ], "none");
  RESETNOTE();
  localStorage.setItem("menuOpen", "true");
  MENU();
}

//    "Notify your Team Lead that your call is ongoing, how much time\ryou have left, and if there are any issues with the call."

let start_call = document.getElementById('start_call');
start_call.innerText = '00 : 00 : 00'; 
let timer = false;
let start_stop_button = document.getElementById('start_stop_button');
let reset_button = document.getElementById('reset_button');

let hour = 00; 
let minute = 00; 
let second = 00; 

start_call.addEventListener('click', function () {
  if (timer) {
    timer = false;
//    start_stop_button.innerText = "Start Call";
  } else if (!timer) {
    timer = true;
//    start_stop_button.innerText = "End Call";
    setTimeout(stopWatch, 1000);
  }
}); 

start_call.addEventListener('dblclick', function () { 
  timer = false; 
  hour = 00; 
  minute = 00; 
  second = 00; 
  start_call.innerText = '00 : 00 : 00';
  start_call.style.color = '';
  start_call.classList.remove('glowing');
//  start_stop_button.innerText = "Start Call";
}); 

function stopWatch() {
  if (minute > 12 && minute < 16) {
    start_call.style.color = 'yellow';
  } else if (minute > 15) {
    start_call.style.color = 'red';
  } else {
    start_call.style.color = 'var(--glow-txt-color)';
  }
  if (minute > 24) {
    start_call.classList.add('glowing');
  }
  if (timer) { 
      second++; 
    if (second == 60) { 
      minute++; 
      second = 0; 
    } 
    if (minute == 60) { 
      hour++; 
      minute = 0; 
      second = 0; 
    } 
    let hrString = hour; 
    let minString = minute; 
    let secString = second;  
    if (hour < 10) { 
      hrString = "0" + hrString; 
    } 
    if (minute < 10) { 
      minString = "0" + minString; 
    } 
    if (second < 10) { 
      secString = "0" + secString; 
    } 
    start_call.innerText = hrString + ' : ' + minString + ' : ' + secString; 
    setTimeout(stopWatch, 1000); 
  } 
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
