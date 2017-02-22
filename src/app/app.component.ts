import { Component } from '@angular/core';
import { ModalDialogService} from '../component/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vertical Text';

  constructor(private _confirmService: ModalDialogService) {

  }

  showConfirmDialog() {
        this._confirmService.activate('Are you sure?')
            .then(res => console.log(`Confirmed: ${res}`));
    }
}
