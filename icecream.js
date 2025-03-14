const buttons=document.querySelectorAll('.btn');
const container=document.querySelectorAll('.container');
const searchBox=document.querySelectorAll('#search');


searchBox.addEventListener('keyup', (e)=>{
    searchText=e.target.value.toLowerCase().trim();
});

