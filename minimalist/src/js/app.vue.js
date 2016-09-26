'use strict';

/**
* profile component
**/
Vue.component('profile',{
    template: '#comp-profile',
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
                this.profile = response.body;
            })
                .catch( function(error) {
                    console.error(error);
                });
        }
    }
});

Vue.component('contacts',{
    template: '#comp-contacts',
    data: function(){
        return {
            contacts : []
        } 
    }
});

Vue.component('awards',{
    template: '#comp-awards',
    data: function(){
        return {
            awards : []
        }
    }
});

Vue.component('skills',{
    template:'#comp-skills',
    data: function(){
        return {
            skills: []
        }
    }
});
// Vue Instance
new Vue({
    el: '#app',
})

