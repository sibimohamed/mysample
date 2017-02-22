import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-list',
    templateUrl: './button-list.component.html',
    styleUrls: ['./button-list.component.scss']
})

export class ButtonListComponent implements OnInit {
    
    private advanceMenuClass: string;
    private advanceMenuHide: string = "none";
    private advanceMenuShow: string = "block";
    private showSaveNew: boolean= true;
    private showAdvanceSave: boolean = true;
    private advanceActions: string[];
    public onAdvanceMenuToggle(): void {
        if (this.advanceMenuClass === this.advanceMenuHide) {
            this.onAdvanceMenuOpen();
        }
        else {
            this.onAdvanceMenuClose();
        }
    }



    public ngOnInit(): void {
        this.advanceActions = [];
        this.advanceActions.push('Test1');
        this.advanceActions.push('Test2');
        this.advanceActions.push('Test3');
    }

    private onAdvanceMenuClose(): void {
        if (this.advanceMenuClass === this.advanceMenuShow)
        { this.advanceMenuClass = this.advanceMenuHide; }
    }

    private onAdvanceMenuOpen(): void {
        if (this.advanceMenuClass === this.advanceMenuHide)
        { this.advanceMenuClass = this.advanceMenuShow; }
    }

    private onInitAdvanceMenuOpen(): void {
        this.advanceMenuClass = this.advanceMenuHide
    }
}