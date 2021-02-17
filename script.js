

let myLibrary = [];

const testButton = document.getElementById("testButton");
const displayCase = document.getElementById("displayCase"); //Let's grab a new box called display case with our tentacles
const addBookButton = document.getElementById("addBook"); // let's also grab a button called addBook
const deleteButtons = document.getElementsByClassName("delete") //grab those delete buttons
const markButtons = document.getElementsByClassName("markRead") //grab those delete buttons



addBookButton.addEventListener("click",() => {addBookToLibrary(), displayBooks()}); // let's listen on that addBookButton
displayCase.addEventListener('click', event => {
    let target = event.target;
    
    if(target.className == 'delete'){
       removeBookFromLibrary(myLibrary, target.parentNode.id);
       displayCase.removeChild(target.parentNode)

       displayBooks();
    };
    
    if(target.className == 'markRead'){
        myLibrary[target.parentNode.id].read = !myLibrary[target.parentNode.id].read
        console.log(`${myLibrary[target.parentNode.id].read}`)
        displayBooks();
    };
});


testButton.addEventListener("click",() => (console.table(myLibrary)));

function Book(name, author, pages, read){ //Let's define a new class of object to populate our library array
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary(){ //We need a function to put new books into our library, here it is. It pushes info from the entry fields into a new book
    myLibrary.push(

        new Book(
            document.getElementById('title').value,
            document.getElementById('author').value,
            document.getElementById('pages').value,
            document.getElementById('read').checked
            )
    )
    document.getElementById('title').value = null,
    document.getElementById('author').value = null,
    document.getElementById('pages').value = null,
    document.getElementById('read').checked = null
    
};

function removeBookFromLibrary(someArray, anIndex){
    someArray.splice( anIndex, 1);
};

function displayBooks(){ // this one should display the books, but oops it accidentally loops through and displays them all every time we hit the button... so lets just make a new list every time
    
    while (displayCase.firstChild) {displayCase.removeChild(displayCase.firstChild)}; //when called, while there are items on the dom. Delete them all first

    for (i in myLibrary){ // for each item in this array, make a new dom element for it, give it an id of it's array index and give it some inner html that relates to its content
        let newBook = document.createElement('div')
            newBook.id = i
            newBook.innerHTML = 
                `
                <br>
                Title : ${myLibrary[i].name}
                <br>
                Author : ${myLibrary[i].author}
                <br>
                Pages : ${myLibrary[i].pages}
                <br>
                Read : ${myLibrary[i].read}
                <br>
                <button class= "delete"> delete ${myLibrary[i].name} </button>
                <br>
                <button class= "markRead"> Toggle Read Status</button>
                `
        displayCase.appendChild(newBook); // append each of these to the dom
    }
};


// 2/11/21
// My first attempt below. I tried to make it so that elements were added directly
// rather than from the array myLibrary[]. I ran into problems when trying to add the delete button listener
// and thought it better to go back and retool my code so that I have a loop for display rather than an object
// ALSO forsaw potential problems when trying to remove items from the array without leaving empty holes.
// learned it is probable best to lead with the data and then implement the visuals after - <3 JCROPS


// function displayBooks(){
//     let bookIndex = myLibrary[myLibrary.length - 1]
//     let bookName = bookIndex.name
    
//     let freshBook = document.createElement("div");
//         freshBook.innerHTML = bookName
//         freshBook.setAttribute("id", bookIndex)

//         displayCase.appendChild(freshBook);

//         let freshDescription = document.createElement("div")
//             freshDescription.innerHTML = bookIndex.info
//             freshBook.appendChild(freshDescription);

//         let deleteButton = document.createElement("button")
//         deleteButton.innerHTML = `Remove "${bookName}" from collection`
//         deleteButton.setAttribute( "class", "delete")
//         freshBook.appendChild(deleteButton);

//         console.table(myLibrary)
    
// };
// let deletes = document.getElementsByClassName('delete');

// for(let i = 0; i < deletes.length; i++){
//     deletes[i].addEventListener('click', () => console.log('works'))
//     console.log('works2')
// };

// constant removeBookButton = document.getElementsByClassName("delete")
// removeBookButton.addEventListener("click",() => { console.log(works)})

       


   // for (i = 0; i = myLibrary.length; i++){
    //     // let btn = document.createElement("button")
    //     // btn.innerHTML = "works";
    //     // document.body.appendChild(btn);
    // };

    // myLibrary.forEach(element => 
    //     document.createElement("button")
    // );

    // myLibrary.forEach(
    // let bk = document.createElement('div')
    // bk.innerHTML = this.name + this.info
    // document.body.appendChild(bk)
    
    // let freshy = myLibrary[myLibrary.length]
    // document.addmyLibrary.length
    // console.log(myLibrary.length)


    // let theHobbit = new Book('The Hobbit','The Hobbit by J.R.R Rolkien, 295 pages, not read yet')




