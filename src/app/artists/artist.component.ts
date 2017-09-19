import {Component, OnInit} from '@angular/core';
import {ArtistService} from './artist.service';

@Component({
    selector: 'artist-app',
    templateUrl: './artist.template.html',
    providers: [ArtistService],
})

export class ArtistComponent implements OnInit {

    artistInfo = {};
    artistName: string;

    constructor(private artistService: ArtistService) {}
    ngOnInit(): void {
        this.artistInfo = this.artistService.getInfoArtist('Cher').subscribe(
            (data) => this.artistInfo = data.artist,
            (data) => console.log(data.artist.image)
        );
    }
}