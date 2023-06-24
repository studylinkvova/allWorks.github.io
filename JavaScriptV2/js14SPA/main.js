document.addEventListener('DOMContentLoaded', async function(){
    let not_found = await axios.get('templates/404.html');
    let home =      await axios.get('templates/home.html');
    let products =      await axios.get('templates/products.html');

    const data = {
        test: 'Привіт',
        currentPath: window.location.hash,
        content: []
    }

    const Home = {
        template: home.data
    }

    const NotFound = {
        template: not_found.data
    }

    const Products = {
        template: products.data,
        methods: {
            getProducts(){
                db.collection('products').get().then(res => {
                    this.$root.content = [];
                  res.forEach( doc => {
                    let prod = doc.data();
                    prod.id = doc.id;
                    this.$root.content.push(prod)
                                  })
                            this.$root.forceUpdate();      
                            this.forceUpdate();      
                })
            }
        },
        mounted(){
            this.getProducts();
        }
    }

    const routes = {
        '/': Home,
        '/not-found': NotFound,
        '/products' : Products
    }




    const app = {
        data(){
            return data
        },
        methods: {
           
        },
        components: {
            
        },
        computed: {
            currentView(){
                return routes[this.currentPath.slice(1) || '/' || NotFound]
                console.log(this.currentPath.slice(1))
                console.log(this.currentPath)
            }
        },
        mounted(){
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash;
                console.log('hash change')
            });
            

        }
    }
    Vue.createApp(app).mount('#app')
})