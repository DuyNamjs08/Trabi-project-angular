import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {}
  @Input() text = '';
  @Input() class = '';
  @Input() idCategory = false;
  @Input() isEdit: boolean = false;
  @Output() onClick = new EventEmitter<void>();
  @Output() onClickEdit = new EventEmitter<void>();
  @Output() onClickSave = new EventEmitter<void>();

  getText(): string {
    if (this.isEdit && this.idCategory) {
      return 'Save';
    } else {
      return this.text;
    }
  }
  getColor(): string {
    if (this.isEdit && this.idCategory) {
      return '!bg-lime-600';
    }
    return '';
  }
  onClickEmit() {
    this.onClick.emit();
    if (this.isEdit && this.idCategory) {
      this.onClickSave.emit();
    } else {
      this.onClickEdit.emit();
    }
  }
}
