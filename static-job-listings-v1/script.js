const techBtn = document.querySelectorAll(".tech");
const card = document.querySelectorAll(".card");
const filters = document.querySelector(".filters");
const filterDiv = document.querySelector(".filter__div");
const clearBtn = document.querySelector(".clear");
const filtersTracker = [];

let filterData;
const totalData = fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    filterData = data;
  });

techBtn.forEach((btn) => {
  btn.addEventListener("click", async function (event) {
    const eventButton = document.createElement("button");
    eventButton.innerText = event.currentTarget.innerText;
    eventButton.classList.add("filter");
    eventButton.id = event.currentTarget.innerText;
    let res = [];
    filterData.forEach((data) => {
      if (
        data[event.currentTarget.classList[1]].includes(
          event.currentTarget.innerText
        )
      ) {
        res.push(data.id);
      }
    });
    card.forEach((c) => {
      if (!res.includes(parseInt(c.id))) {
        c.classList.add("hidden");
      }
    });
    if (!filtersTracker.includes(eventButton.id)) {
      filters.append(eventButton);
      filterDiv.classList.remove("not__show");
      filtersTracker.push(eventButton.id);
      eventButton.addEventListener("click", (event) => {
        let perRes = res.slice(0, res.length);
        card.forEach((c) => {
          if (!perRes.includes(parseInt(c.id))) {
            c.classList.remove("hidden");
          }
        });
        filtersTracker.splice(filtersTracker.indexOf(event.target.id), 1);
        if (filtersTracker.length == 0) {
          filterDiv.classList.add("not__show");
        }
        eventButton.remove();
      });
    }
  });
});

clearBtn.addEventListener("click", (event) => {
  card.forEach((c) => {
    c.classList.remove("hidden");
  });
  filterDiv.classList.add("not__show");
  filtersTracker.length = 0;
  filters.innerHTML = "";
});
