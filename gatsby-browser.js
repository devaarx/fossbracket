require('./static/css/index.css');
require('./static/css/prism.css');
require('./static/css/progress.css');

exports.onRouteUpdate = () => {
  document.querySelector('.progress').classList.remove('start');
};

exports.onRouteUpdateDelayed = () => {
  document.querySelector('.progress').classList.add('start');
};
