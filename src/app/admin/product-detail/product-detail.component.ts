
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public api:ApiService
    ) 
    { 
    
  }

  ngOnInit(): void {
  }

  saveData(){
    //jika id tidak terdefinisi maka buat data
    if(this.data.id == undefined){
      //prosedur pengiriman data menggunakan metode POST
      this.api.post('books', this.data).subscribe(result=>{
        //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
        this.dialogRef.close(result); //close() utk meutup perintah dialog dan this.data akan mengirimkan data ke asal komponennya kemudian dimasukkan kedalam koleksi(array data)
      }, error=>{
        //kondisi jika terjadi masalah pengiriman data
        alert(error);
      })
    } else {
      this.api.update('books/'+this.data.id, this.data).subscribe(result=>{
        // console.log(result);
        this.dialogRef.close();
      },error=>{
        alert(error);
      })
    }
    
  }



}
