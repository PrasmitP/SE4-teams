fetch('http://project1.eaglesoftwareteam.com/project1/2024/t3/navbar/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });
 