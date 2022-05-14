function updateContent(obj, id){
    if(obj[id]){
        const content = document.getElementById('content').contentWindow.document;

        for (let [prop, childProp] of Object.entries(obj[id])){
            let element = content.getElementById(prop);

            switch(childProp.type){
                case 'text':
                    element.innerText = childProp.content;
                    break;
                case 'image':
                    element.src = childProp.content;
                    break;
                case 'title':
                    element.innerText = childProp.content;
                    break;
            }
        }
    }
}

document.getElementById('nav_bar').addEventListener('click', event => {
    if (event.target.nodeName.toLowerCase() === 'input'){
        document.getElementById('content').src = event.target.id + '.html';
        
        
        fetch(document.getElementById('json_file').src).then(res => res.json())
            .then(profile => {
                setTimeout(() => updateContent(profile, event.target.id), 10);
            })
            .catch(e => {
                console.log(e);
            });
    }
});