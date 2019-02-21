var text = "";
$("body").on("click",".button__addNewComment", addComment)
$("body").on("keyup",".newComment", newComment)
function addComment (){
            let date = new Date().getDate()
            let month = new Date().getMonth()
            let year = new Date().getFullYear()
            let name = "Виктор Викторович:)"
             if (month===1){
                month = "Февраля"
             }
           let data = name + " " + date + " "+ month+ " " + year
           if(!text){
               alert("пустое сообщение")
           }
           else{
                $(".comment").append($("<p>").addClass("p").text(data))
            $(".comment").append($("<div>")
		.addClass("comment__text")
        .text(text))
        
           }
}

function newComment(event){
    console.log(event.keyCode)
    text = event.currentTarget.value
    if ((event.keyCode==13 || event.keyCode==10)){
        addComment()    
    }
}
