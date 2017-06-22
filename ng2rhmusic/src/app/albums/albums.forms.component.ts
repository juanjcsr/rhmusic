import { Component } from '@angular/core';
import { Album } from "./albums";

@Component({
    selector: 'album-form',
    templateUrl: 'albums.forms.component.html',
})
export class AlbumFormComponent {
    public model: Album = new Album(null, null);
    public submited = false;

    public onSubmit() {
        this.submited = true;
    }
}