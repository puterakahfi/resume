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
            console.log(this.$data);
        }}
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

// Vue Instance
new Vue({
    el: '#app',
    data:{
        resume : []
    },
    ready: function(){
        return fetchResume();
    }
    methods:{
        fetchResume :function(){
            this.$http.get('resume.json').success(function(resumeData) {
                this.$data.resume = resumeData; // You don't need to use $set here
                console.log(this.$data);
            }).error(function(error) {
                console.log(error);
            });
        }
    }
})

