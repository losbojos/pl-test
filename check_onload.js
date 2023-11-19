/* Хотя defer скрипт запускается, когда DOM дерево будет полностью построено,
чтобы соответствовать событию window.onload нужно еще дождаться загрузки всех
внешний ресурсов, для этого периодически проверяем состояние document.readyState
*/

let stateCheck = setInterval(() => {
  // check if The document and all sub-resources have finished loading.
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);

    // document ready
    console.log('the whole page is loaded');
  }
}, 100);