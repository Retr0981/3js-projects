let data = [
  {
    name: 'David',
    age: '56'
  },
  {
    name: 'Daniel',
    age: '89'
  },
  {
    name: 'Kojo',
    age: '6'
  },
  {
    name: 'Kwame',
    age: '25'
  },
  {
    name: 'Kwesi',
    age: '22'
  },
  {
    name: 'Joey',
    age: '12'
  }
];

const info = document.querySelector('#info');


let details = data.map(function(item) {
   return '<div>' + item.name +  ' '  +   'is  '   +   item.age
   + ' years old' + '</div>';
 });

info.innerHTML = details.join('\n');