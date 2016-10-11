/**
 * Created by komlancz on 2016.10.11..
 */
$(document).ready(function(){
    currentPageTitle("Your Boards");
    getDataFromLocalStorage();
    displayBoards();
    clickToHide();
    $("#add-board-title").submit(function(event) {
        event.preventDefault(); //Prevents the default behavior, wouldn't refresh everything
        var title = $("#form-input").val();
        $('#form-input').val('');
        if( title == '' ){
            alert("Please enter a title!");
        } else {
            addNewBoardWithTitle(title);
            clickToHide();
        }
    })
});
