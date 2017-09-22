import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*Application name	Angular
API key	90471296df5b2cc2d02093ab5295d5ff
Shared secret	2a88519b08db615337cee61048326aff
Registered to	Medved23*/

@Injectable()
export class ArtistService {

    API_KEY: string = '90471296df5b2cc2d02093ab5295d5ff';
    SECRET: string = '2a88519b08db615337cee61048326aff';

    info: any = {};

    constructor(private http: Http) {}

    getInfoArtist(artistName: string) {
        this.info = this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artistName + '&api_key=' + this.API_KEY + '&format=json').map(
            res => res.json()
        );

        return this.info;
    }
}
