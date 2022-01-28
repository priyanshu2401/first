
    window.onscroll = function (e) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        let bar = document.querySelectorAll(".common");
        bar.forEach((bar) => {
          let value = bar.getAttribute("data-done");
          bar.style.width = `${value}%`;
          bar.style.opacity = 1;
        });

        // let load=document.querySelector('.bar');
      }
    };
  