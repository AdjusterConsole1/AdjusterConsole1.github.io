import { downloadFile } from './firebase.js';

document.getElementById('downloadMostRecent').addEventListener('click', async () => {
  const referenceKey = prompt('Please enter the reference key:');
  if (!referenceKey) {
    alert('No reference key provided.');
    return;
  }

  const jsonContent = await downloadFile(referenceKey);
  if (jsonContent) {
    const fakeEvent = { target: { files: [new File([JSON.stringify(jsonContent)], `${referenceKey}.json`, { type: "application/json" })] } };
    processUploadedFile(fakeEvent);
  } else {
    alert("No file found or an error occurred.");
  }
});

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
      if (jsonContent.claim_info && jsonContent.claim_info.length > 0) {
        const claimInfo = jsonContent.claim_info[0]; 
        const output = formatJson(claimInfo); 
        document.getElementById('textarea2').value = output;
        const countLeft = localStorage.getItem("countLeft");
        document.getElementById('left2').innerHTML = 'Remaining<br>' + countLeft;
        document.getElementById('left3').innerHTML = 'Remaining<br>' + countLeft; 
        const countInt = parseInt(countLeft) * 4;
        localStorage.setItem("countAll", countInt);
        localStorage.setItem("countPN", countLeft);
        localStorage.setItem("countPrice", countLeft);
        const countStr = countInt.toString();
        document.getElementById('left1').innerHTML = 'Remaining<br>' + countStr;
      } else {
        alert("Invalid JSON structure.");
      }
    } catch (error) {
      alert("Error parsing JSON file: " + error.message);
    }
  };
  reader.readAsText(file);
}

function formatJson(jsonContent, indent = 0) {
  let result = '';
  for (let key in jsonContent) {
    if (jsonContent.hasOwnProperty(key)) {
      const value = jsonContent[key];
      let indentation = ' '.repeat(indent);
      switch (key) {
        case 'partsData':
          result += `${indentation}Parts\n`;
          value.forEach(part => {
            result += formatPart(part, indent + 2);
          });
          break;
        case 'laborData':
          result += `${indentation}Labor:\n`;
          value.forEach(labor => {
            result += `${' '.repeat(indent + 2)}Description: ${labor.laborDescription}\n`;
            result += `${' '.repeat(indent + 2)}Hours: ${labor.hours}\n\n`;
          });
          break;
        case 'totals':
          result += `${indentation}Totals:\n`;
          for (let totalKey in value) {
            if (value.hasOwnProperty(totalKey)) {
              result += `${' '.repeat(indent + 2)}${totalKey}: ${value[totalKey]}\n`;
            }
          }
          break;
        case 'laborRate':
          result += `${indentation}Labor Rate: ${value}\n`;
          break;
        default:
          result += `${indentation}${key}: ${value}\n`;
          break;
      }
    }
  }
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
  let countLeft = parseInt(localStorage.getItem("countLeft")) + 1;
  if (countLeft === 1) {
    document.getElementById('next1').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next2').innerHTML = 'Next<br>' + part.partNumber;
    document.getElementById('next3').innerHTML = 'Next<br>' + parseFloat(part.priceEach).toFixed(2);
  }
  localStorage.setItem("countLeft", countLeft);
  return result;
}

function resetAutoCopyComponents() {
  localStorage.setItem("countLeft", '0');
  localStorage.setItem("countAll", '0');
  localStorage.setItem("countPN", '0');
  localStorage.setItem("countPrice", '0');
  setElementValue([ 
    'fileInput', 'textarea5', 'textarea4', 'textarea3', 'textarea2' ], "");
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
        let countAll = parseInt(localStorage.getItem("countAll"));
        if (countAll > 0) {
          countAll -= 1;
          if (countAll === 0) {
            document.getElementById('next1').innerHTML = "Next<br>--";
            document.getElementById('left1').innerHTML = "Remaining<br>--";
            document.getElementById('textarea5').value = '';
            document.getElementById('autocopy').disabled = true;
          } else {
            const NextLine = lines[1].trim() || '';
            const updatedText = lines.slice(1).join('\n');
            document.getElementById('textarea5').value = updatedText;
            document.getElementById('next1').innerHTML = "Next<br>" + NextLine;
            document.getElementById('left1').innerHTML = "Remaining<br>" + countAll;
          }
          localStorage.setItem("countAll", countAll);
        }
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
        let countPN = parseInt(localStorage.getItem("countPN"));
        if (countPN > 0) {
          countPN -= 1;
          if (countPN === 0) {
            document.getElementById('next2').innerHTML = "Next<br>--";
            document.getElementById('left2').innerHTML = "Remaining<br>--";
            document.getElementById('textarea3').value = '';
            document.getElementById('pncopy').disabled = true;
          } else {
            const NextLine = lines[1].trim() || '';
            const updatedText = lines.slice(1).join('\n');
            document.getElementById('textarea3').value = updatedText;
            document.getElementById('next2').innerHTML = "Next<br>" + NextLine;
            document.getElementById('left2').innerHTML = "Remaining<br>" + countPN;
          }
          localStorage.setItem("countPN", countPN);
        }
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
        let countPrice = parseInt(localStorage.getItem("countPrice"));
        if (countPrice > 0) {
          countPrice -= 1;
          if (countPrice === 0) {
            document.getElementById('next3').innerHTML = "Next<br>--";
            document.getElementById('left3').innerHTML = "Remaining<br>--";
            document.getElementById('textarea4').value = '';
            document.getElementById('pricecopy').disabled = true;
          } else {
            const NextLine = lines[1].trim() || '';
            const updatedText = lines.slice(1).join('\n');
            document.getElementById('textarea4').value = updatedText;
            document.getElementById('next3').innerHTML = "Next<br>" + NextLine;
            document.getElementById('left3').innerHTML = "Remaining<br>" + countPrice;
          }
          localStorage.setItem("countPrice", countPrice);
        }
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

document.getElementById('autocopy').addEventListener('click', autoCopyAndDelete);
document.getElementById('pncopy').addEventListener('click', partnumberCopyAndDelete);
document.getElementById('pricecopy').addEventListener('click', partpriceCopyAndDelete);
document.getElementById('resetFile').addEventListener('click', resetAutoCopyComponents);
