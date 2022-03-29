timer = document.getElementById("container");

setTimeout(() => {
  timer.innerText = "10";
  setTimeout(() => {
    timer.innerText = "9";
    setTimeout(() => {
      timer.innerText = "8";
      setTimeout(() => {
        timer.innerText = "7";
        setTimeout(() => {
          timer.innerText = "6";
          setTimeout(() => {
            timer.innerText = "5";
            setTimeout(() => {
              timer.innerText = "4";
              setTimeout(() => {
                timer.innerText = "3";
                setTimeout(() => {
                  timer.innerText = "2";
                  setTimeout(() => {
                    timer.innerText = "1";
                    setTimeout(() => {
                      timer.innerText = "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
