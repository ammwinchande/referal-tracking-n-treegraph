/**
 * Formats unstructured array of customers to treeGraph API structure
 *
 * @param array unstructuredJsonArr
 *
 * @return json
 */
function treeGraphStructuredJSON(unstructuredJsonArr) {
    let structuredJSONArr = []

    unstructuredJsonArr.forEach((custObject, index) => {
        if (custObject.children.length !== 0) {
            if (structuredJSONArr.length !== 0) {
                structuredJSONArr[0].children.forEach((structObj, index) => {
                    if (custObject.customer === structObj.customer) {
                        // check if has children
                        if (custObject.children.length !== 0) {
                            structuredJSONArr[0].children[index] = {
                                ...structuredJSONArr[0].children[index],
                                children: [],
                            }
                            custObject.children.forEach(element => {
                                structuredJSONArr[0].children[index].children.push({
                                    customer: element.name,
                                })
                            })
                        }
                    } else {
                        if (
                            typeof structuredJSONArr[0].children[index].children !==
                            'undefined'
                        ) {
                            structuredJSONArr[0].children[index].children.forEach(
                                (structObj, id) => {
                                    if (custObject.customer === structObj.customer) {
                                        if (custObject.children.length !== 0) {
                                            structuredJSONArr[0].children[index].children[id] = {
                                                ...structuredJSONArr[0].children[index].children[id],
                                                children: [],
                                            }
                                            custObject.children.forEach(element => {
                                                structuredJSONArr[0].children[index].children[id].children.push({
                                                    customer: element.name,
                                                })
                                            })
                                        }
                                    }
                                }
                            )
                        }
                    }
                })
            } else {
                structuredJSONArr.push({ customer: custObject.customer })
                structuredJSONArr[index] = { ...structuredJSONArr[index], children: [] }
                custObject.children.forEach(element => {
                    structuredJSONArr[index].children.push({ customer: element.name })
                })
            }
        } else {
            structuredJSONArr[0].children.forEach(child => {
                if (custObject.customer === child.customer) {
                    // check if has children
                    if (custObject.children.length !== 0) {
                        child = { ...child, children: [] }
                        custObject.children.forEach(element => {
                            child.children.push({ customer: element.name })
                        })
                    }
                }
            })
        }
    })
    return structuredJSONArr
}


// sample data to pass
let unstructuredJsonArr = [
    {
        customer: 'A',
        children: [
            {
                id: '1',
                name: 'B',
            },
            {
                id: '2',
                name: 'C',
            },
            {
                id: '3',
                name: 'D',
            },
        ],
    },
    {
        customer: 'B',
        children: [],
    },
    {
        customer: 'C',
        children: [
            {
                id: '4',
                name: 'E',
            },
        ],
    },
    {
        customer: 'E',
        children: [
            {
                id: '5',
                name: 'F',
            },
        ],
    },
    {
        customer: 'D',
        children: [],
    },
]

console.log('SOLUTION 2 RESULT')

// calling treeGraphStructuredJSON with correct params, name is required
let formattedCustomersFroTreeGraphAPI = treeGraphStructuredJSON(
    unstructuredJsonArr
)
console.log(formattedCustomersFroTreeGraphAPI)
