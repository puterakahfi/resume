Vue.component('profile',{
    template: '#profile',
    data : function(){
        return {
            profile: [] 
        }},
    mounted: function(){
        this.fetchProfile();
    },
    methods: {
        fetchProfile: function(){
             Vue.http.get('resume.json')
            .then((response) =>{
                console.log(response.body);
                this.profile = response.body.basics;
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

