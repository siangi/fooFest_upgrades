// provides instance functions for validating shopData
// effort to disconnect forms from models/data

function getAmountOfAllTickets(dataContext) {
    return dataContext.tickets.reduce((previous, current) => previous + current.amount, 0);
}

function validateAmountOfPersonForms(dataContext) {
    return dataContext.persons.length >= getAmountOfAllTickets(dataContext);
}

function validateTicketAmount(dataContext){
    return getAmountOfAllTickets(dataContext) > 1;
}

function getAvailableTentSpaces(dataContext){
    return dataContext.tents.reduce((previous, current) => previous + (current.amountOfTents * current.spaceForPeople), 0)
}

function validateTentChoice(dataContext){
    return dataContext.ownTents || (getAvailableTentSpaces(dataContext) >= getAmountOfAllTickets(dataContext));
}

function validateCampground(dataContext){
    return dataContext.campground !== null && dataContext.campground.available > getAmountOfAllTickets(dataContext)
}

function validateAllWithMessage(dataContext){
    const messages = [];
    if (!validateTicketAmount(dataContext)){
        messages.push("you must purchase at least one ticket");
        // if there are no tickets, just leave because all the others are gonna be invalid too.
        return messages.join("")
    }
    if(!validateTentChoice(dataContext)){
        messages.push("you have not ordered enough tents for all people!");
    }
    if(!validateAmountOfPersonForms(dataContext)){
        messages.push("you have not entered all personal info!");
    }
    if(!validateCampground(dataContext)){
        messages.push("there is not enough space on the campground you chose!");
    }
    return messages.join(", ");
}

const ShopHelpers = {
    getAmountOfAllTickets,
    validateAmountOfPersonForms,
    validateTicketAmount,
    getAvailableTentSpaces,
    validateTentChoice,
    validateCampground,
    validateAllWithMessage
}

export { ShopHelpers as default};


