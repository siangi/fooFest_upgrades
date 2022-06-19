// provides instance functions for validating shopData
// effort to disconnect forms from models/data

function getAmountOfAllTickets(dataContext) {
    return dataContext.tickets.reduce((previous, current) => previous + current.amount, 0);
}

function validateAmountOfPersonForms(dataContext) {
    return dataContext.persons.length === getAmountOfAllTickets(dataContext);
}

function validateTicketAmount(dataContext){
    return getAmountOfAllTickets(dataContext) > 1;
}

function getAvailableTentSpaces(dataContext){
    return dataContext.tents.reduce((previous, current) => previous + (current.amountOfTents * current.spaceForPeople), 0)
}

function validateTentChoice(dataContext){
    return getAvailableTentSpaces(dataContext) >= getAmountOfAllTickets(dataContext);
}

function validateCampground(dataContext){
    return dataContext.campground !== null && dataContext.campground.available > getAmountOfAllTickets(dataContext)
}

function validateAll(dataContext){
    return (validateTicketAmount(dataContext) &&
    validateAmountOfPersonForms(dataContext) &&
    validateTentChoice(dataContext) &&
    validateCampground(dataContext))
}

const ShopHelpers = {
    getAmountOfAllTickets,
    validateAmountOfPersonForms,
    validateTicketAmount,
    getAvailableTentSpaces,
    validateTentChoice,
    validateCampground,
    validateAll
}

export { ShopHelpers as default};


