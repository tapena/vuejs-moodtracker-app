// var  journalTemplate = document. querySelector('#journal-card');
// var journalContainer = document.querySelector('.row');

// axios.get("http://localhost:3000/api/journals").then(function(response) {
// console.log(journals);
// });

// axios.get("http://localhost:3000/api/journals").then(function(response) {
// var journals = response.data;
// console.log(journals);

// journals.forEach(function(journal) {
//   var journalContainer.appendChild(journalTemplate.content.cloneNode(true);

//   journalClone.querySelector('.journal-title').innerText = journal.title;

//   journalClone.querySelector('.content').innerText = journal.content;

// journalContainer.appendChild(journalClone);


// });
// });

var  moodtrackerTemplate = document. querySelector('#moodtrackers-card');
var moodtrackerTemplate = document.querySelector('.row');

axios.get("http://localhost:3000/api/mood_trackers").then(function(response) {
console.log(moodtrackers);
});

axios.get("http://localhost:3000/api/mood_trackers").then(function(response) {
var moodtrackers = response.data;
console.log(moodtrackers);

moodtrackers.forEach(function(moodtracker) {
  var moodtrackerContainer.appendChild(moodtrackerTemplate.content.cloneNode(true);

  moodtrackerClone.querySelector('.moodtracker-emotion').innerText = moodtracker.emotion;

  moodtrackerClone.querySelector('.proud-message').innerText = moodtracker.proudmessage;

  moodtrackerClone.querySelector('.user-id').innerText = moodtracker.user-id;

moodtrackerContainer.appendChild(moodtrackerClone);


});
});