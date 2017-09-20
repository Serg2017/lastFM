import {Component, OnInit} from '@angular/core';
import {ArtistService} from './artist.service';

@Component({
    selector: 'artist-app',
    templateUrl: './artist.template.html',
    providers: [ArtistService],
})

export class ArtistComponent implements OnInit {

    artistInfo: any = {};
    artistName: string;
    name: string;
    image: string;
    form: any;

    constructor(private artistService: ArtistService) {}

    ngOnInit(): void {}

    setProperty() {
        this.name = this.artistInfo.name;
        this.image = this.artistInfo.image[2]['#text'];
    }

    getInfo() {
        this.artistInfo = this.artistService.getInfoArtist(this.artistName).subscribe(
            (data) => this.artistInfo = data.artist,
            err => console.log('error'),
            () => this.setProperty()
        );
    }
}
