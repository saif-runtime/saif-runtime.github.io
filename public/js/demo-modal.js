(function () {
  var dialog = document.getElementById('demo');
  var trigger = document.getElementById('watch-demo');
  if (!dialog || !trigger || typeof dialog.showModal !== 'function') return;

  var frame = dialog.querySelector('.demo-frame');

  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/svacFbKb_AU?autoplay=1&rel=0" title="Saif singleplayer demo" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    dialog.showModal();
  });

  dialog.addEventListener('close', function () {
    frame.innerHTML = '';
  });

  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
