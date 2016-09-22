var profile = Vue.http.get('resume.json')
    .then((response) =>{ 
        return  response.json(); 
    })
    .catch( function(error) { 
        console.error(error); 
    });
console.log(profile);

Vue.component('profile',{
    template: '#profile',
    data : function(){
        return profile
    }
});

new Vue({
    el: '#app',
})

