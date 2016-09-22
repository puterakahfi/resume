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
        return {
            profile:[]
        }},
    ready: function(){
        this.fetchProfile();
    },
    methods: {
        fetchProfile: function(){
            var profile= [];
            this.$http.get('resume.json')
                .success(function(profile){
                    this.$set('profile', profile);
                });
        }
    }
});

new Vue({
    el: '#app',
})

