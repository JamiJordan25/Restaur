var books = [
  {
    "name": "Koite Grill",
    "address":"8626 Colesville Rd Silver Spring, MD 20910",
    "phone":"(240) 847-7016",
    "product":"Halal African Food, beef, chicken, lamb",
    "website":"https://koite-grill.business.site/"
  },
  {
    "name": "Halal brothers food truck",
    "address":"8600 Georgia Ave, Silver Spring, MD 20910, United States",
    "phone":"1 240-728-8609",
    "product":"Gyros, Chicken and rice, Chicken Nuggets, Lamb Gyro, Chicken Gyro, French Fries",
    "Website":"Pan Macmillan Australia"
  },
  {
    "name": "Naz's Halal Food",
    "address":"15636 Old Columbia Pike, Burtonsville, MD 20866, United States",
    "phone":"1 240-389-1893",
    "product":"Lamb Rice Platter, Lamb Gyro, Chicken Gyro, Chicken over Rice, Philly Cheese Steak, Chicken Cheese Steak, Hot Wings",
    "website":"http://places.singleplatform.com/nazs-halal-food-6/menu?ref=google"
  },
  {
    "name": "creative Colony",
    "address":"8720 Georgia Ave Ste 302 Silver Spring, MD 20910",
    "phone":"(240) 485-5844",
    "product":"Space For Creativity and Support, ideas, innovation",
    "website":"https://www.creativecolonyspaces.com/",
  },
  {
    "name": "Fias Fab Finds", 
    "address":"806 Upshur St NW Washington, DC 20011",
    "phone":"(202) 492-8278",
    "product":"Thrift Stores, clothing, shoes, scarfs,hats, womens clothes, apparel, belts, jackets, coats,",
    "website":"https://fiasfabfinds.tumblr.com/",
  },
  {
    "name": "Gangster Vegan Organics",
    "address":"6202 Rhode Island Ave Ste 105 Riverdale Park, MD 20737",
    "phone":"(240) 667-2648",
    "product":"vegan, vegitarian, organic, vegitable, raw food,",
    "website":"https://gangstervegandmv.com/",
  },
  {
    "name": "La Belle Visage",
    "address":"8701 Georgia Ave Ste 802 Silver Spring, MD 20910",
    "phone":"(240) 702-4494",
    "product":"Eyelash Service, Waxing, Eyebrow Services",
    "website":"https://squareup.com/appointments/book/850e75c3-b75e-4b99-9ed7-2979afed5f02/8BY5AVPHVWFRD/services",
  },
  {
    "name": "Shala W. Graham Photography",
    "address":"8720 Georgia Ave Ste 302 Silver Spring, MD 20910",
    "phone":"(240) 468-4885",
    "product":"Session Photography",
    "website":"https://www.shalaphotography.com/",
  },
  {
    "name": "Salon Zoma",
    "address":"919 Bonifant Street, Silver Spring, Maryland 20910",
    "phone":"(301) 588-1981",
    "product":"Salon, hair, nails, toenails, makeup",
    "website":"https://salonzoma.com/",
  },
  {
    "name": "Kabob N Karahi",
    "address":"15521 New Hampshire Ave, Silver Spring, MD 20905, United States",
    "phone":"1 301-879-0044",
    "product":"Kabab, curry, stew, chicken, beef, halal, & other Indian/Pakistani dishes, samosa chaat.",
    "website":"https://kabobnkarahi.com/",
  },
  {
    "name": "Amina Thai",
    "address":"8624 Colesville Rd Silver Spring, MD 20910",
    "phone":"(301) 588-3588",
    "product":"Noodles, Spring Rolls, Curry, fried rice, halal",
    "website":"Vintage",
  },
  {
    "name": "shortcake bakery",
    "address":"4700 Rhode Island Avenue Hyattsville, MD 20786",
    "phone":"301-779-2836",
    "product":"sweets, cakes, cupecakes, shortcake",
    "website":"https://www.shortcakebakery.com/",
  },
  {
    "name": "BespokeNotBroke",
    "address":"7042 Carroll Ave Takoma Park, MD 20912",
    "phone":"(240) 582-6912",
    "product":"clothing,shoes, suits, dress clothes, jackets, slacks ",
    "website":"http://BespokeNotBroke.com",
  },
]

var render = function(data) {
var app = document.getElementById('app');
var booksHTMLString = '<ul>'+
  data.map(function(book){
    return '<li>'+
            '<strong>name: </strong>' + book.name + '<br/>' +
            '<strong>address: </strong>' + book.address + '<br/>' +
            '<strong>phone: </strong>' + book.phone + '<br/>' +
            '<strong>product: </strong>' + book.product + '<br/>' +
            '<strong>website: </strong>' + book.website + '<br/>' +
          '</li>';
  }).join('');
  + '</ul>';

app.innerHTML = booksHTMLString;
}
render(books);

var handleSearch = function(event) {
event.preventDefault();
// Get the search terms from the input field
var searchTerm = event.target.elements['search'].value;
// Tokenize the search terms and remove empty spaces
var tokens = searchTerm
              .toLowerCase()
              .split(' ')
              .filter(function(token){
                return token.trim() !== '';
              });
if(tokens.length) {
//  Create a regular expression of all the search terms
var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
var filteredList = books.filter(function(book){
  // Create a string of all object values
  var bookString = '';
  for(var key in book) {
    if(book.hasOwnProperty(key) && book[key] !== '') {
      bookString += book[key].toString().toLowerCase().trim() + ' ';
    }
  }
  // Return book objects where a match with the search regex if found
  return bookString.match(searchTermRegex);
});
// Render the search results
render(filteredList);
}
};

document.addEventListener('submit', handleSearch);
document.addEventListener('reset', function(event){
event.preventDefault();
render(books);
})