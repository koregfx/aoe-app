import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'




@Injectable()
export class MainService {
  private url = `http://localhost:4000/api`;
  constructor(private http: HttpClient) {
    console.log('service ready to use');
  }
  getCivilizations(){
    return this.http.get(`${this.url}/civilization`);
  }
  loginUser(data: any){
    return this.http.post(`${this.url}/auth`, data)
  }
  updateUserFav(fav:any[],id: string){
    return this.http.put(`${this.url}/fav/${id}`, {fav:fav})
  }
}
