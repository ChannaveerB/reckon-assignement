import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  handleError(handleError: Response): Observable<any> {
    return Observable.throw(handleError);
  }

  create_member(name,first,second,third,doj,status){
    console.log(name,first,second,third);
  var member =  {
      "firstName": name,
      "first": first,
      "second": second,
      "third": third,
      "doj": doj,
      "status": "active",
    }
    console.log(member);
    return this._http.post("http://localhost:3000/members", member);
  } 
 

  getmemberList(): Observable<any> {
    return this._http.get("http://localhost:3000/members");
  }

  search_member(id): Observable<any> {
    return this._http.get("http://localhost:3000/members/"+id);
  }

  delete_member(id): Observable<any> {
    return this._http.delete("http://localhost:3000/members/"+id);
  }
}
