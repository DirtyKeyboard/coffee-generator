import {Button, Header,  Dropdown, Label} from 'semantic-ui-react'
import {useState} from 'react'


function App() {
  const [gen, setGen] = useState("Generate a Coffee using this Button!")
  const [cat, setCat] = useState("All")
  const HOTCOFFEE = [
    "Americano",
    "Veranda Blend",
    "Pike Place",
    "Dark Roast",
    "Cafe Misto",
    "Cappuccino",
    "Espresso",
    "Espresso Con Panna",
    "Flat White",
    "Honey Almondmilk Flatwhite",
    "Latte",
    "Cinnamon Dolce Latte",
    "Blonde Vanilla Latte",
    "Caramel Macchiato",
    "Espresso Macchiato",
    "Mocha",
    "White Chocolate Mocha"
  ]
  
  const HOTTEA = [
    "Chai Tea",
    "Chai Tea Latte",
    "Earl Grey Tea",
    "London Fog Tea Latte",
    "Royal English Breakfast Tea",
    "Royal English Breakfast Tea Latte",
    "Emperors Clouds and Mist",
    "Matcha Tea",
    "Honey Citrus Mint Tea",
    "Jade Citrus Mint Tea",
    "Mint Majesty",
    "Peach Tranquility"
  ]
  
  const HOTDRINK = [
    "Hot Chocolate",
    "White Hot Chocolate",
    "Caramel Apple Spice",
    "Steamed Apple Juice",
    "Vanilla Creme",
    "Steamed Milk"
  ]
  
  const FRAPS = [
    "Mocha Cookie Crumble",
    "Caramel Ribbon Crunch",
    "Espresso",
    "Coffee",
    "Caffe Vanilla",
    "Caramel",
    "Mocha",
    "White Mocha",
    "Java Chip",
    "Chocolate Cookie Crumble",
    "Caramel Ribbon Crunch Creme",
    "Strawberry Creme",
    "Chai",
    "Double Chocolaty Chip",
    "Matcha",
    "Vanilla Bean",
    "White Chocolate Creme"
  ]
  
  const COLDCOFFEE = [
    "Chocolate Creme Cold Brew",
    "Salted Caramel Creme Cold Brew",
    "Cold Brew",
    "Cold Brew with Milk",
    "Vanilla Sweet Creme Cold Brew",
    "Nitro Cold Brew",
    "Vanilla Sweet Creme Nitro",
    "Iced Americano",
    "Iced Coffee",
    "Iced Coffee with Milk",
    "Iced Espresso",
    "Toasted Vanilla Shaken Espresso",
    "Brown Sugar Oatmilk Shaken Espresso",
    "Chocoalte Almondmilk Shaken Espresso",
    "Shaken Espresso",
    "Iced Flat White",
    "Honey Almondmilk Flat White",
    "Latte",
    "Cinnamon Dulce Latte",
    "Blonde Vanilla Latte",
    "Caramel Macchiato",
    "White Chocolate Mocha",
    "Mocha"
  ]
  
  const ICEDTEA = [
    "Black Tea",
    "Black Tea Lemonade",
    "Iced Chai Tea Latte",
    "Peach Green Tea",
    "Peach Green Tea Lemonade",
    "Matcha Tea Latte",
    "Green Tea",
    "Green Tea Lemonade",
    "Matcha Lemonade",
    "Passion Tango Tea",
    "Passion Tango Tea Lemonade"
  ]
  
  const COLD = [
    "Dragon Drink",
    "Mango Dragonfruit Refresher",
    "Mango Dragonfruit Lemonade",
    "Strawberry Acai",
    "Strawberry Acai Lemonade",
    "Pink Drink",
    "Pineapple Passionfruit",
    "Pineapple Passionfruit Lemonade",
    "Paradise Drink",
  ]
  
  const TOPPINGS = [
    "Mocha Sauce",
    "Dark Caramel Sauce",
    "White Mocha Sauce",
    "Chai",
    "Classic Syrup",
    "Honey Blend",
    "Liquid Cane Sugar",
    "Brown Sugar Syrup",
    "Caramel Syrup",
    "Cinnamon Dolce Syrup",
    "Hazelnut Syrup",
    "Peppermint Syrup",
    "Raspberry Syrup",
    "Sugar-Free Vanilla Syrup",
    "Toasted Vanilla Syrup",
    "Vanilla Syrup",
    "Toffee Nut Syrup",
    "Chocolate Creme Cold Foam",
    "Salted Caramel Creme Cold Foam",
    "Vanilla Sweet Creme Foam",
    "Cinnamon Powder",
    "Caramel Drizzle",
    "Mocha Drizzle",
    "Caramel Crunch Topping",
    "Cinnamon Dolce Sprinkes",
    "Cookie Crumble Topping",
    "Whipped Cream",
    "Chocolate Malt Powder",
    "Vanilla Bean Powder"
  ]
  function generateCoffee() {

    //Generate Random Drink
    //Generate Random Num of Toppings
    /*
    String Format:
    Category: {cat}
    Drink: {drink}
    Toppings: {topping1}, {topping2}

    */
    alert(cat)
  }
  const options = [
    { key: 1, text: 'Hot Coffee', value: 1 },
    { key: 2, text: 'Hot Tea', value: 2 },
    { key: 3, text: 'Hot Drink', value: 3 },
    { key: 4, text: 'Frappuccino', value: 4 },
    { key: 5, text: 'Cold Coffee', value: 5 },
    { key: 6, text: 'Iced Tea', value: 6 },
    { key: 7, text: 'Cold Drink', value: 7 }
  ]
  return (
    <div className='ctr'>
      {gen ? 
      <Header as='h1' inverted>{gen}</Header> 
      : null}
      <Button size="massive" inverted icon='coffee' content="Generate Coffee" onClick={generateCoffee}/>
      <br />
      <br />
      <Label>Select Category</Label>
      <br />
      <br />
      <Dropdown clearable options={options} selection onChange={(e, data) => {
        if (typeof(data.value) === 'number')
          setCat(data.value)
        else 
          setCat('All')
        //setCat(`${e.target.value}`)
        }}/>
    </div>
  );
}

export default App;


/* HOT COFFEE [
  Americano
  Veranda Blend
  Pike Place
  Dark Roast
  Cafe Misto
  Cappuccino
  Espresso
  Espresso Con Panna
  Flat White
  Honey Almondmilk Flatwhite
  Latte
  Cinnamon Dolce Latte
  Blonde Vanilla Latte
  Caramel Macchiato
  Espresso Macchiato
  Mocha
  White Chocolate Mocha
]

HOT TEA [
  Chai Tea
  Chai Tea Latte
  Earl Grey Tea
  London Fog Tea Latte
  Royal English Breakfast Tea
  Royal English Breakfast Tea Latte
  Emperors Clouds and Mist
  Matcha Tea
  Honey Citrus Mint Tea
  Jade Citrus Mint Tea
  Mint Majesty
  Peach Tranquility
]

HOT DRINK [
  Hot Chocolate
  White Hot Chocolate
  Caramel Apple Spice
  Steamed Apple Juice
  Vanilla Creme
  Steamed Milk
]

FRAPS [
  Mocha Cookie Crumble
  Caramel Ribbon Crunch
  Espresso
  Coffee
  Caffe Vanilla
  Caramel
  Mocha
  White Mocha
  Java Chip
  Chocolate Cookie Crumble
  Caramel Ribbon Crunch Creme
  Strawberry Creme
  Chai
  Double Chocolaty Chip
  Matcha
  Vanilla Bean
  White Chocolate Creme
]

COLD COFFEE [
  Chocolate Creme Cold Brew
  Salted Caramel Creme Cold Brew
  Cold Brew
  Cold Brew with Milk
  Vanilla Sweet Creme Cold Brew
  Nitro Cold Brew
  Vanilla Sweet Creme Nitro
  Iced Americano
  Iced Coffee
  Iced Coffee with Milk
  Iced Espresso
  Toasted Vanilla Shaken Espresso
  Brown Sugar Oatmilk Shaken Espresso
  Chocoalte Almondmilk Shaken Espresso
  Shaken Espresso
  Iced Flat White
  Honey Almondmilk Flat White
  Latte
  Cinnamon Dulce Latte
  Blonde Vanilla Latte
  Caramel Macchiato
  White Chocolate Mocha
  Mocha
]

ICED TEA [
  Black Tea
  Black Tea Lemonade
  Iced Chai Tea Latte
  Peach Green Tea
  Peach Green Tea Lemonade
  Matcha Tea Latte
  Green Tea
  Green Tea Lemonade
  Matcha Lemonade
  Passion Tango Tea
  Passion Tango Tea Lemonade
]

COLD [
  Dragon Drink
  Mango Dragonfruit Refresher
  Mango Dragonfruit Lemonade
  Strawberry Acai
  Strawberry Acai Lemonade
  Pink Drink
  Pineapple Passionfruit
  Pineapple Passionfruit Lemonade
  Paradise Drink
]

TOPPINGS [
  Mocha Sauce
  Dark Caramel Sauce
  White Mocha Sauce
  Chai
  Classic Syrup
  Honey Blend
  Liquid Cane Sugar
  Brown Sugar Syrup
  Caramel Syrup
  Cinnamon Dolce Syrup
  Hazelnut Syrup
  Peppermint Syrup
  Raspberry Syrup
  Sugar-Free Vanilla Syrup
  Toasted Vanilla Syrup
  Vanilla Syrup
  Toffee Nut Syrup
  Chocolate Creme Cold Foam
  Salted Caramel Creme Cold Foam
  Vanilla Sweet Creme Foam
  Cinnamon Powder
  Caramel Drizzle
  Mocha Drizzle
  Caramel Crunch Topping
  Cinnamon Dolce Sprinkes
  Cookie Crumble Topping
  Whipped Cream
  Chocolate Malt Powder
  Vanilla Bean Powder
]
 */