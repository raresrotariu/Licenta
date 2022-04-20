export class Filedata {
  id: string = '';
  name:string = '';
  file:File ;
  url:string = '';
  email:string = '';
  citit:string='';
 // cod:string = '';

  constructor(file:File){
    this.file=file;
  }
}
