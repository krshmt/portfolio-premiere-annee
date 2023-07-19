class TypeWriter{

    constructor({type_writer_element, text_array, typing_delay, erasing_delay, new_text_delay}){
        this.type_writer_element = type_writer_element;
        this.text_array = text_array;
        this.typing_delay = typing_delay;
        this.erasing_delay = erasing_delay;
        this.new_text_delay = new_text_delay;
        this.text_array_index = 0;
        this.char_index = 0;
        this.init();
    }

    init(){
        setTimeout(() => this.typeText(), this.new_text_delay);
    }

    typeText(){
        if(this.char_index < this.text_array[this.text_array_index].length){
            this.type_writer_element.textContent += this.text_array[this.text_array_index].charAt(this.char_index);
            this.char_index++;
            setTimeout(() => this.typeText(), this.typing_delay);

            return;
        }
        setTimeout(() => this.eraseText(), this.new_text_delay);
    }

    eraseText(){
        if(this.char_index > 0){
            this.type_writer_element.textContent = this.text_array[this.text_array_index].slice(0, this.char_index - 1);
            this.char_index--;
            setTimeout(() => this.eraseText(), this.erasing_delay);
            return;
        }
        this.text_array_index++;

        if (this.text_array_index >= this.text_array.length){
            this.text_array_index = 0;
        }
        setTimeout(() => this.typeText(), this.typing_delay);
    }
}

