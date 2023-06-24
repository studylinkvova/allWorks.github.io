function displayMessage(type, title, message, time){
    let block = document.createElement('div');
    block.classList.add('message-box');

    let content = document.createElement('div');
    content.classList.add('message-content');
    content.classList.add(type);

    block.appendChild(content)

    let header = document.createElement('div');
    header.classList.add('message-header');
    header.innerText = title;

    let text = document.createElement('div');
    text.classList.add('message-text');
    text.innerText = message;

    let line = document.createElement('div');
    line.classList.add('message-time-line');

   content.appendChild(header)
   content.appendChild(text)
   content.appendChild(line)

     document.body.appendChild(block)


     line.style.width = '100%';
    let difference = 1000/time;
     let lineMove = setInterval(function(){
        line.style.width = `${Number(line.style.width.replace('%','')) - difference}%`
        if(Number(line.style.width.replace('%','')) < 1){
            clearInterval(lineMove);
            document.body.removeChild(block);
        }
        
     }, 10)

}
displayMessage('message-info', 'Test header', 'test text massage', 4000)
