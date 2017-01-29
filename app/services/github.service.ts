import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'd2ffc4eb9eb74e0101c7';
  private client_secret = '47bbe1df4354647f199891d3361c8482bf88a5ad';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'wparkhurst';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&cilent_sercret='+this.client_secret)
      .map(res => res.json());
  }
}
