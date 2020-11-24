
const mainPage = document.getElementById('mainPage')
const movieDescription = document.getElementById('movieDescription')

let movies = [
    {
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        id: "1",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        id: "2",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }]
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        id: "3",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ]
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        id: "4",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        id: "5",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: []
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        id: "6",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }]
    }
]
let name = ''
let comment = ''
let eventID

showCards()

function showCards() {
    mainPage.innerHTML = ''
    movies.map(item => {

        let movieCard = document.createElement('div')
        movieCard.classList.add('movieCard')

        let imageDiv = document.createElement('div')
        imageDiv.classList.add('imageDiv')

        let image = document.createElement('img')
        image.classList.add('border')
        image.src = item.image

        let title =  document.createElement('h2')
        title.classList.add('title')
        title.innerText = item.title
        title.setAttribute('id', item.id)

        let year = document.createElement('h4')
        year.classList.add('year')
        year.innerText = `Released in: ${item.year}`

        let rating = document.createElement('div')
        rating.classList.add('rating')
        rating.innerText = `Rating: ${item.rating}`

        mainPage.appendChild(movieCard)
        movieCard.appendChild(imageDiv)
        imageDiv.appendChild(image)
        movieCard.appendChild(title)
        movieCard.appendChild(year)
        movieCard.appendChild(rating)

        title.addEventListener('click', openMovie)
    })
}

function backToList(){
    mainPage.style.display = 'flex'
    movieDescription.style.display = 'none'
    showCards()
}

function openMovie(event){
    movieDescription.innerHTML = ''

    mainPage.style.display = 'none'
    movieDescription.style.display = 'block'
    generateHTML(event.target.id)

}

function fInputName(event){
    name = event.target.value
}

function fInputCom(event){
    comment = event.target.value
}

function submitCom(event){
    eventID = event.target.id
    console.log(name, comment)
    movies.map(item => {
        if(event.target.id === item.id){
            let commentObj = {
                name: name,
                comment: comment
            }
            item.comments.push(commentObj)
        }
    })
    generateHTML(eventID)
}

function generateHTML(id){
     movieDescription.innerHTML = ''

     movies.map(item => {
         if(id === item.id){

             let backBtn = document.createElement('div')
             backBtn.innerText = 'Back To Movie List'
             backBtn.classList.add('backBtn')

             let flex = document.createElement('div')
             flex.classList.add('flex')

             let emptyDiv = document.createElement('div')

             let imgInDescription = document.createElement('img')
             imgInDescription.src = item.image

             let descriptionBox = document.createElement('div')
             descriptionBox.classList.add('descriptionBox')

             let descriptionTitle = document.createElement('h2')
             descriptionTitle.innerText = item.title
             descriptionTitle.classList.add('descriptionTitle')

             let descriptionYear = document.createElement('h3')
             descriptionYear.innerText = `Released in: ${item.year}`
             descriptionYear.classList.add('descriptionYear')

             let description = document.createElement('p')
             description.innerText = item.description
             description.classList.add('description')

             let comSection = document.createElement('div')
             comSection.classList.add('comSection')

             item.comments.map(el => {

                 let commentBox = document.createElement('div')
                 commentBox.classList.add('commentBox')
                 commentBox.setAttribute('id', 'item.id')

                 let commentAuthor = document.createElement('div')
                 commentAuthor.innerText = `${el.name}:`
                 commentAuthor.classList.add('commentAuthor')

                 let comment = document.createElement('div')
                 comment.innerText = el.comment
                 comment.classList.add('comment')

                 comSection.appendChild(commentBox)
                 commentBox.appendChild(commentAuthor)
                 commentBox.appendChild(comment)
             })

             let inputBox = document.createElement('div')
             inputBox.style.marginTop = '6px'

             let inputNameBox = document.createElement('div')
             inputNameBox.classList.add('flex')

             let name = document.createElement('div')
             name.innerText = 'name :'
             name.classList.add('smth')

             let inputName = document.createElement('input')
             inputName.setAttribute('id', 'inputName')

             let inputComBox = document.createElement('div')
             inputComBox.classList.add('flex')

             let comment = document.createElement('div')
             comment.innerText = 'comment :'
             comment.classList.add('smth')

             let inputCom = document.createElement('input')
             inputCom.setAttribute('id', 'inputCom')
             inputCom.style.width = '79%'

             let submitBtn = document.createElement('button')
             submitBtn.innerText = 'Submit Comment'
             submitBtn.setAttribute('id', item.id)

             movieDescription.appendChild(backBtn)
             movieDescription.appendChild(flex)
             flex.appendChild(emptyDiv)
             emptyDiv.appendChild(imgInDescription)
             flex.appendChild(descriptionBox)
             descriptionBox.appendChild(descriptionTitle)
             descriptionBox.appendChild(descriptionYear)
             descriptionBox.appendChild(description)
             movieDescription.appendChild(comSection)

             movieDescription.appendChild(inputBox)
             inputBox.appendChild(inputNameBox)
             inputNameBox.appendChild(name)
             inputNameBox.appendChild(inputName)
             inputBox.appendChild(inputComBox)
             inputComBox.appendChild(comment)
             inputComBox.appendChild(inputCom)
             inputBox.appendChild(submitBtn)

             backBtn.addEventListener('click', backToList)
             inputName.addEventListener('input', fInputName)
             inputCom.addEventListener('input', fInputCom)
             submitBtn.addEventListener('click', submitCom)

         }
     })
 }
