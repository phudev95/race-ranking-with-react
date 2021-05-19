export function getParameterByName(name, url = window.location.href) {
  // eslint-disable-next-line no-useless-escape
  const key = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${key}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
