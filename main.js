function copyText() {
    var copyText = document.getElementById("myParagraph");
    copyText.innerText="<script>alert(11111111)<\/script>"
    var textToCopy = copyText.innerText;
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);  
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
}

  