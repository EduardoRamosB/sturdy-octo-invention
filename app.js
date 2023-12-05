const myEvent = {
  name: 'Birthday Party',
  printGuestList(){
    console.log('Guest List for ' + this.name)
    return 'Lalo'
  }
}
console.log(myEvent.printGuestList())