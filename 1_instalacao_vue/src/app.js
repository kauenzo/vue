const MyNameApp = {
    data(){
        return{
            name: "",
            idade: 22,
            parada: "cardiaca",
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name)

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount('#app');