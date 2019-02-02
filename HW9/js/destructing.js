// задача 1
function destructing() {
    const params = Array.prototype.slice.call(arguments);
    if(!params.length) return 0;
    let newObj = {};
    let [first, ...other] = params;
    newObj.first = first;
    newObj.other = other;
    return newObj;
}

console.log(destructing('a', 'b', 'c', 'd'))

// задача 2
const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};

function getInfo(organisation) {
    if(typeof organisation !== 'object') return console.log(`укажите объект`);
    let { name = 'Unknown', info: { partners } } = organisation;
    partners = partners.slice(0, 2).join(' ');
    console.log(`Name: ${name}`);
    console.log(`Partners: ${partners}`);
}

getInfo(organisation);