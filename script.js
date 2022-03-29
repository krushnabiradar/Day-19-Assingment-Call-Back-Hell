const time = () => {
  var a = document.getElementById("call_back");
  setTimeout(() => {
    a.innerHTML = "10";
    setTimeout(() => {
      a.innerHTML = "9";
      setTimeout(() => {
        a.innerHTML = "8";
        setTimeout(() => {
          a.innerHTML = "7";
          setTimeout(() => {
            a.innerHTML = "6";
            setTimeout(() => {
              a.innerHTML = "5";
              setTimeout(() => {
                a.innerHTML = "4";
                setTimeout(() => {
                  a.innerHTML = "3";
                  setTimeout(() => {
                    a.innerHTML = "2";
                    setTimeout(() => {
                      a.innerHTML = "1";
                      setTimeout(() => {
                        a.innerHTML = "Happy Independence Day";
                        document.body.style =
                          "background: linear-gradient(to bottom, rgba(242,157,75,1) 0%, rgba(255,255,255,1) 50%, rgba(62,133,39,1) 100%);";
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
};
time();
