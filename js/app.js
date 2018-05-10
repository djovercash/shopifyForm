const App = (function() {
  return class App {
    static init() {
      let opts = ["Accounting", "Dancing", "Marketing", "Product Management", "Shopping"]
      App.populateOptions(opts)
      let submitButton = document.getElementById('emailSubmit')
      submitButton.addEventListener("click", function(event) {
        event.preventDefault()
        App.hideError()
        setTimeout(function() {App.checkStatus()}, 2000)
      })
    }

    static populateOptions(opts) {
      let dropdown = document.getElementById('dropdown')
      for(let i = 0; i < opts.length; i++) {
        let option = document.createElement("option")
        option.innerText = opts[i]
        option.setAttribute("id", i)
        option.setAttribute("class", "black_class")
        dropdown.append(option)
      }
    }

    static checkStatus() {
      let email = document.getElementById('userEmail').value
      if (typeof email === "string") {
        let departmentList = document.getElementById('dropdown')
        let department = departmentList.options[departmentList.selectedIndex].value
        if (email.includes('@') && email.includes('.com') && typeof email === "string") {
          console.log("email: ", email)
          console.log("department: ", department)
          App.submitEmail(email, department)
        } else {
          App.errorMessage()
        }
      } 
    }

    static callTimeout() {
      setTimeout(function() {App.sayHello()}, 5000)
    }

    static submitEmail(email, department) {
      let subscribeContainer = document.getElementById('subscribeContainer')
      subscribeContainer.innerHTML = ''
      let successEmail = document.getElementById('postSuccessEmail')
      let thankYou = document.createElement('h3')
      let resourcesInfo = document.createElement('h3')
      thankYou.innerText = "Thanks for subscribing"
      resourcesInfo.innerText = "You'll start receiving free tips and resources soon"
      resourcesInfo.setAttribute("class", "light_class")
      successEmail.append(thankYou)
      successEmail.append(resourcesInfo)
    }

    static errorMessage() {
      let errorMessage = document.getElementById('error')
      errorMessage.style.visibility = 'visible'
    }

    static hideError() {
      let errorMessage = document.getElementById('error')
      errorMessage.style.visibility = 'hidden'
    }

  }
})();
