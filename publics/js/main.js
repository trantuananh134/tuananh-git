// ANIMATION LOADING
$(document).ready(function () {
  $("#loading").addClass("hide");
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
});
// HEADER
function handleMenuMobile() {
  $("#btn-menu_mobile").toggleClass("active");
  $("#menu_mobile").toggleClass("active");
}
// POPUP  
function openPopup(element, mess = null, mess2 = null, image = null) {
  closePopup();
  $("#popup").addClass("active");
  $("#backdrop").addClass("active");
  $("html").css("overflow", "hidden");
  $(`#${element}`).addClass("active");
  $("#popup_mess-noti").html(mess);
}

function closePopup() {
  $("html").css("overflow", "auto");
  $("#popup").removeClass("active");
  $(".item-popup").removeClass("active");
  $("#btn-xacnhan").html("");
  $("#popup_mess-noti").html("");
}

document.addEventListener('DOMContentLoaded', () => {
  const spinBtns = document.querySelectorAll('.tab2 .spin-btn');
  const sutBongBtn = document.querySelector('.tab2 .btn-sutbong');

  spinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      spinBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  sutBongBtn.addEventListener('click', () => {
    const activeBtn = document.querySelector('.tab2 .spin-btn.active');

    const spinValue = activeBtn ? activeBtn.dataset.spin : 1;

    console.log(spinValue);
  });
});