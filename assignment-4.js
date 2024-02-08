function calculateMoney(ticketSale) {

    if (ticketSale <= 0 || typeof ticketSale !== "number") {
        return "please provide a valid integer number";
    } else {
        const ticketPrice = 120;
        const parDayCost = (500 + (8 * 50));
        const parDayTicketSale = ticketPrice * ticketSale;

        const parDayIncome = parDayTicketSale - parDayCost;

        return parDayIncome;
    }
}




function checkName(name) {
    if (typeof name !== "string") {
        return 'invalid';
    }

    const spacesRemove = name.trim();
    const lastCharacter = spacesRemove.charAt(spacesRemove.length - 1).toLowerCase();
    if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastCharacter)) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}




function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please provide an array.";
    } else {
        let newArray = [];

        for (let item of array) {
            if (typeof item === "number" && !isNaN(item)) {
                newArray.push(item);
            }
        }
        return newArray;
    }
}





function password(obj) {
    if (Array.isArray(obj) || typeof obj !== "object") {
        return "invalid";
    } else {
        if (Object.keys(obj).length !== 3 || !("name" in obj) || !("birthYear" in obj) || !("siteName" in obj)) {
            return "invalid";
        } else {
            const name = obj.name;
            const birthYear = obj.birthYear;
            const siteName = obj.siteName;

            const siteNameUpp = siteName.charAt(0).toUpperCase() + siteName.slice(1);

            const strBirthYear = birthYear.toString();
            const checkBirthYearLength = strBirthYear.length;

            if (typeof name !== "string" || typeof siteName !== "string") {
                return "invalid"
            } else if (checkBirthYearLength !== 4 || typeof birthYear !== "number") {
                return "invalid"
            } else {
                const newPwd = `${siteNameUpp}#${name}@${birthYear}`;

                return newPwd;
            }
        }
    }
}




function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    } else {
        let texFreeIncome = 0;
        let taxedIncome = 0;

        for (let item of arr) {
            if (item >= 3000) {
                taxedIncome += item;
            } else {
                texFreeIncome += item;
            }
        }

        const totalTexIncome = taxedIncome - (taxedIncome * 20) / 100;
        const totalIncome = totalTexIncome + texFreeIncome;
        const remainingAmount = totalIncome - livingCost;

        if (remainingAmount >= 0) {
            return remainingAmount;
        } else {
            return "Earn more";
        }
    }
}