function ticketPrice(ticketQuantity){
    const firstHundredRate = 100;
    const secondHundredRate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= firstHundredRate){
        const price = ticketQuantity * firstHundredRate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const firstHundredPrice = 100 * firstHundredRate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * secondHundredRate;
        const totalPrice = firstHundredPrice + restTicketPrice;
        return totalPrice;
    } else {
        const firstHundredPrice = 100 * firstHundredRate;
        const secondHundredPrice = 100 * secondHundredRate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = firstHundredPrice + secondHundredPrice+restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(290);
console.log(price);//25300