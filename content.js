function injectButton(){

    //if the button is already added
    if(document.getElementById('auto-message-button')){
        return;
    }

    const container = document.querySelector('.artdeco-card');

    if(container){
        const button = document.createElement("button");
        button.innerText = 'Generate Message';
        button.id = 'auto-message-button';
        button.style = `
            padding: 8px 12px;
            background-color: #0073b1;
            color: white;
            border: none;
            border-radius: 6px;
            margin-top: 10px;
            cursor: pointer;
            font-weight: bold;`;

        button.onclick = () => {
            alert("Generate Message Clicked");
        }

        //insert into profile
        container.appendChild(button);
    }else{
        console.log("Linked In container not found");
    }
}

setTimeout(injectButton, 2000);