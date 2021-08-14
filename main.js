const width = 5;
      const height = 5;
      var counter = 0;
      var gameOver = document.getElementById("gameover");
      let defaultPositions = [1, 3, 5, 6, 12, 15];
        // let defaultPositions = [
        //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 18, 19, 20, 22, 23, 24,
        // ];

      const grid = document.querySelector(".grid");
      for (let i = 0; i < width * height; i++) {
        const tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        tile.innerHTML = i + 1;
        grid.appendChild(tile);
      }
      const tiles = document.querySelectorAll(".grid .tile");

      for (const i of defaultPositions) {
        const tilePart = tiles[i];
        tilePart.classList.toggle("purple");
      }

      for (i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", score);
        tiles[0].addEventListener("click", tileNum1);
        tiles[1].addEventListener("click", tileNum2);
        tiles[2].addEventListener("click", tileNum3);
        tiles[3].addEventListener("click", tileNum4);
        tiles[4].addEventListener("click", tileNum5);
        tiles[5].addEventListener("click", tileNum6);
        tiles[6].addEventListener("click", tileNum7);
        tiles[7].addEventListener("click", tileNum8);
        tiles[8].addEventListener("click", tileNum9);
        tiles[9].addEventListener("click", tileNum10);
        tiles[10].addEventListener("click", tileNum11);
        tiles[11].addEventListener("click", tileNum12);
        tiles[12].addEventListener("click", tileNum13);
        tiles[13].addEventListener("click", tileNum14);
        tiles[14].addEventListener("click", tileNum15);
        tiles[15].addEventListener("click", tileNum16);
        tiles[16].addEventListener("click", tileNum17);
        tiles[17].addEventListener("click", tileNum18);
        tiles[18].addEventListener("click", tileNum19);
        tiles[19].addEventListener("click", tileNum20);
        tiles[20].addEventListener("click", tileNum21);
        tiles[21].addEventListener("click", tileNum22);
        tiles[22].addEventListener("click", tileNum23);
        tiles[23].addEventListener("click", tileNum24);
        tiles[24].addEventListener("click", tileNum25);
      }

      function darkmode() {
        var element = document.body;
        element.classList.toggle("dark-Mode");
        var element2 = document.getElementById("score");
        element2.classList.toggle("scorecolor");
        var element3 = document.getElementById("darkBtn");
        element3.classList.toggle("moonshadow");
      }
      function score() {
        counter++;
        document.getElementById("scorespan").innerHTML = Math.floor(counter);
        if (tiles[i].classList.contains("purple")) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum1() {
        this.classList.toggle("purple");
        tiles[1].classList.toggle("purple");
        tiles[5].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum2() {
        tiles[0].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[2].classList.toggle("purple");
        tiles[6].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum3() {
        tiles[1].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[3].classList.toggle("purple");
        tiles[7].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum4() {
        tiles[2].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[4].classList.toggle("purple");
        tiles[8].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum5() {
        tiles[3].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[9].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum6() {
        tiles[0].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[6].classList.toggle("purple");
        tiles[10].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum7() {
        tiles[1].classList.toggle("purple");
        tiles[5].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[7].classList.toggle("purple");
        tiles[11].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum8() {
        tiles[2].classList.toggle("purple");
        tiles[6].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[8].classList.toggle("purple");
        tiles[12].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum9() {
        tiles[3].classList.toggle("purple");
        tiles[7].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[9].classList.toggle("purple");
        tiles[13].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum10() {
        tiles[4].classList.toggle("purple");
        tiles[8].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[14].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum11() {
        tiles[5].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[11].classList.toggle("purple");
        tiles[15].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum12() {
        tiles[6].classList.toggle("purple");
        tiles[10].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[12].classList.toggle("purple");
        tiles[16].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum13() {
        tiles[7].classList.toggle("purple");
        tiles[11].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[13].classList.toggle("purple");
        tiles[17].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum14() {
        tiles[8].classList.toggle("purple");
        tiles[12].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[14].classList.toggle("purple");
        tiles[18].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum15() {
        tiles[9].classList.toggle("purple");
        tiles[13].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[19].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum16() {
        tiles[10].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[16].classList.toggle("purple");
        tiles[20].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum17() {
        tiles[11].classList.toggle("purple");
        tiles[15].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[17].classList.toggle("purple");
        tiles[21].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum18() {
        tiles[12].classList.toggle("purple");
        tiles[16].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[18].classList.toggle("purple");
        tiles[22].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum19() {
        tiles[13].classList.toggle("purple");
        tiles[17].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[19].classList.toggle("purple");
        tiles[23].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum20() {
        tiles[14].classList.toggle("purple");
        tiles[18].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[24].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum21() {
        tiles[15].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[21].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum22() {
        tiles[16].classList.toggle("purple");
        tiles[20].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[22].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum23() {
        tiles[17].classList.toggle("purple");
        tiles[21].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[23].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum24() {
        tiles[18].classList.toggle("purple");
        tiles[22].classList.toggle("purple");
        this.classList.toggle("purple");
        tiles[24].classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }
      function tileNum25() {
        tiles[19].classList.toggle("purple");
        tiles[23].classList.toggle("purple");
        this.classList.toggle("purple");
        if (
          tiles[1].classList.contains("purple") &&
          tiles[2].classList.contains("purple") &&
          tiles[3].classList.contains("purple") &&
          tiles[4].classList.contains("purple") &&
          tiles[5].classList.contains("purple") &&
          tiles[6].classList.contains("purple") &&
          tiles[7].classList.contains("purple") &&
          tiles[8].classList.contains("purple") &&
          tiles[9].classList.contains("purple") &&
          tiles[10].classList.contains("purple") &&
          tiles[11].classList.contains("purple") &&
          tiles[12].classList.contains("purple") &&
          tiles[13].classList.contains("purple") &&
          tiles[14].classList.contains("purple") &&
          tiles[15].classList.contains("purple") &&
          tiles[16].classList.contains("purple") &&
          tiles[17].classList.contains("purple") &&
          tiles[18].classList.contains("purple") &&
          tiles[19].classList.contains("purple") &&
          tiles[20].classList.contains("purple") &&
          tiles[21].classList.contains("purple") &&
          tiles[22].classList.contains("purple") &&
          tiles[23].classList.contains("purple") &&
          tiles[24].classList.contains("purple")
        ) {
          gameOver.innerHTML = "you win!";
        }
      }

      // animation for Starting the game
      const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const game = document.querySelector(".all");

        playBtn.addEventListener("click", () => {
          introScreen.classList.add("fadeOut");
          game.classList.add("fadeIn");
        });
      };
      startGame();