import {  Uploader } from '@syncfusion/ej2-inputs';
import { createElement } from '@syncfusion/ej2-base';

let uploadEle = createElement('span', { className: 'upload e-icons' });
uploadEle.innerHTML = 'Upload All';
let clearEle = createElement('span', { className: 'remove e-icons' });
clearEle.innerHTML = 'Clear All';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    autoUpload: false,
    buttons: {
      browse: 'Choose file',
      clear: clearEle,
      upload: uploadEle
    }
});
uploadObj.appendTo('#fileupload')

  function handleClick(cb) {
    display("Clicked, new value = " + cb.checked);
  }

  function submit() {
    alert("Submit button clicked!");
    return true;
 }

