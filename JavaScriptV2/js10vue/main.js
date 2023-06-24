let data = {
    name: 'Тимофій',
    socials:[
        {
        name: 'Google',
        img: 'https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg'
    },
    {
        name: 'Insta',
        img: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1679666011~exp=1679666611~hmac=ed184a1cdc893b1b71a0381d4f60226bace78bc2f267903335ff8d4a7ec198e1'
    },
    {
        name: 'TikTok',
        img: 'https://support.tunecore.com/hc/article_attachments/360040947812/logo1.png'
    }
    ],
    tovari:[]
}

const SocialsComponent = {
    props: ['social'],
    template: `
    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
        <h2 class="text-center">{{social.name}}</h2>
        <img v-bind:src="social.img" style="width:100px; height: 100px; margin:0 auto;">
    </div>
    `
}

const TovarComponent = {
    props: ['tovar'],
    template: `
    <div class="tovar">
    <div class="img"><img v-bind:src="tovar.img" class="image" alt=""></div>
    <div class="riht_side">
        <div class="name ram x">{{ tovar.name }}</div>
        <div class="developer ram x"><b>Виробник :  {{ tovar.developer }}</b></div>
        
            <div class="price ram x"><b>Ціна : </b> {{ price }} грн.</div>
            <div class="reviews ram x"><b>Відгуків : </b>{{ tovar.reviews }}</div>
        
    </div>
</div>
    `
}

const app = {
    data(){
        return data
    },
    methods: {

    },
    components:{
        SocialsComponent ,
        TovarComponent
    },
    mounted(){
        db.collection('products').get().then(res => {
            res.forEach(tov => {
                let product = tov.data();
                product.id = tov.id;
                this.tovari.push(product)
                
            })
        })
    }
}

Vue.createApp(app).mount('#test')