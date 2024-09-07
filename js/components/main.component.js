


class Component{

    createElement(tagName, content){
        let newTag = document.createElement(tagName)
        newTag.innerHTML = content
        return newTag
    }

    createSimple(querySparent, element, datalist = [], ...args){
        if (querySparent && element && datalist){
            let parent = document.querySelectorAll(querySparent)
            datalist.forEach((item)=>{
                let newComponent = this.createElement(element, item)
                parent.appendChild(newComponent)
            })
        }
        return 0;
    }

    createPostCard(querySparent){
        let htmlcard = `
        
        `;

    }
}