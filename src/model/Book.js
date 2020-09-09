// book constructor
function Book(slots) {
  this.title = slots.title;
  this.year = slots.year;
  this.isbn = slots.isbn;
}

Book.instances = {};
// creates a new instance and adds it to Book.instances coll
Book.add = (slots) {
  let book = new Book(slots);
  Book.instances[slots.isbn] = book;
  console.log("Book" + " " + slots.isbn + " created!");
}
