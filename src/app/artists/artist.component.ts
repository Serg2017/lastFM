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

    constructor(private artistService: ArtistService) {}
    ngOnInit(): void {}

    getInfo() {
        this.artistInfo = this.artistService.getInfoArtist(this.artistName).subscribe(
            (data) => this.artistInfo = data.artist,
        );
    }

}