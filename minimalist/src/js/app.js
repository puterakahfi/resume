Vue.component('profile',{
    template: '#profile',
    data : function(){
        return {
            profile:[]
        }},
    ready: function(){
        this.fetchProfile();
    },
    methods: {
        fetchProfile: function(){
        alert("call");
            var profile= [];
            var profile = Vue.http.get('resume.json')
            .then((response) =>{ 
                alert(response.json());
                return  response.json(); 
            })
                .catch( function(error) { 
                    console.error(error); 
                });
        }
    }
});

new Vue({
    el: '#app',
})

