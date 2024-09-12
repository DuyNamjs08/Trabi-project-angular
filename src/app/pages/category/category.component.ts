import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private service: FirebaseService,
    private toastr: ToastrService
  ) {}
  submitted = false;
  isEdit = false;
  idCategory = '';
  categoryField = '';
  listCategory: any = [];
  textEdit = '';
  showSuccess(text: string = 'Tạo thành công') {
    this.toastr.success(text, '', {
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
    });
  }
  showErr(text: string = 'Tạo thất bại') {
    this.toastr.error(text, '', {
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
    });
  }
  async ngOnInit(): Promise<void> {
    await this.service.getData().subscribe((res) => {
      this.listCategory = res;
    });
  }
  async onSubmit(formData: any) {
    if (!formData.value.category) {
      this.submitted = true;
    }
    if (formData.value.category) {
      await this.service
        .addData({ category: formData.value.category })
        .then((_res) => {
          this.showSuccess();
        });
      this.categoryField = '';
    }
  }
  handleChange() {
    if (!this.categoryField) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }
  onDeleteItem(id: string) {
    this.service
      .deleteData(id)
      .then((_) => this.showSuccess())
      .catch((_) => this.showErr());
  }
  onEditItem(id: string) {
    console.log('edit');
    this.isEdit = true;
    this.idCategory = id;
  }
  onSaveItem(id: string) {
    if (this.textEdit) {
      this.service
        .updateData(id, { category: this.textEdit })
        .then((_) => this.showSuccess('Cập nhật thành công !'))
        .catch((e) => this.showErr(e?.message));
    }
    this.isEdit = false;
  }
  onDocumentClick(event: any) {
    const buttonElement = document.querySelector(`.outside`);
    if (buttonElement && !buttonElement.contains(event.target as Node)) {
      this.isEdit = false;
    }
  }
  handleChangeEdit(text: any) {
    this.textEdit = text;
  }
}
