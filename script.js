const form = document.getElementById("gitUser");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const search = document.getElementById("search").value;
  // console.log("-----------abhi-----------")
  fetch("https://api.github.com/users/" + search, {headers: {Authorization: 'Bearer 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'}})
    .then((result) => result.json())
    .then((data) => {
      if (data.login !== undefined) {
        const data1 = JSON.stringify(data);
        console.log("first", data1);
        localStorage.setItem("userData", data1);
        window.location.href = "Home.html";
      } else {
        alert("User not found");
        localStorage.removeItem("userData");
      }
      // userData.push(data)
      // document.getElementById("repository").innerHTML = `
      // <h3> ${data.login} </h3>`
    });
});

// fetchData.js
