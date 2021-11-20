import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aoe-frontend';
  civilizations: any
  user:{
    name:'',
    uid:''
  }
  fav: any[]

  login(name: string){
    if(name !== ''){
      this._mainService.loginUser({name}).subscribe((data:any)=>{
        this.user = {name:data.user.name,uid:data.user.uid}
        this.fav = (data.user.fav) ? data.user.fav : []
      })
    }
  }

  constructor(private _mainService: MainService){
    _mainService.getCivilizations()
      .subscribe((data: any)=>{
      this.civilizations = data.civilizations
    })
    this.user = {
      name: '',
      uid: ''
    }
    this.fav = []
  }
  isCivFav(id: string){
    return this.fav.includes(id)
  }
  changeFav(id: string){
    if(this.fav.includes(id))
    {
      this.fav = this.fav.filter(e=> e !== id)
    }
    else{
      if(this.fav.length<3)
      this.fav.push(id)
    }
  }
  saveFav(){
    if(this.user.uid !== '')
    {

      this._mainService.updateUserFav(this.fav,this.user.uid).subscribe((data:any)=>{
        this.user = {
          name: data.user.name,
          uid: data.user.uid
        }
        this.fav = data.user.fav
      })
    }
  }
}
