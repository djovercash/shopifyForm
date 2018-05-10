const App = (function() {
  return class App {
    static init() {
      console.log("I'm in app");
      App.populateOptions()
    }

    static populateOptions() {
      let opts = ["Accounting", "Dancing", "Marketing", "Product Management", "Shopping"]
      let dropdown = document.getElementById('dropdownOptions')
      for(let i = 0; i < opts.length; i++) {
        let option = document.createElement("option")
        option.innerText = opts[i]
        option.setAttribute("id", i)
        dropdown.append(option)
      }
      console.log(opts);
    }
  }
})();
