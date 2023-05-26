import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../shared/model/libro';
import { LibroService } from '../shared/libro.service';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libro: Libro = new Libro();
  
  constructor(private LibroService: LibroService) {
  }

  ngOnInit() {
  }

  form = new FormGroup({
    fullUserName: new FormControl('', [Validators.required]),
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    Identification: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,]),
    contrasena: new FormControl('',[Validators.required])
    
  });



  btnlibro():void{
    this.LibroService.create(this.libro).subscribe()
    console.log(this.libro.titulo)
    console.log(this.libro.referencia)
    console.log(this.libro.autor)
    console.log(this.libro.precio)
    console.log(this.libro.ubicacion)
  }

}
