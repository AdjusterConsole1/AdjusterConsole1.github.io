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

document.getElementById('fileInput').addEventListener('change', processUploadedFile);
document.getElementById('autocopy').addEventListener('click', autoCopyAndDelete);
document.getElementById('pncopy').addEventListener('click', partnumberCopyAndDelete);
document.getElementById('pricecopy').addEventListener('click', partpriceCopyAndDelete);
document.getElementById('resetFile').addEventListener('click', resetAutoCopyComponents);

function processUploadedFile(event) {
  const file = event.target.files[0];
  if (!file) {
    alert("No file selected.");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const jsonContent = JSON.parse(e.target.result);
      if (Array.isArray(jsonContent) && jsonContent.length > 0) {
        const output = formatJsons(jsonContent); // Pass the entire array to formatJsons
        document.getElementById('textarea2').value = output;
        const countLefts = jsonContent.length; // Set the countLefts based on the number of parts
        localStorage.setItem("countLefts", countLefts);
        const countInts = countLefts * 4;
        localStorage.setItem("countAlls", countInts);
        localStorage.setItem("countPNs", countLefts);
        localStorage.setItem("countPrices", countLefts);
        document.getElementById('left1').innerHTML = 'Remaining<br>' + countInts;
        document.getElementById('left2').innerHTML = 'Remaining<br>' + countLefts;
        document.getElementById('left3').innerHTML = 'Remaining<br>' + countLefts;
      } else {
        alert("Invalid JSON structure.");
      }
    } catch (error) {
      alert("Error parsing JSON file: " + error.message);
    }
  };
  reader.readAsText(file);
}

function formatJsons(jsonContent, indent = 0) {
  let result = '';
  jsonContent.forEach(part => {
    result += formatPart(part, indent);
  });
  return result;
}

function formatPart(part, indent) {
  let result = '';
  result += `${' '.repeat(indent)}Part Number: ${part.partNumber}\n`;
  result += `${' '.repeat(indent)}Part Name: ${part.partName}\n`;
  result += `${' '.repeat(indent)}Quantity: ${part.quantity}\n`;
  result += `${' '.repeat(indent)}RF Price: $${parseFloat(part.priceEach).toFixed(2)}\n\n`;
  document.getElementById('textarea5').value += part.partNumber + '\n' + part.partName + '\n' + part.quantity + '\n' + parseFloat(part.priceEach).toFixed(2) + '\n';
  document.getElementById('textarea4').value += parseFloat(part.priceEach).toFixed(2) + '\n';
  document.getElementById('textarea3').value += part.partNumber + '\n';
  let countLefts = parseInt(localStorage.getItem("countLefts")) + 1;
  if (countLefts === 1) {
    document.getElementById('next1').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next2').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next3').innerHTML = 'Next<br>' + parseFloat(part.priceEach).toFixed(2);
  }
  localStorage.setItem("countLefts", countLefts);
  return result;
}

function resetAutoCopyComponents() {
  localStorage.setItem("countLefts", '0');
  localStorage.setItem("countAlls", '0');
  localStorage.setItem("countPNs", '0');
  localStorage.setItem("countPrices", '0');
  setElementValue([ 
    'fileInput', 'textarea5', 'textarea4', 'textarea3', 'textarea2' ], "");
  document.getElementById('copy1').innerHTML = "Copied<br>--";
  document.getElementById('copy2').innerHTML = "Copied<br>--";
  document.getElementById('copy3').innerHTML = "Copied<br>--";
  document.getElementById('next1').innerHTML = "Next<br>--";
  document.getElementById('next2').innerHTML = "Next<br>--";
  document.getElementById('next3').innerHTML = "Next<br>--";
  document.getElementById('left1').innerHTML = "Remaining<br>--";
  document.getElementById('left2').innerHTML = "Remaining<br>--";
  document.getElementById('left3').innerHTML = "Remaining<br>--";
  document.getElementById('autocopy').disabled = false;
  document.getElementById('pncopy').disabled = false;
  document.getElementById('pricecopy').disabled = false;
}

function autoCopyAndDelete() {
  const textareaValue = document.getElementById('textarea5').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countAlls = parseInt(localStorage.getItem("countAlls")) - 1;
        if (countAlls === 0) {
          document.getElementById('next1').innerHTML = "Next<br>--";
          document.getElementById('left1').innerHTML = "Remaining<br>--";
          document.getElementById('textarea5').value = '';
          document.getElementById('autocopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea5').value = updatedText;
        document.getElementById('copy1').innerHTML = "Copied<br>" + firstLine;
        document.getElementById('next1').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left1').innerHTML = "Remaining<br>" + countAlls;
        localStorage.setItem("countAlls", countAlls);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}

function partnumberCopyAndDelete() {
  const textareaValue = document.getElementById('textarea3').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countPNs = parseInt(localStorage.getItem("countPNs")) - 1;
        if (countPNs === 0) {
          document.getElementById('next2').innerHTML = "Next<br>--";
          document.getElementById('left2').innerHTML = "Remaining<br>--";
          document.getElementById('textarea3').value = '';
          document.getElementById('pncopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea3').value = updatedText;
        document.getElementById('copy2').innerHTML = "Copied<br>" + firstLine;
        document.getElementById('next2').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left2').innerHTML = "Remaining<br>" + countPNs;
        localStorage.setItem("countPNs", countPNs);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}

function partpriceCopyAndDelete() {
  const textareaValue = document.getElementById('textarea4').value;
  const lines = textareaValue.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();

    if (firstLine !== '') {
      navigator.clipboard.writeText(firstLine).then(() => {
        let countPrices = parseInt(localStorage.getItem("countPrices")) - 1;
        if (countPrices === 0) {
          document.getElementById('next3').innerHTML = "Next<br>--";
          document.getElementById('left3').innerHTML = "Remaining<br>--";
          document.getElementById('textarea4').value = '';
          document.getElementById('pricecopy').disabled = true;
          return;
        }
        const NextLine = lines[1].trim() || '';
        const updatedText = lines.slice(1).join('\n');
        document.getElementById('textarea4').value = updatedText;
        document.getElementById('copy3').innerHTML = "Copied<br>" + firstLine;
        document.getElementById('next3').innerHTML = "Next<br>" + NextLine;
        document.getElementById('left3').innerHTML = "Remaining<br>" + countPrices;
        localStorage.setItem("countPrices", countPrices);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}

function setElementValue(elementIds, value) {
  elementIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = value;
    }
  });
}
