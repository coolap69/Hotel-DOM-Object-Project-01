var hotel = { 
    name: 'Biltmore',
    rooms: '500',
    roomsBooked: 150,
    roomService: true,
    pool: false,
    
    roomsAvail: function() {
       return this.rooms - this.roomsBooked;
        
    }
};

 function available() {
                document.getElementById("hotel").innerHTML = hotel.name;
                document.getElementById("totalrooms").innerHTML = hotel.roomsBooked;
                document.getElementById("availablerooms").innerHTML = hotel.roomsAvail();
            }
  
 