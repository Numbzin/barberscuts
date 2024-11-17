
export default function Modal() {
    document.getElementById("openFormBtn").addEventListener("click", function () {
      document.getElementById("formModal").style.display = "block";
    });
  
    document.querySelector(".close-btn").addEventListener("click", function () {
      document.getElementById("formModal").style.display = "none";
    });
  
    window.onclick = function (event) {
      const modal = document.getElementById("formModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  