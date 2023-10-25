This is another coding challenge I had to do for an interview. 
I was provided with the html file and some of the styles.

In order to expand and collapse I did the following:

Instead of using a display: none and display: block approach, I put a height:0 and overflow:hidden in the card. This allows the text to be inside this 0 height and not being shown at all.

Then I linked the click event target with its closest card (parent). So that when a button is clicked, I toggle the class name 'show' to show the text of that card.

Pretty simple but elegant exercise