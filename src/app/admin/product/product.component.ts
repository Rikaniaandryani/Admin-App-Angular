import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //mendeklarasikan variable : (tipe data)
  title:any;
  books:any = [];

  constructor(
    public dialog:MatDialog,
    public api:ApiService) {
    
  }

  ngOnInit(): void {
    
    //memanggil vaiable didalam function memakai this
   this.title = "Products";
    
   this.getBooks();
  }

  ProductDetail(book:any, idx:number){
    let dialogRef = this.dialog.open(ProductDetailComponent, {width:'500px', data:book});
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        if(idx=-1){
          this.books.push(res);
          console.log('new data');
        } else {
          this.books[idx]=book;
          console.log('any data');
        }
      }
    })
  }

  DeleteProduct(id: number,idx:number){
    var conf = confirm("delete item?")
    if(conf)
    {
      this.api.delete('books/'+id).subscribe(res=>{
        this.books.splice(idx,1);
      })
    }
  }

  getBooks(){
    this.api.get('books').subscribe(result=>{
      this.books = result;
    })
  }
  //   this.books = [{
  //     title: "Angular for Beginner",
  //     author: "Rikania Andryani",
  //     publisher: "Sunhouse Digital",
  //     year: 2021,
  //     isbn: "873896498271",
  //     price: 70000
  //   },
  //   {
  //     title: "Java for Beginner",
  //     author: "Dzikri Akbar Syawali",
  //     publisher: "Sunhouse Digital",
  //     year: 2020,
  //     isbn: "8738964935231",
  //     price: 80000
  //   },
  //   {
  //     title: "Spring for Beginner",
  //     author: "Dzikri Akbar Syawali",
  //     publisher: "Sunhouse Digital",
  //     year: 2020,
  //     isbn: "8738964935231",
  //     price: 80000
  //   }
  // ];
  // }
}
