<template>
    <div class="test__box">{{dataA}}</div>
</template>
<script lang="ts">
    import {Component, Prop, Emit, Watch, Vue} from 'vue-property-decorator'
    import axios from 'axios'
    
    @Component
    export default class Test extends Vue {
        // data
        dataA: string = 'test'
        // prop
        @Prop({ default: 11 }) propA: number
        //watcher
        @Watch('child')
        onChildChanged (val: string, oldVal: string) {}
        @Watch('person', { immediate: true, deep: true })
        onPersonChanged (val: string, oldVal: string) {}
        // created
        created () {
            this.login();
            console.log(process.env.VUE_APP_MOCK_URL);
        }
        transformRequest(data: any){
            let ret = "";
            for (let i in data){
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret;
        }
        // methods
        login(){
            var root = this;
            axios.post('api/xapi/login',this.transformRequest({mobile:18030193065,password:123456})).then(function (response) {
                root.dataA = response.data.data.token;
            })
        }
        
    }
</script>
