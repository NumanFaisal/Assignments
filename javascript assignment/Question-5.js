let typeOfPackage = "express"

switch (typeOfPackage) {
    case "standard":
        console.log("Your package will be delivered in next 3-5 Days");
        break;
    case "express":
        console.log("Your package will be delivered in next 1-2 Days");
        break;
    case "overnight":
        console.log("Your package will be delivered by tomorrow");
        break;    
    default:
        break;
}