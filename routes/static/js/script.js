////////////////////////////////////
// VARIABLES
////////////////////////////////////

var boards = [];
var local_key = 'boards';


/////////////////////////////////////
// PROXY
////////////////////////////////////

// Convert Boards list to JSON
function convertToJson(){
    var jstring = JSON.stringify(boards);
    return jstring;
}


/////////////////////////////////////
// BOARD CLASS
/////////////////////////////////////

function Board(title) {
    this.title = title;
    this.lists = [];
    this.id = 'board_'+ this.title;
}


// Create new board object
function addNewBoardWithTitle(title, div_id) {
    var board = new Board(title, div_id);
    boards.push(board);
    saveBoardsToLocalStorage();
}


///////////////////////////////////////
// LOCAL STORAGE
////////////////////////////////////////



// Save to local storage
function saveBoardsToLocalStorage() {
    jstring = convertToJson();
    localStorage.setItem(local_key, jstring);
    showLastBoard();
}

// Get data from local storage
function getDataFromLocalStorage() {
    var storage_data = localStorage.getItem(local_key);
    boards = JSON.parse(storage_data);
    if(!boards){
        boards = [];
    }
    return boards;
}



////////////////////////////////////////////
// DISPLAY BOARDS
////////////////////////////////////////////

// Display the new board immediately after it's creation
function showLastBoard() {
    var boards = getDataFromLocalStorage();
    var board = boards[boards.length-1];
    var title = board.title;
    var id = board.id;
    var htmlBoard = $("<div id="+ "'" + id + "' class='board'><p>" + title + "</p></div>");
    htmlBoard.insertAfter("#add-board-title");
}

// Display all boards on the home screen
function displayBoards() {
    var boards = getDataFromLocalStorage();
    for (var i in boards) {
        var board = boards[i];
        var title = board.title;
        var id = board.id;
        var htmlBoard = $("<div id="+ "'" + id + "' class='board'><p>" + title + "</p></div>");
        htmlBoard.insertAfter("#add-board-title");
    }
}

// Get board from boards lis by ID
function getBoardById(idString){
    for (var i in boards){
        if (idString === boards[i]['id']) {
            return boards[i]['title'];
        }
    }
}


//Hide all Boards when one of them is called and return the it's ID
function clickToHide() {
    $('.board').click(function (event) {
        event.preventDefault();
        $('.board').fadeTo(200, 0);
        var board_id =  ($(this).attr('id'));
        var title = getBoardById(board_id);
        changeFormId('#add-board-title', 'new-list-title', 'Add new list title');
        currentPageTitle(title);
    });
}


//Change id and placeholder of forms
function changeFormId(oldId, newId, newPlaceHolder){
    $(oldId).attr('id', newId);
    $('#form-input').attr('placeholder', newPlaceHolder);

}

//Change title of current page
function currentPageTitle(pageTitle) {
    $('#page-title-text').text(pageTitle);
}

