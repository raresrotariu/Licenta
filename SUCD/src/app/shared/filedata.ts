export class Filedata {
  id: string = '';
  name:string = '';
  file:File ;
  url:string = '';
  email:string = '';
  cod:string = '';

  constructor(file:File){
    this.file=file;
  }
}
