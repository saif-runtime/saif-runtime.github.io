(function () {
  var dialog = document.getElementById('thanks');
  var trigger = document.getElementById('get-release');
  if (!dialog || !trigger || typeof dialog.showModal !== 'function') return;

  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    dialog.showModal();
  });

  document.getElementById('thanks-continue').addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('click', function (e) {
    var r = dialog.getBoundingClientRect();
    var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (e.target === dialog && !inside) dialog.close();
  });
})();
