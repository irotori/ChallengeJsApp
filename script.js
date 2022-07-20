const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

function cal() {
  const v = document.querySelector('#product');
  const n = document.querySelector('#number').value;
  const articleName = v.options[v.selectedIndex].text
  const total = parseInt(v.value,10) * parseInt(n, 10);  
  const item = {
    article: articleName,
    number: n,
    total: total
  }

  const list = document.querySelector('.list');
  let li = document.createElement('li');
  li.innerHTML = `${n} ${articleName} => ${total}\n`;
  list.append(li);
  
}