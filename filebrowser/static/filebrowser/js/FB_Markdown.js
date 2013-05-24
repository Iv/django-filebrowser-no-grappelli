function FileSubmit(FileURL) {
    
    // var input_id=window.name.split("___").join(".");
    var input_id = window.name.replace(/____/g,'-').split("___").join(".");
    var input = opener.$('#' + input_id);
    input.trigger('insertion', [{replaceWith: '![[![Альтернативный текст]!]]('+ FileURL +' "[![Заголовок]!]")'}]);

    this.close();
}