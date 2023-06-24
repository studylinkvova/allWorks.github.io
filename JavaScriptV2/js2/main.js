const firebaseConfig = {
    apiKey: "AIzaSyBncRCJ_WqhVHd0xH4ptADXZBd6YYF0Evg",
    authDomain: "study-link-sb14ch2.firebaseapp.com",
    projectId: "study-link-sb14ch2",
    storageBucket: "study-link-sb14ch2.appspot.com",
    messagingSenderId: "162500883967",
    appId: "1:162500883967:web:15cb47f69ab1472d4de3ca"
  };
  firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();
let spiner = document.getElementById('spiner');
let list = document.getElementById('list');

let articles = [];

db.collection("articles").get().then( res => {
    spiner.style.display = "none";
    res.forEach( doc => {
        const article = doc.data();
        articles.push(article);
        drawArticle(article)
    });
    console.log(articles);
});

function drawArticle(data){
    const article = document.createElement('article');  // Створюємо новий html елемент article

    const title = document.createElement('h2');         // Створюємо новий html елемент h2 (заголовок для article) 
    const text = document.createElement('div');         // Створюємо новий html елемент div (контейнер для тексту у article) 
    const author = document.createElement('a');         // Створюємо новий html елемент а (посилання на ресурс у article)

    title.innerHTML  = data.title;                      // Додаємо відповідні тести у потрібні блоки статті. 
    text.innerHTML   = data.article;                    // Використовуютсья .innerHTML для того, щоб враховуватии htьl теги збержені у базі данних
    author.innerHTML = "Оригінал";
    author.href      = data.author;

    article.appendChild(title);                         // Вставляємо заголовок у елемент article
    article.appendChild(text);                          // Вставляємо текст у елемент article
    article.appendChild(author);                        // Вставляємо посилання у елемент article

    list.appendChild(article);                          // Вставляємо article у елемент на нашій стоорінці
}