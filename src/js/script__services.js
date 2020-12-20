(function() {

  let btns = document.querySelectorAll(".services__item");
  let tabs = document.querySelectorAll(".services__descr");

  btns.forEach(e => e.addEventListener("click", switch_tab));

  function switch_tab() {
    let btn = this;

    btns.forEach(e => e.classList.remove("active"));
    tabs.forEach(e => e.classList.remove("active"));

    let index = [].indexOf.call(btns, btn);

    btns[index].classList.add("active");
    tabs[index].classList.add("active");
  }

})();