const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(companyObject, companyName) {
    if (!companyObject || !companyObject.clients) {
        return "Відсутні дані";
    }

    if (companyObject.name === companyName) {
        return companyObject
    }

    for (let i = 0; i < companyObject.clients.length; i++) {
        let client = companyObject.clients[i];

        if (client.name === companyName) {
            return client
        }

        if (client.partners) {
            for (let j = 0; j < client.partners.length; j++) {
                let partner = client.partners[j];
                
                if (partner.name === companyName) {
                    return partner
                }

                let partnerResult = findValueByKey(partner, companyName);
                
                if (partnerResult !== "Відсутні дані") {
                    return partnerResult
                }
            }
        }
    }
    
    return "Компанію не знайдено"
}


let client = 'Клієнт 1.2'
let companyInfo = findValueByKey(company, client)
console.log(companyInfo)


