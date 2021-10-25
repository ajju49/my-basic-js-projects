let data = [
    {
        name: 'Payal',
        age: "28"
        
    },
    {
        name: 'Rutuja',
        age: "25"
    },
    {
        name: 'Monika',
        age: "25"
    },
    {
        name: 'Akash',
        age: "24"
    },
    {
        name: 'Vishal',
        age: "28"
    },
    {
        name: 'Nandkumar',
        age: "30"
    },
   {

        name: 'Anil',
        age: "24"
    },  
    {

        name: 'Ajinkya',
        age: "28"
    },  
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name  + '</div>';
});

info.innerHTML = details.join('\n');