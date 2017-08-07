console.log("working");

/*fetch('http://api.github.com/users/nancyb1199')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data.name); */


      let markup = `

      <h1>Nancy Belscher</h1>

      <div id = "container">

        <div id="basics">
        <h2>The Basics</h2>
        <ul>
          <li>Name: Nancy Belscher</li>
          <li>Github URL <a href="me.com">Nancy Belscher</a></li>
          <li>Email: nancyb1199@gmail.com</li>
          <li>Company: Me</li>
          <li> Website: <a href="me.com">me.com</a></li>
        </ul>
        </div>
        <div id="story">
        <h2>The Story</h2>
        <p>This is my lovely story.<br>
        403 errors make me mad!<br>
        Puppies make me happy!<br>
        I sure I hope this styling looks nice...
        </p>
        </div>
        <img src="img/me.jpg">
      </div>
  `

  document.body.innerHTML = markup;
