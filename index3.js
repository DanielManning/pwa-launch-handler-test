window.onload = () => {
  const index3openercheck = document.getElementById('index3openercheck');
  index3openercheck.textContent = `window.name: ${window.name}, has window.opener: ${!!window.opener}`;
}
