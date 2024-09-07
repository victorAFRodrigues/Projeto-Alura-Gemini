export class Article {
    constructor(post_category, post_resume) {
      this.post_category = post_category;
      this.post_resume = post_resume;
    }
  
    iterateElements(className, callback) {
      let elements = document.querySelectorAll(className);
  
      elements.forEach((element) => {
        callback(element);
      });
    }
  
    addBreaksToCategory(categorySelector) {
        const articles = document.querySelectorAll(categorySelector);



        for(let j = 0; j < articles.length; j++) {
            let article = articles[j];
            let category = '';
            for (let i = 0; i < article.innerText.length; i++) {
                category += article.innerText[i];
    
                if ((i + 1) % 14 === 0 && i !== 0) {
                    category += '<br>';
                }
               
            }
            article.innerHTML = category;

        }
        
        
    }
  
    limitCharacters(elemento, limite) {
      const textoOriginal = elemento.textContent;
        const textoTruncado = textoOriginal.substring(0, limite);
    
        if (textoOriginal.length > limite) {
            elemento.textContent = textoTruncado + '...';
        }
    }
  
    main() {
      console.log(this.post_category)
      console.log(this.post_resume)
      this.addBreaksToCategory(this.post_category)
      
      this.iterateElements(this.post_resume, (element) => {
        this.limitCharacters(element, 60);
      });
    }
  }
