
export class Noticia {
  
    public titulo: string;
    public texto: string;
    public imagem: string;
    public id: number;

    constructor(titulo: string, imagem: string, texto: string, id: number){
        this.imagem = imagem;
        this. titulo = titulo;
        this.texto = texto;
        this.id = id;
    }

}