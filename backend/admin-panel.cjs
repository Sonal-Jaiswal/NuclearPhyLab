const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;
const STUDENTS_FILE = path.join(__dirname, '../public/students.json');
const PUBLICATIONS_FILE = path.join(__dirname, '../public/publications.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Load students
let students = [];
if (fs.existsSync(STUDENTS_FILE)) {
  try {
    students = JSON.parse(fs.readFileSync(STUDENTS_FILE, 'utf-8'));
  } catch (e) {
    students = [];
  }
}
// Load publications
let publications = [];
if (fs.existsSync(PUBLICATIONS_FILE)) {
  try {
    publications = JSON.parse(fs.readFileSync(PUBLICATIONS_FILE, 'utf-8'));
  } catch (e) {
    publications = [];
  }
}

function renderTabs(activeTab) {
  return `
    <div style="margin-bottom:2em;">
      <a href="/students" style="padding:8px 16px;${activeTab==='students'?'background:#ddd;':''}">Students</a>
      <a href="/publications" style="padding:8px 16px;${activeTab==='publications'?'background:#ddd;':''}">Publications</a>
    </div>
  `;
}

app.get(['/', '/students'], (req, res) => {
  res.send(`
    <h2>Admin Panel</h2>
    ${renderTabs('students')}
    <form method="POST" action="/students/add">
      <label>Name: <input name="name" required></label><br>
      <label>Degree Type: <select name="level">
        <option>PhD Student</option>
        <option>BTech Student</option>
        <option>MTech Student</option>
        <option>Research Scholar</option>
      </select></label><br>
      <label>Year/Status: <input name="year" required></label><br>
      <label>Research Focus: <input name="research" required></label><br>
      <label>Email: <input name="email" type="email"></label><br>
      <label>LinkedIn: <input name="linkedin"></label><br>
      <label>Photo URL: <input name="photo"></label><br>
      <button type="submit">Add Student</button>
    </form>
    <h3>Current Students</h3>
    <ul>
      ${students.map((s, i) => `<li>${s.name} (${s.level}) <form method='POST' action='/students/delete' style='display:inline'><input type='hidden' name='index' value='${i}'><button>Delete</button></form></li>`).join('')}
    </ul>
  `);
});

app.post('/students/add', (req, res) => {
  students.push({
    name: req.body.name,
    level: req.body.level,
    year: req.body.year,
    research: req.body.research,
    email: req.body.email,
    linkedin: req.body.linkedin,
    photo: req.body.photo
  });
  fs.writeFileSync(STUDENTS_FILE, JSON.stringify(students, null, 2));
  res.redirect('/students');
});

app.post('/students/delete', (req, res) => {
  const idx = parseInt(req.body.index, 10);
  if (!isNaN(idx)) {
    students.splice(idx, 1);
    fs.writeFileSync(STUDENTS_FILE, JSON.stringify(students, null, 2));
  }
  res.redirect('/students');
});

app.get('/publications', (req, res) => {
  res.send(`
    <h2>Admin Panel</h2>
    ${renderTabs('publications')}
    <form method="POST" action="/publications/add">
      <label>Title: <input name="title" required></label><br>
      <label>Journal/Conference: <input name="journal" required></label><br>
      <label>Year: <input name="year" required></label><br>
      <label>Authors: <input name="authors" required></label><br>
      <label>Abstract: <input name="abstract" required></label><br>
      <label>Type: <select name="type">
        <option>Journal Article</option>
        <option>Conference Paper</option>
        <option>Review Article</option>
        <option>Book Chapter</option>
        <option>Other</option>
      </select></label><br>
      <label>Status: <select name="status">
        <option>Published</option>
        <option>In Press</option>
        <option>Under Review</option>
        <option>Draft</option>
      </select></label><br>
      <label>Link: <input name="link"></label><br>
      <label>DOI: <input name="doi"></label><br>
      <label>Extra Notes: <input name="notes"></label><br>
      <button type="submit">Add Publication</button>
    </form>
    <h3>Current Publications</h3>
    <ul>
      ${publications.map((p, i) => `<li>${p.title} (${p.year}) <form method='POST' action='/publications/delete' style='display:inline'><input type='hidden' name='index' value='${i}'><button>Delete</button></form></li>`).join('')}
    </ul>
  `);
});

app.post('/publications/add', (req, res) => {
  publications.push({
    title: req.body.title,
    journal: req.body.journal,
    year: req.body.year,
    authors: req.body.authors,
    abstract: req.body.abstract,
    type: req.body.type,
    status: req.body.status,
    link: req.body.link,
    doi: req.body.doi,
    notes: req.body.notes
  });
  fs.writeFileSync(PUBLICATIONS_FILE, JSON.stringify(publications, null, 2));
  res.redirect('/publications');
});

app.post('/publications/delete', (req, res) => {
  const idx = parseInt(req.body.index, 10);
  if (!isNaN(idx)) {
    publications.splice(idx, 1);
    fs.writeFileSync(PUBLICATIONS_FILE, JSON.stringify(publications, null, 2));
  }
  res.redirect('/publications');
});

app.listen(PORT, () => {
  console.log(`Admin panel running at http://localhost:${PORT}`);
}); 