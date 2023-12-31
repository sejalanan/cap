let rootElement = document.getElementById("root")

      fetch("https://reqres.in/api/users?page=2") // This is the URL you're "calling".
        .then(function (response) {
          return response.json
        }) // Convert the response to a format we can easily work with.
        .then(function (resObj) {
          
        })
        .catch(function (error) {
          // If something goes wrong, this block will run.
          console.error("There was an error fetching the data.", error)
        })

      function printData(data) {
        
          // create a div which will display the user information
          let userCard = document.createElement("div")

          // Create an image element
          let userImageElement = document.createElement("img")
          userImageElement.src=data.avatar
          // create a p tag which will display users name
let userNameElement=document.createElement("p")
userNameElement.textContent=data.name
          // create a p tag which will display users email
         let userEmailElement =document.createElement("p")
          userEmailElement.textContent=data.email
          // create a p tag which will display users id;
         let userIdElement =document.createElement("p")
         userIdElement.textContent=data.Id
          userCard.append(
            userImageElement,
            userNameElement,
            userEmailElement,
            userIdElement
          )

          // append/add the user card created to the root element;
          rootElement.append(userCard)
        
      }