let ul = document.querySelector(".todos");
        let lis = document.querySelectorAll(".todo");
        let deletes = document.querySelectorAll(".delete");
        let input = document.querySelector(".newTodo");

        // Add click listeners to <ul> to account for any newly added <li>s

        ul.addEventListener(
        "click",
        function (e) {
            let target = e.target;

            // If target was a <li>
            if (target.classList.contains("todo-text")) {
            target.classList.contains("completed")
                ? target.classList.remove("completed")
                : target.classList.add("completed");
            // If target was the <span> inside an <li>
            } else if (target.classList.contains("delete")) {
            let li = target.parentElement;
            e.stopPropagation();
            li.style.opacity = "0";
            setTimeout(function () {
                li.parentNode.removeChild(li);
            }, 300);
            }
        },
        true
        );

        // Add listener to input on enter key press
        // Create a new <li> from input value
        // Clear input

        input.addEventListener("keypress", function (e) {
        // If the user presses enter
        if (e.which == "13") {
            let newTodo = this.value;

            let li = document.createElement("li");
            li.classList.add("todo");
            let span = document.createElement("span");
            span.classList.add("todo-text");
            span.innerHTML = newTodo;
            li.appendChild(span);

            li.innerHTML += "<i class='material-icons delete'>clear</i>";

            ul.appendChild(li);

            input.value = "";
        }
        });