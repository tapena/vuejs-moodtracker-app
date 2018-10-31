var  journalTemplate = document. querySelector('#journal-card');
var journalContainer = document.querySelector('.row');

axios.get("http://localhost:3000/api/journals").then(function(response) {
console.log(journals);
});

axios.get("http://localhost:3000/api/journals").then(function(response) {
var journals = response.data;
console.log(journals);

journals.forEach(function(journal) {
  var journalContainer.appendChild(journalTemplate.content.cloneNode(true);

  journalClone.querySelector('.journal-title').innerText = journal.title;

  journalClone.querySelector('.content').innerText = journal.content;

journalContainer.appendChild(journalClone);


});
});

