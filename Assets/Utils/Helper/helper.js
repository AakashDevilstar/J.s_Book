function maketable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    table.classList.add("tablelist");
    thead.classList.add("tablehead");
    tbody.classList.add("tablebody");
  
    const multipleth = inputObjArr.map((e) => {
      const th = document.createElement("th");
      th.innerText = e.key;
      thead.appendChild(th);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}
  
  function getTag(obj) {
    const { key, type, id } = obj;
    let input = null;
    switch (type) {
      case NUMBER:
      case TEXT:
      case DATE:
      case BOOLEAN:
        input = document.createElement("input");
        input.type = type;
        input.name = key;
        input.id = id;
        break;
      default:
        input = document.createElement("input");
        input.type = TEXT;
        input.name = key;
        input.id = id;
        break;
    }
  
    const maindiv = document.createElement("div");
    if (input === null) {
      return maindiv;
    }
    const inputtext = document.createElement("span");
    inputtext.setAttribute("for", id);
    inputtext.classList.add("inputname");
    inputtext.innerText = key;
    maindiv.appendChild(inputtext);
    maindiv.appendChild(input);
    return maindiv;
  }

  function getData() {
    const newUserData = [];
    for (let inputs of inputObjArr) {
      let { id, key } = inputs;
      const tag = document.getElementById(`${id}`);
      newUserData.push(tag.value);
      tag.value='';
    }
    const list = JSON.parse(localStorage.getItem("userdata"));
    list.push(newUserData);
    localStorage.setItem("userdata", JSON.stringify(list));
    return newUserData;
  }
  
  function localst() {
    let userdata = JSON.parse(localStorage.getItem("userdata"));
    if (userdata === null) {
      localStorage.setItem("userdata", JSON.stringify([]));
      return;
    }
    const tbdy = document.querySelector(".tablebody");
    userdata.map((user) => {
        let tRow = document.createElement("tr");
        for (let retrievedata of user) {
            let tableData = document.createElement("td");
            tableData.innerText = retrievedata;
            tRow.appendChild(tableData);
        }
      tbdy.appendChild(tRow);
    });
  }
  
function infoadd() {
    const newUserData = getData();
    const tbdy = document.querySelector(".tablebody");
    let tRow = document.createElement("tr");
    for (let retrievedata of newUserData) {
      let tableData = document.createElement("td");
      tableData.innerText = retrievedata;
      tRow.appendChild(tableData);
    }
    tbdy.appendChild(tRow);
}